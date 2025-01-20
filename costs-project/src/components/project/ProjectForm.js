import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'
import TextMessage from '../form/TextMessage'
import styles from './ProjectForm.module.css'



function ProjectForm () {

    return (
        <div className={styles.contato}>
            <form className={styles.form}>
                {/* inputs necessários para armazenar dados inseridos pelo usuário */}
                <Input/>

                <Select/>
    
                <TextMessage/>
                
                {/* Botão para enviar e-mail*/}
                <SubmitButton/>

                
            </form>
        </div>
    )
}

export default ProjectForm