import styles from './Sales.module.css'
import Contact from './Contact'
import Products from '../layout/Products'

function Sales () {
    return (
        <section className={styles.sales_container}>             
            <div>
                <Products/>
            </div>
            <div id='contact'>
                <Contact/>
            </div>
        </section>
    )
}

export default Sales