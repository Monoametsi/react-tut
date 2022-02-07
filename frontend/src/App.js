import { Route,Routes } from 'react-router-dom';
import Sign_up from './pages/sign-up';
import Users from './pages/users';
import Login from './pages/login';
import Pwd_Reset from './pages/password-reset';
import NavBar from './components/layout/main-navigation';
import Dashboard from './pages/dashboard';
import Account_Settings from './pages/account-settings';
import Edit_profile from './pages/edit-profile';
import My_Wishlist from './pages/my-wishlist';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={< Sign_up />} />
        <Route path="/users" element={< Users />} />
        <Route path="/login" element={< Login />} />
        <Route path="/password-reset" element={< Pwd_Reset />} />
        <Route path="/dashboard" element={< Dashboard />} />
        <Route path="/accout-settings" element={< Account_Settings />} />
        <Route path="/edit-profile" element={< Edit_profile />} />
        <Route path="/my-wishlist" element={< My_Wishlist />} />
      </Routes>
    </div>
  )
}

export default App;