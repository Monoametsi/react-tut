import Dasboard_header from '../components/dashboard-header'
import { Link } from 'react-router-dom';

function Edit_profile() {
  return (
    <div>
      <Dasboard_header title="Edit Settings" Class="d-none" />

      <div className='d-flex justify-content-center align-items-center mt-4'>
        <ul className='list-group shadow w-50'>
          <li className='list-group-item d-flex justify-content-between  align-items-center'>
            <div className='d-flex flex-column'>
              <span className="fw-bold">Name:</span>
              <span>Monoametsi</span>
            </div>

            <Link to="/edit-profile/name">
              <button className='btn btn-primary'>
                  Edit
              </button>
            </Link>
          </li>
          <li className='list-group-item d-flex justify-content-between  align-items-center'>
            <div className='d-flex flex-column'>
              <span className="fw-bold">Password:</span>
              <span>*******</span>
            </div>

            <Link to="/edit-profile/password">
              <button className='btn btn-primary'>
                  Edit
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Edit_profile;