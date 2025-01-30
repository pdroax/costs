import styles from './Products.module.css'

function Products () {

    return (
        <section className={styles.products_container}>
            <div>
                <ul className={styles.products}>
                    <li className={styles.product}>
                        <div>
                            <img src='' alt=''></img>
                            <h2>Professional Fumê</h2>
                            <p></p>
                            <h3>Graduações:</h3>
                            <ul>
                                <li>5%</li>
                                <li>20%</li>
                                <li>35%</li>
                                <li>50%</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                    <div>
                            <img src='' alt=''></img>
                            <h2>Metalizada</h2>
                            <p>Película semi-brilho profissional. Muito eficiente contra o calor proveniente dos raios solares, sem ser totalmente espelhada</p>
                            <h3>Graduações:</h3>
                            <ul>
                                <li>5%</li>
                                <li>20%</li>
                                <li>35%</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='' alt=''></img>
                            <h2>Segurança</h2>
                            <p>Películas mais espessas e resistentes, dão mais resistência ao vidro e impedem que ele se despedace na eventualidade da quebra</p>
                            <h3>Graduações:</h3>
                            <ul>
                                <li>5%</li>
                                <li>20%</li>
                                <li>35%</li>
                                <li>Transparente(Sem bloqueio de UV e IR)</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                    <div>
                            <img src='' alt=''></img>
                            <h2>Película Jateada</h2>
                            <p>Película branca translúcida, impede a visão sem tirar a luminosidade do ambiente </p>
                            <h3>Graduações:</h3>
                    </div>
                    </li>
                    <li>
                        <div>
                            <img src='' alt=''></img>
                            <h2>Vinil Jateado</h2>
                            <p>Um pouco mais transparente que a Película Jateada, o Vinil Jateado é indicado quando se necessita privacidade sem fechar muito o ambiente</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='' alt=''></img>
                            <h2>Prata Espelhada</h2>
                            <p>Película prata em ambos os lados, tem a maior eficiência no bloqueio do calor do sol entre as películas, pois ao mesmo tempo filtra e reflete os raios UV e IR. Disponível na graduação 5%</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='' alt=''></img>
                            <h2>Silver Black</h2>
                            <p> Película extra-escura (graduação 3%), prata no lado externo e fumê no lado interno. Grande capacidade de bloqueio de calor do sol</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='' alt=''></img>
                            <h2>Espelhada (Colorida)</h2>
                            <p>Películas espelhadas em cores diversas, com função decorativa</p>
                            <h3>Cores:</h3>
                            <ul>
                                <li>Vermelho Espelhado</li>
                                <li>Verde Espelhado</li>
                                <li>Azul Espelhado</li>
                                <li>Dourada</li>
                                <li>Bronze</li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='' alt=''></img>
                            <h2>Museu 56D</h2>
                            <p>Pelicula metalizada clara (56%)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='' alt=''></img>
                            <h2>LG-80</h2>
                            <p>Película clara (80%) com grande índice de bloqueio de UV (99%). Indicada para vitrines, para evitar o desbotamento causado pela incidência de raios solares. Pouco bloqueio de IR (calor). </p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='' alt=''></img>
                            <h2>Opacas</h2>
                            <p>Películas opacas, utilizadas quando se deseja impedir totalmente a visibilidade através do vidro. Opção de preta (Blackout) ou branca (White-Out)</p>
                        </div>
                    </li>
                    <li>
                        <div>
                            <img src='' alt=''></img>
                            <h2>Nanocerâmica</h2>
                            <p>Película premium, com alta eficiência no bloqueio de calor e UV. A versão mais clara (70%) é ideal para vitrines ou onde se deseja diminuir a incidência de calor do sol, mantendo totalmente a visibilidade.</p>
                            <h3>Graduações:</h3>
                            <li>5%</li>
                            <li>20%</li>
                            <li>35%</li>
                            <li>70%</li>
                        </div>
                    </li>
                </ul>

            </div>



        </section>
    )


}

export default Products