import { useState } from 'react';
import User from './components/user';
import Input_field from './components/input-field';

function App() {
  const [ userExists, userAdded ] = useState(false);

  const submitUser = () => {
    console.log(userExists);
  }

  return (
  <div>
    <div className="container-sm shadow rounded p-3 mt-3 w-50">
      <div>
        <h2>Create account</h2>
      </div>
      <div className="container-fluid-sm">
          
          <Input_field label="Full Name" inputType="text" />
          <Input_field label="Email" inputType="email" />
          <Input_field label="Password" inputType="password" />
          <Input_field label="Confirm Password" inputType="password" />

          <div className="btn-cont w-100">
            <button className="btn btn-primary w-100" onClick={submitUser}>Create your movie spot account</button>
          </div>
      </div>
    </div>
    
    <User name="MJ" email="myEmail@gmail.com"/>
  </div>
  )
}

export default App;