import { Link } from "react-router-dom"
// import Container from './Container'

import styles from './Navbar.module.css'
import logo from '../../img/logo-croma-films.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.ajust_navbar}>
                <Link to='/'>
                    <img className={styles.img} src={logo} alt='Croma films' style={{width: 200}}/>
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>                  
                    </li>
                    <li className={styles.item}>
                        <Link to='/aboutus'>Sobre nós</Link>                  
                    </li>
                    <li className={styles.item}>
                        <ul>
                            <a to='/services'>Serviços</a>
                            <li>
                                <Link to='/instalation'>Instalação</Link>
                            </li>
                            <li>
                                <Link to='/sales'>Vendas</Link>  
                            </li>
                        </ul>
                    </li>
                    <li className={styles.item}>    
                        <Link to='/blog'>Blog</Link>
                    </li>
                    <li className={styles.item}>    
                        <Link to='/contact'>Contato</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar