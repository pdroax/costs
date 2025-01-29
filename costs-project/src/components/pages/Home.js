import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import videoBg from '../video/background-video.mp4'
import Contact from '../pages/Contact'
import Rates from '../layout/Rates'
import { useParams } from 'react-router-dom'

function Home () {

    const {id} = useParams();

    return (
        <section className={styles.home_container}>
            {/* Vídeo estático */}
            <div className={styles.video} >

                <video 
                    src={videoBg} 
                    autoPlay muted loop
                    poster='<a href="https://br.freepik.com/video-gratuito/mulher-negocios-pe-janela-escritorio-empreendedor-desfrutando-vista-cidade_1447140#fromView=search&page=1&position=41&uuid=884945f2-3a53-4b2e-b681-0f4e23656047">Vídeo de Stockbusters</a>'>
                </video>
                
                <div className={styles.content}>
                    <div>
                        <h1 className={styles.title}>Transforme seu ambiente com <span>Croma Films</span></h1>
                        <h2 className={styles.textIn}>Segurança, conforto ou privacidade: nós somos a solução.</h2>
                        <div className={styles.textPitch}>
                            <p>
                                Desde 2008 no mercado, a Croma Films é especializada 
                                em revenda de películas pelo Brasil e instalação de películas 
                                residenciais ou empresariais em Curitiba e região. 
                                Contamos com grande variedade de películas com garantia 
                                de atendimento rápido e efetivo.
                            </p>
                        </div>
                        <LinkButton to={'/contact'} text='Faça um orçamento'/>
                    </div>
                </div>
            </div>
            <div className={styles.bgRates}>
                <div className={styles.rates}>
                    <Rates/>
                </div>
            </div>

            <div id={"contact"}>
                <br></br>
                <br></br>
                <Contact/>
            </div>
        </section>
    )
}

export default Home