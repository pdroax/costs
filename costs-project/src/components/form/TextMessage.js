import styles from './TextMessage.module.css'

function TextMessage() {
    return (
        <div className={styles.form_control}>
            <label>Deixe sua mensagem:</label>
            <textarea type='textarea' placeholder='Descreva melhor o que deseja'/>
  </div>
    )
} 

export default TextMessage