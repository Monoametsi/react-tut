import { Route,Routes } from 'react-router-dom';
import Sign_up from './pages/sign-up';
import Users from './pages/users';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={< Sign_up />} />
      </Routes>
      <Route path="/users" element={< Sign_up />} />
      {/* <Route path="/success">
        <success />
      </Route> */}
    </div>
  )
}

export default App;