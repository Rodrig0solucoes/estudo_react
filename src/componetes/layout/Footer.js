import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import './Footer.modulo.css'


function Footer () {
    return(
        <footer className='footer'>
            <ul className='lista_social'>
                <li>
                    <FaFacebook/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
                <li>
                    <FaLinkedin/>
                </li>
            </ul>
            <p className='copy_right'>
                <span>Barbosa</span> &copy; 2022
            </p>
        </footer>
    )
}

export default Footer