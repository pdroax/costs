import styles from './Home.module.css'
import LinkButton from '../layout/LinkButton'
import videoBg from '../video/background-video.mp4'
import Contact from '../pages/Contact'

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
                    <h1 className={styles.title}>Bem-vindo a <span>Croma</span></h1>
                    <p className={styles.textIn}>Os melhores insulfims para sua residencia ou comercio estão aqui</p>
                    <LinkButton to={'/contact'} text='Faça um orçamento'/>
                </div>

            </div>
            <div id='contato'>
                <Contact/>
            </div>
        </section>
    )
}

export default Home