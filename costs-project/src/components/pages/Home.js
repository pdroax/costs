import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import videoBg from '../../img/4749771_Businesswoman_Office_3840x2160.mp4'

function Home () {
    return (
        <section className={styles.home_container}>
            <div className={styles.textoHome}>
                <h1>Bem-vindo a Croma</h1>
                <p>Os melhores insulfims para sua casa ou negócio</p>
                <LinkButton to='/contato' text='Faça um orçamento'/>
            </div>
            <div className={styles.video}>
                <video src={videoBg} autoPlay loop/>

            </div>
        </section>
    )
}

export default Home