import Input_field from '../components/input-field';

function Sign_up() {

  return (
  <div>
    <div className="container-sm shadow rounded p-3 mt-3 w-50">
      <div className="mb-4">
        <h2>Create account</h2>
      </div>
      <div className="container-fluid-sm">
          
          <Input_field label="Full Name" inputType="text" />
          <Input_field label="Email" inputType="email" />
          <Input_field label="Password(7 characters minimum)" inputType="password" />
          <Input_field label="Confirm Password" inputType="password" />

          <div className="btn-cont w-100">
            <button className="btn btn-primary w-100">Create your movie spot account</button>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Sign_up;