import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import videoBg from '../video/background-video.mp4'
import Contact from '../layout/Contact'
import Rates from '../layout/Rates'

function Home () {
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
                    <h1 className={styles.title}>Transforme seu ambiente com <span>Croma Films</span></h1>
                    <h2 className={styles.textIn}>Segurança, conforto ou privacidade: nós temos a solução. Saiba mais sobre nossas películas</h2>
                    <p>Desde 2008 no mercado, a Croma Films é especializada em revenda de películas pelo Brasil e instalação de películas residenciais ou empresariais em Curitiba e região. Contamos com grande variedade de películas com garantia de atendimento rápido e efetivo.</p>
                    <LinkButton to={'/contact'} text='Faça um orçamento'/>
                </div>
            </div>
            <div className={styles.contentHome}>

            </div>
            <div className={styles.bgRates}>
                <div className={styles.rates}>
                    <Rates/>
                </div>
            </div>

            <div id='contato'>
                <Contact/>
            </div>
        </section>
    )
}

export default Home