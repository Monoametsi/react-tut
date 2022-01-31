import { Link } from 'react-router-dom'

function Dasboard_box_link(props) {
    return (
        <Link to={props.link} className="box nav-link d-flex align-items-center justify-content-center shadow rounded p-5 m-3">
			<h1 className="text-dark fs-2">{props.title}</h1>
        </Link>
    )
}

export default Dasboard_box_link;