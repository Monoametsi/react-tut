function Users(prop){
    return (
        <div className="d-flex border flex-column container shadow rounded p-0 w-50 my-3">
            <div className="d-flex justify-content-center p-2">
                <h2>User</h2>
            </div>
            <div className="d-flex align-items-center mb-2 border-bottom p-2">
                <span className="fs-4 fw-light pe-2">Full Name:</span>
                <span className="fs-4 font-weight-bold">{prop.name}</span>
            </div>
            <div className="d-flex align-items-center p-2">
                <span className="fs-4 fw-light pe-2">Email:</span>
                <span className="fs-4 font-weight-bold">{prop.email}</span>
            </div>

            <div className="btn-cont w-100 p-2 d-flex justify-content-between">
            <button className="btn btn-primary w-50 me-2">Update {prop.name} details</button>
            <button className="btn btn-danger w-50 ms-2">Delete {prop.name}</button>
          </div>
        </div>
    )
}

export default Users;