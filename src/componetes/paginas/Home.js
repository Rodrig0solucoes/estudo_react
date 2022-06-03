import './Home.modulo.css'
import imagem from '../../img/orc1.jpg'
import LinkBotao from '../layout/Link_botao'
function Home() {

    return(
        <div className='home_container'>
            <h1>
                Bem-Vindos ao <span>Barbosa</span>
            </h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!!!</p>
            <LinkBotao to='/NovoProjeto' text="Criar Projetos"/>
            <img src={imagem} alt="barbosa"/>
        </div>
    )
}
export default Home