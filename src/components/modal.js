import Input_field from '../components/input-field';

function Modal(props) {

    return (
        <div className='modal fade' id="myModal">
            <div className='modal-dialog modal-dialog-centered'>
                <div className='modal-content'>

                    <div className='modal-header'>
                        <h4 className='modal-title'>{props.fullName} Details </h4>
                        <button type="button" className='btn-close' data-bs-dismiss="modal"></button>
                    </div>

                    <div className='modal-body'>
                        <form className="container-fluid-sm" onSubmit={props.upDate}>
                        
                            <Input_field label="Full Name" inputType="text" value={props.fullNameInput} placeholder="Enter your full name"/>
                            <Input_field label="Email" inputType="email" value={props.emailInput} placeholder="Enter your email"/>
                            {/* <Input_field label="Current Pwd" value={props.currentPwdInput} inputType="password" placeholder="Enter your current password"/>
                            <Input_field label="New Password" inputType="password" value={props.newPwdInput} placeholder="Enter your new password"/> */}
                            
                            <div className="btn-cont w-100">
                                <button type="submit" data-bs-dismiss={props.CloseModal} className="btn btn-primary w-100">Update {props.fullName} Details</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Modal;