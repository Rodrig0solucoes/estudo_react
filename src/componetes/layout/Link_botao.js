import {Link} from 'react-router-dom'
import './Link_botao.modulo.css'

function LinkBotao({ to, text }){
return(
    <Link className='btn' to={to}>
        {text}
    </Link>
)
}

export default LinkBotao