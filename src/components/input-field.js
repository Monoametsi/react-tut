import { Link } from 'react-router-dom';

function Input_field(prop){

    return (
        <div className="mb-3">
          
          { 
          prop.label === "Password" ?  
            <div className="d-flex justify-content-between align-items-center">
              <label className="font-weight-bold">{ prop.label }</label>
              <Link to="/password-reset" className="form-link text-primary nav-link" data-mdb-ripple-color="light">Forgot Password?</Link>
            </div> 
          :
           <label className="font-weight-bold">{ prop.label }</label> 
          }

          <input type={ prop.inputType } placeholder={ prop.placeholder } className="form-control border mt-1 rounded w-100 p-2" />
        </div>
    )
}

export default Input_field;