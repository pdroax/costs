import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton'

function Home () {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo a <span>Croma</span></h1>
            <p>As melhores películas para sua residencia ou comercio estão aqui</p>
            <LinkButton to='/newproject' text='Entre em contato'/>
            <img src={savings} alt='Croma'/>
        </section>
    )
}

export default Home