import { NavLink } from "react-router-dom"
// import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/logo-croma-films.png'

function Navbar() {
    
    
    return (

        <nav className={styles.navbar}>
            <div className={styles.ajust_navbar}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                            <NavLink to='/install'>Instalação</NavLink>
                        </li>

                        <li className={styles.item}>
                            <NavLink to='/sales' className={({isActive}) => isActive ? "isActive" : ""}>Revendas</NavLink>  
                        </li>

                        <li className={styles.item}>    
                            <NavLink to='/blog' activeClassName='selected'>Blog</NavLink>
                        </li>

                        <li className={styles.img}>
                            <NavLink to='/'>
                                <img className={styles.img} src={logo} alt='Croma films' style={{width: 200}}/>
                            </NavLink>
                        </li>

                        <li className={styles.item}>
                            <NavLink to='/' className={({isActive}) => isActive ? "isActive" : ""}>Home</NavLink>                  
                        </li>
                        <li className={styles.item}>
                            <NavLink to='/aboutus' activeClassName='selected'>Sobre nós</NavLink>                  
                        </li>
    
                        <li className={styles.item}>    
                            <NavLink to="/contact" activeClassName='selected'>Contato</NavLink>
                        </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar