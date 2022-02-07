
function crud_services(){
	this.deleteUser = function(user, arr, func, loader){
		loader(false);
		
		fetch(`https://users-e2390-default-rtdb.firebaseio.com/users/${user}.json`, {
			method: 'DELETE'
		}).then((response) => {
			console.log(response);
			
			arr = arr.filter((userId) => {
				return userId[0] !== user;
			})
			
			loader(true);
			func(arr);
		}).catch((err) => {
			console.log(err);
		})
	}

	this.updateUser = function(user, arr, func, loader, upDateData){
		loader(false);
		
		fetch(`https://users-e2390-default-rtdb.firebaseio.com/users/${user}.json`, {
			method: 'PATCH',
			body: JSON.stringify(upDateData),
			header: {
				'Content-Type': 'application/json'
			}
		}).then( async (response) => {
			const formData = await response.json();
			console.log(formData);
			
			const Index = arr.findIndex((userId) => {
				return userId[0] === user;
			});

			arr[Index][1].fullName = formData.fullName;
			arr[Index][1].email = formData.email;
			
			loader(true);
			func(arr);
		}).catch((err) => {
			console.log(err);
		})
	}
}

export default crud_services;