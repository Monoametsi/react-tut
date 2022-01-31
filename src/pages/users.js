import { useState, useEffect, useRef } from 'react'
import crud_services from '../api-services/crud-services'
import Loader from '../components/loader';
import Modal from '../components/modal';

function Users(){
	const api_services = new crud_services();
	const [users, loadedUsers] = useState([]);
	const [loaded, loading] = useState(false);
	const [userName, getUserName] = useState(null);
	const [userId, getUserId] = useState(null);
	const [modal, closeModal] = useState("");
	const fullName = useRef();
	const email = useRef();
	const currentPwd = useRef();
	const newPwd = useRef();

	const setValues = (userName, userEmail, userId) => {
		fullName.current.value = userName;
		email.current.value = userEmail;
		getUserId(userId);
	}

	const upDateUser = (event) => {
		event.preventDefault();
		
		const fullNameInput = fullName.current.value;
		const emailInput = email.current.value;
		
		const formData = {
			fullName: fullNameInput.trim(),
			email: emailInput.trim()
		}
		
		if(fullNameInput.length === 0){
			closeModal('');
			console.log(modal)
		}else{
			closeModal("modal");
			api_services.updateUser(userId, users, loadedUsers, loading, formData);
		}
		
	}
    
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
	
	<Modal upDate={upDateUser} CloseModal={modal} fullName={userName} fullNameInput={fullName} emailInput={email} currentPwdInput={currentPwd} newPwdInput={newPwd} />

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
			<button className="btn btn-primary w-50 me-2" data-bs-toggle="modal" data-bs-target="#myModal" onClick={() => { 
				setValues(user[1].fullName, user[1].email, user[0]);
				getUserName(user[1].fullName);
			}}>Update {user[1].fullName} details</button>
			<button className="btn btn-danger w-50 ms-2" onClick={() => { api_services.deleteUser(user[0], users, loadedUsers, loading)}}>Delete {user[1].fullName}</button>
		  </div>
		</div>
	})}
	</div>
	)
	
}

export default Users;