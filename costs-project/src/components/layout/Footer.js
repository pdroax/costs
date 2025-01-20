import {FaWhatsapp, FaInstagram} from 'react-icons/fa'
// import wpp from 'https://wa.me/5541920035760'
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href='https://wa.me/5541920035760' target='_blank'>
                        <FaWhatsapp/>
                    </a>
                </li>
                <li>
                    <FaInstagram/>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Croma Films</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer