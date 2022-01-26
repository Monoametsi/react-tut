import { Route,Routes } from 'react-router-dom';
import Sign_up from './pages/sign-up';
import Users from './pages/users';
import Login from './pages/login';
import Pwd_Reset from './pages/password-reset';
import NavBar from './components/layout/main-navigation';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={< Sign_up />} />
        <Route path="/users" element={< Users />} />
        <Route path="/login" element={< Login />} />
        <Route path="/password-reset" element={< Pwd_Reset />} />
      </Routes>
    </div>
  )
}

export default App;