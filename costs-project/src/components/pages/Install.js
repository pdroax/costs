import styles from './Install.module.css'
import Contact from './Contact'
import Products from '../layout/Products'

function Install () {
    return (
        <section className={styles.install_container}>
            {/* Vídeo estático */}               
            <div className={styles.content}>
                <Products/>
            </div>
            <div id='contact'>
                <Contact/>
            </div>
        </section>
    )
}

export default Install