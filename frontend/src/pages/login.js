import { useRef } from 'react';
import Input_field from "../components/input-field";
import { Link } from 'react-router-dom';
import validator from '../components/form-validator';

function Login(){
    const email = useRef();
    const pwd = useRef();

    const formDataSender = (event) => {
        event.preventDefault();
		
		const inputValidator = new validator();
        const emailInput = email.current.value;
        const pwdInput = pwd.current.value;
		const checkEmpty = !inputValidator.checkEmpty(emailInput) || !inputValidator.checkEmpty(pwdInput);

        const formData = {
            email: inputValidator.checkEmpty(emailInput),
            pwd: inputValidator.checkEmpty(pwdInput)
        }

        if(checkEmpty){
			alert('All fields must be filled');
		}else{
			alert(`Welcome ${inputValidator.checkEmpty(emailInput)}`);
		}
    }

    return (
        <div>
            <div className="container-sm shadow rounded p-3 mt-3 w-50">
                <div className="mb-4">
                    <h2>Login to your account</h2>
                </div>
                <form className="container-fluid-sm" onSubmit={formDataSender}>
                    
                    <Input_field label="Email" value={email} inputType="email" placeholder="Enter your email"/>
                    <Input_field label="Password" value={pwd} inputType="password" placeholder="Enter your password"/>

                    <div className="btn-cont w-100">
                        <button className="btn btn-primary w-100">Login</button>
                    </div>
                </form>
            </div>

            <div className="d-flex justify-content-center align-items-center container-sm shadow rounded p-3 mt-3 w-50">
                <div className="d-flex align-items-center"> New to Movie Spot? <Link to="/" className="form-link text-primary nav-link">Create an account</Link> </div>
            </div>
        </div>
    )
}

export default Login;