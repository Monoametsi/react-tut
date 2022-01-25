function Input_field(prop){
    return (
        <div className="mb-3">
          <label className="font-weight-bold">{ prop.label }</label>
          <input type={ prop.inputType } placeholder="Enter your name" className="form-control border mt-1 rounded w-100 p-2" />
        </div>
    )
}

export default Input_field;