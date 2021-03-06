import { Link } from 'react-router-dom'

function NavBar(){
    return (
        <nav className="navbar p-2 navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Sign Up</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/users" className="nav-link">Users</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
				<li className="nav-item">
                    <Link to="/dashboard" className="nav-link">Dashboard</Link>
                </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;