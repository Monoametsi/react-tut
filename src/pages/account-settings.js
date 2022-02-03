import Dasboard_box_link from '../components/dashboard-box-link'
import Dasboard_header from '../components/dashboard-header'

function Account_Settings(){
	 return (
	<div>
		<Dasboard_header title="Account Settings" Class="d-none"/>
        <div className="d-flex flex-wrap justify-content-center mt-5">
			
			<Dasboard_box_link link="/edit-profile" title="Edit-Profile" icon="fa fa-user text-dark fs-2"/>
			
			<Dasboard_box_link link="/delete-account" title="Delete-Account" icon="fa fa-trash text-dark fs-2"/>
			
        </div>
	</div>
    )
}

export default Account_Settings