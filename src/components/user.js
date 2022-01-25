function User(prop){
    return (
        <div className="d-flex border flex-column container shadow rounded p-0 w-50 mt-3">
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
        </div>
    )
}

export default User;