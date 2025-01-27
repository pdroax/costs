import {FaWhatsapp, FaInstagram} from 'react-icons/fa'
// import wpp from 'https://wa.me/5541920035760'
import styles from './Footer.module.css'
import img from '../../img/whatsapp.png'

function Footer(){
    return (
        <footer className={styles.footer}>
            <div className={styles.footerItems}>
                <ul className={styles.adress}>
                    <li>
                        <a href=''>Av. da República, 4370 - 1º andar - sala 13 - Parolin, Curitiba - PR, 80220-430</a>
                        <iframe src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.109446510196!2d-49.26072682352821!3d-25.46802063439915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce46190186223%3A0x2f0d289e9e415809!2sCroma%20Films%20-%20Pel%C3%ADculas%20para%20Prote%C3%A7%C3%A3o%20solar!5e0!3m2!1spt-BR!2sbr!4v1737476535981!5m2!1spt-BR!2sbr"} width="400" height="150" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </li>
                </ul>

                <ul className={styles.social_list}>

                    <li>
                        <div className={styles.hour}>
                            <h4>Horário de atendimento:</h4>
                            <p>Seg a Sex</p>
                            <p>8h as 18h</p>
                        </div>
                    </li>
                    <li>
                        <a href={'mailto:pedro.machadojs@gmail.com'}>Email@contato.com</a>

                    </li>
                    <li>
                        <a className={styles.whatsApp} href='https://wa.me/554133442029' target='_blank'>
                            <FaWhatsapp/>
                        </a>

                    </li>
                    <li>
                        <FaInstagram/>
                    </li>
                </ul>
            </div>
            <p className={styles.copy_right}><span>Croma Films</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer