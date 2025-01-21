import {FaWhatsapp, FaInstagram} from 'react-icons/fa'

import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaWhatsapp/>
                </li>
                <li>
                    <FaInstagram/>
                </li>
            </ul>
            <p className={styles.copy_right}><span>Croma</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer