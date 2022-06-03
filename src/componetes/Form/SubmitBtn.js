import "./SubmitBtn.modulo.css"

function SubmitBtn({ text }) {

    return(
        
        <div className='form_submitBtn_control'>
          <button>{text}</button>
        </div>
    )
}
export default SubmitBtn