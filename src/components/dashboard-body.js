import Dasboard_box_link from './dashboard-box-link'

function Dasboard_body() {
    return (
        <div className="d-flex flex-wrap justify-content-center mt-5">
			
			<Dasboard_box_link link="accout-settings" title="Accout-settings"/>
			
			<Dasboard_box_link link="my-wishlist" title="My-Wishlist"/>
			
        </div>
    )
}

export default Dasboard_body;