import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <div className="container-fluid shadow rounded p-3 mt-3 w-50">
    <div>
      <h1>Create account</h1>
    </div>
    <div className="container-fluid">
      <div>
        <h2>Your name</h2>
        <input type="text" placeholder="Enter your name" />
      </div>
      <div>
        <h2>Email</h2>
        <input type="email" placeholder="Enter your email" />
      </div>
      <div>
        <h2>Password</h2>
        <input type="password" placeholder="Enter your password" />
      </div>
      <div>
        <h2>Confirm password</h2>
        <input type="text" placeholder="Re-enter your password" />
      </div>
        <div className="btn-cont">
          <button className="btn btn-primary">Create your movie spot account</button>
        </div>
    </div>
  </div>
  )
}

export default App;