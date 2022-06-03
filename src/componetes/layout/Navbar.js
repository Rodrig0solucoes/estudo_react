import { Link } from 'react-router-dom'

/*import Container from './Container'*/
import './Navbar.modulo.css'
import logo from '../../img/orcamento.jpg'


function Navbar() {
    return(
        <nav class='navbar'>
            
                <Link to="/">
                    <img class='img' src={logo} alt="Barbosa" height={100}/>
                </Link>
                <ul class='list'>
                    <li class='item'>
                        <Link to="/">Home</Link>
                    </li>
                    <li class='item'>
                        <Link to="/projetos">Projetos</Link>
                    </li>
                    <li class='item'>
                        <Link to="/contatos">Contatos</Link>
                    </li>
                    <li class='item'>
                        <Link to="/empresa">Empresa</Link>
                    </li>
                </ul>
            
        </nav>
    )
}

export default Navbar