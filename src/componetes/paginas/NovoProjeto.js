import ProjetoFomulario from '../Projeto/ProjetoFormulario'

import'./NovoProjeto.modulo.css'

function NovoProjeto() {

    return(
        <div className='novoProjeto_container'>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoFomulario btntext="Criar Projeto" />
        </div>

    )
}
export default NovoProjeto