import styles from './Products.module.css'
import fume from '../../img/fume.jpg'
function Products () {

    return (
        <section className={styles.products_container}>
            <div className={styles.products_space}>
                <ul className={styles.products}>
                    <li className={styles.product}>
                        <div className={styles.card}>
                            <img src={fume} alt='seila'></img>
                            <h2>Professional Fumê</h2>
                            <p>Disponível nas graduações 5%, 20%, 35% e 50%</p>
                        </div>
                    </li >
                    <li className={styles.product}>
                    <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>Metalizada</h2>
                            <p>
                                Película semi-brilho profissional. Muito eficiente contra o calor proveniente dos raios solares, sem ser totalmente espelhada.
                                Disponível nas graduações: 5%, 20% e 35%
                            </p>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>Segurança</h2>
                            <p>Películas mais espessas e resistentes, dão mais resistência ao vidro e impedem que ele se despedace na eventualidade da quebra. Disponível nas graduações: 5%, 20%, 35% e Transparente (Sem bloqueio de UV e IR)</p>
                        </div>
                    </li>
                    <li className={styles.product}>
                    <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>Película Jateada</h2>
                            <p>Película branca translúcida, impede a visão sem tirar a luminosidade do ambiente </p>
                    </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>Vinil Jateado</h2>
                            <p>Um pouco mais transparente que a Película Jateada, o Vinil Jateado é indicado quando se necessita privacidade sem fechar muito o ambiente</p>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>Prata Espelhada</h2>
                            <p>Película prata em ambos os lados, tem a maior eficiência no bloqueio do calor do sol entre as películas, pois ao mesmo tempo filtra e reflete os raios UV e IR. Disponível na graduação 5%</p>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>Silver Black</h2>
                            <p> Película extra-escura (graduação 3%), prata no lado externo e fumê no lado interno. Grande capacidade de bloqueio de calor do sol</p>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>Espelhada (Colorida)</h2>
                            <p>Películas espelhadas em cores diversas, com função decorativa.
                            Disponível nas cores: 
                            Vermelho espelhado, Verde Espelhado, Azul Espelhado, Dourada e Bronze
                            </p>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>Museu 56D</h2>
                            <p>Pelicula metalizada clara (56%)</p>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>LG-80</h2>
                            <p>Película clara (80%) com grande índice de bloqueio de UV (99%). Indicada para vitrines, para evitar o desbotamento causado pela incidência de raios solares. Pouco bloqueio de IR (calor). </p>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>Opacas</h2>
                            <p>Películas opacas, utilizadas quando se deseja impedir totalmente a visibilidade através do vidro. Opção de preta (Blackout) ou branca (White-Out)</p>
                        </div>
                    </li>
                    <li className={styles.product}>
                        <div className={styles.card}>
                            <img src={fume} alt=''></img>
                            <h2>Nanocerâmica</h2>
                            <p>Película premium, com alta eficiência no bloqueio de calor e UV. A versão mais clara (70%) é ideal para vitrines ou onde se deseja diminuir a incidência de calor do sol, mantendo totalmente a visibilidade. Disponível nas graduações 5%, 20%, 35% e 70%</p>
                        </div>
                    </li>
                </ul>

            </div>



        </section>
    )


}

export default Products