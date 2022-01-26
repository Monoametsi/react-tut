import Input_field from "../components/input-field";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login(){
    const [showFPWD, hideFPWD] = useState(false);

    return (
        <div>
            <div className="container-sm shadow rounded p-3 mt-3 w-50">
                <div className="mb-4">
                    <h2>Login to your account</h2>
                </div>
                <div className="container-fluid-sm">
                    
                    <Input_field label="Email" inputType="email" placeholder="Enter your email"/>
                    <Input_field label="Password" inputType="password" placeholder="Enter your password"/>

                    <div className="btn-cont w-100">
                        <button className="btn btn-primary w-100">Login</button>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center container-sm shadow rounded p-3 mt-3 w-50">
                <div className="">
                    <p> New to Movie Spot? <Link to="/sign-up" className="form-link text-primary nav-link">Create an account</Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Login;