import Input from "../Form/Input"
import Select from "../Form/Select"
import SubmitBtn from "../Form/SubmitBtn"
import './ProjetoForm.modulo.css'


function ProjetoFomulario({btntext}){
    return(
        <form className='form'>
            <Input 
            type='text' 
            text='Nome do projeto' 
            name='name'
            placeholder='Insira o nome do projeto'
            />
            <Input 
            type='number' 
            text='Orçamento do projeto' 
            name='name'
            placeholder='Insira o orçamento total'
            />
            <Select name='categoria_id'text='Selecione a categoria'/>

            <SubmitBtn text={btntext}/>
        </form>
    )
}

export default ProjetoFomulario