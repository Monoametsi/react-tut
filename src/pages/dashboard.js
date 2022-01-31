import Dasboard_body from '../components/dashboard-body'
import Dasboard_header from '../components/dashboard-header'

function Dashboard() {
    return (
        <div className="container-fluid">
            <Dasboard_header />
            <Dasboard_body />
        </div>
    )
}

export default Dashboard;