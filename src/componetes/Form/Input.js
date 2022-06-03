import "./Input.modulo.css"

function Input({type, text, name, placeholder, handleOnchange, value}) {

    return(
        
        <div className='form_control'>
            <label htmlFor={name}>{text}:</label>
            <input 
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                onchange={handleOnchange}
                value={value}
             />
        </div>
    )
}
export default Input