import { Route,Routes } from 'react-router-dom';
import Sign_up from './pages/sign-up';
import Users from './pages/users';
import Login from './pages/login';
import NavBar from './components/layout/main-navigation';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={< Sign_up />} />
        <Route path="/users" element={< Users name="MJ" email="myEmail@gmail.com" />} />
        <Route path="/login" element={< Login />} />
      </Routes>
    </div>
  )
}

export default App;