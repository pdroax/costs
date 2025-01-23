import styles from './Instalation.module.css'
import Contact from '../layout/Contact'

function Install () {
    return (
        <section className={styles.home_container}>
            {/* Vídeo estático */}               
            <div className={styles.content}>
                <h1 className={styles.title}>Nossa parceria começa <span>aqui</span></h1>
            </div>
            <div id='contato'>
                <Contact/>
            </div>
        </section>
    )
}

export default Install