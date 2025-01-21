import { Link } from "react-router-dom"
// import Container from './Container'

import styles from './Navbar.module.css'
// import logo from '../../img/logo-croma-films.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.ajust_navbar}>
                <Link to='/'>
                    {/* <img className={styles.img} src={logo} alt='Croma-films'/> */}
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to='/'>Home</Link>                  
                    </li>
                    <li className={styles.item}>
                        <Link to='/instalacao'>Serviços</Link>                  
                    </li>
                    <li className={styles.item}>
                        <Link to='/contato'>Contato</Link>
                    </li>
                    <li className={styles.item}>    
                        <Link to='/sobreNos'>Sobre nós</Link>
                    </li>
                    <li className={styles.item}>    
                        <Link to='/blog'>Blog</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar