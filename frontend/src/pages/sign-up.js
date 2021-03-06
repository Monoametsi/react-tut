import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import validator from '../components/form-validator';
import Input_field from '../components/input-field';
import Loader from '../components/loader.js';

function Sign_up() {
  const [loading, loadDone] = useState(false);
  const navigate = useNavigate();
  const fullName = useRef();
  const email = useRef();
  const pwd = useRef();
  const confirmPwd = useRef();

  const subFormData = (event) => {
    event.preventDefault();
    
	  const inputValidator = new validator();
    const fullNameInput = fullName.current.value;
    const emailInput = email.current.value;
    const pwdInput = pwd.current.value;
    const confirmPwdInput = confirmPwd.current.value;
	  const checkEmpty = !inputValidator.checkEmpty(confirmPwdInput) || !inputValidator.checkEmpty(fullNameInput) || !inputValidator.checkEmpty(emailInput) || !inputValidator.checkEmpty(pwdInput);
	
	if(checkEmpty){
      alert('All fields must be filled');
    }else if(!inputValidator.mailValidator(emailInput)){
      alert('Email is invalid');
    }else if(!inputValidator.pwdValidator(pwdInput)){
      alert('Password should be more than 8 characters');
    }else if(!inputValidator.pwdMatchValidator(pwdInput, confirmPwdInput)){
      alert('Passwords do not match');
    }else{
		loadDone(true);
		
		const formData = {
		  fullName: inputValidator.checkEmpty(fullNameInput),
		  email: inputValidator.mailValidator(emailInput),
		  pwd: inputValidator.pwdValidator(pwdInput)
		}
		
		fetch('http://localhost:4000/api/react-login/register', {
		  method: 'POST',
		  body: JSON.stringify(formData),
		  headers: {
			'Content-Type': 'application/json'
		  },
      credentials: 'include'
		}).then((result) => {
		  console.log(result); 
		  navigate("/users", {replace:true});
		}).catch((err) => {
		  loadDone(false);
		  console.log(err);
		})
	}
	
  }

return (
  
  <div>
	
	{ loading ? <Loader /> : null}
    <div className="container-sm shadow rounded p-3 mt-3 w-50">
      <div className="mb-4">
        <h2>Create account</h2>
      </div>
      <form className="container-fluid-sm" onSubmit={subFormData}>
          
          <Input_field label="Full Name" inputType="text" value={fullName} placeholder="Enter your full name"/>
          <Input_field label="Email" inputType="email" value={email} placeholder="Enter your email"/>
          <Input_field label="Password(7 characters minimum)" value={pwd} inputType="password" placeholder="Enter your password"/>
          <Input_field label="Confirm Password" inputType="password" value={confirmPwd} placeholder="Re-enter your password"/>
          
          <div className="btn-cont w-100">
            <button className="btn btn-primary w-100">Create your movie spot account</button>
          </div>
      </form>
    </div>
  </div>
  
  )
}

export default Sign_up;