import Dasboard_header from '../components/dashboard-header'
import { useParams, useNavigate } from 'react-router-dom';
import Input_field from "../components/input-field";
import {  useEffect, useRef } from 'react'

function Edit_profile_form (){
    const { element } = useParams();
    const navigate = useNavigate();
    const value = useRef();
    const oldPwd = useRef();
    const newPwd = useRef();
    const capFirstLetter = element[0].toUpperCase();
    const capitalizedStr = capFirstLetter + element.slice(1, element.length);
    
    useEffect(() => {

        if(element !== 'password' && element !== 'name'){
            navigate('/dashboard', {replace:true})
        }

        if(value.current){
            value.current.value = element;
        }
    }, [])

    return (
        <div>
            <Dasboard_header title={`Change your ${element}`} Class="d-none" />

            <div className='container d-flex justify-content-center mt-3'>
                <div className='card w-50'>
                    <div className='card-body'>
                        <p className='card-text'>
                        If you want to change the {element} associated with your account, 
                        you may do so below. Be sure to click the Save Changes button when 
                        you are done.
                        </p>

                        <form>

                            { element === 'password' ? 
                            <div>
                                <div className='mt-3'>
                                    <Input_field label={`Current ${capitalizedStr}:`} value={oldPwd} inputType="password" placeholder={`Enter your current ${element}`} />
                                </div>

                                <div className='mt-3'>
                                    <Input_field label={`New ${capitalizedStr}:`} value={newPwd} inputType="password" placeholder={`Enter your new ${element}`} />
                                </div>
                            </div>
                            : 
                            <div className='mt-3'>
                                <Input_field label={`${capitalizedStr}:`} value={value} inputType="name" placeholder={`Enter your new ${element}`}/>
                            </div> 
                        }

                            <div className="btn-cont w-100">
                                <button className="btn btn-primary w-100">Save Changes</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit_profile_form ;