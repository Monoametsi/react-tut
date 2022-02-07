import Dasboard_header from '../components/dashboard-header'

function Edit_profile() {
  return (
    <div>
      <Dasboard_header title="Edit Settings" Class="d-none" />

      <div className='d-flex justify-content-center mt-3'>
        <ul className='list-group shadow w-25'>
          <li className='list-group-item d-flex justify-content-between  align-items-center'>
            <div className='d-flex flex-column'>
              <span>Name:</span>
              <span>Monoametsi</span>
            </div>

            <div>
              <button className='btn btn-primary'>
                  Edit
              </button>
            </div>
          </li>
          <li className='list-group-item d-flex justify-content-between  align-items-center'>
            <div className='d-flex flex-column'>
              <span>Password:</span>
              <span>*******</span>
            </div>

            <div>
              <button className='btn btn-primary'>
                  Edit
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Edit_profile;