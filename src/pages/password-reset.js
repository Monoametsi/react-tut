import Input_field from "../components/input-field";

function Pwd_Reset(){
    return (
        <div>
            <div className="container-sm shadow rounded p-3 mt-3 w-50">
                <div className="mb-4">
                    <h2>Reset your password</h2>
                </div>
                <div className="container-fluid-sm">

                    <div className="mb-2">
                        Enter your user account's verified email address and we will send you a password reset link.
                    </div>
                    
                    <Input_field label="Email" inputType="email" placeholder="Enter your email"/>

                    <div className="btn-cont w-100">
                        <button className="btn btn-primary w-100">Send Password Reset Email</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pwd_Reset;