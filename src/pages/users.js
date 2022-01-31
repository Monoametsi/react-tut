import { useState, useEffect } from 'react'
import crud_services from '../api-services/crud-services'
import Loader from '../components/loader.js';

function Users(){
	const api_services = new crud_services();
	const [users, loadedUsers] = useState([]);
	const [loaded, loading] = useState(false);
    
    useEffect(() => {
	   loading(false);
	   
	   fetch('https://users-e2390-default-rtdb.firebaseio.com/users.json').then( async (result) => {
			const res = await result.json();
			return res;
		}).then((data) => {
			const users = [];
			
			Object.keys(data).forEach((key) => {
				users.push([key, data[key]]);
			})
			
			loading(true);
			loadedUsers(users);
		}).catch((err) => {
		  console.log(err);
		})
	}, [])
	
	return (
	<div>
	
	{ !loaded ? <Loader /> : null }
	
	{ users.map((user) => {
		return <div key={user[0]} className="d-flex border flex-column container shadow rounded p-0 w-50 my-3">
			<div className="d-flex justify-content-center p-2">
				<h2>User</h2>
			</div>
			<div className="d-flex align-items-center mb-2 border-bottom p-2">
				<span className="fs-4 fw-light pe-2">Full Name:</span>
				<span className="fs-4 font-weight-bold">{user[1].fullName}</span>
			</div>
			<div className="d-flex align-items-center p-2">
				<span className="fs-4 fw-light pe-2">Email:</span>
				<span className="fs-4 font-weight-bold">{user[1].email}</span>
			</div>
			
			<div className="btn-cont w-100 p-2 d-flex justify-content-between">
			<button className="btn btn-primary w-50 me-2">Update {user[1].fullName} details</button>
			<button className="btn btn-danger w-50 ms-2" onClick={() => { api_services.deleteUser(user[0], users, loadedUsers, loading)}}>Delete {user[1].fullName}</button>
		  </div>
		</div>
	})}
	</div>
	)
	
}

export default Users;