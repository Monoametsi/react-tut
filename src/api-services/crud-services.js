
function crud_services(){
	this.deleteUser = function(user, arr, func){
		fetch(`https://users-e2390-default-rtdb.firebaseio.com/users/${user}.json`, {
			method: 'DELETE'
		}).then((response) => {
			console.log(response);
			
			arr = arr.filter((userId) => {
				return userId[0] !== user;
			})
			
			func(arr);
		}).catch((err) => {
			console.log(err);
		})
	}
}

export default crud_services;