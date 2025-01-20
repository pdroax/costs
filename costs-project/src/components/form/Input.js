import styles from './Input.module.css'

function Input() {
    return (
        <div className={styles.form_control}>
            <label>Nome:</label>
            <input type='text' placeholder='Preencha seu nome'/>
            <label>E-mail:</label>
            <input type='email' placeholder='Ex: email@exemplo.com'/>
            <label>Telefone:</label>
            <input type='text' placeholder='(99)99999-9999)'/>
        </div>
    )
} 

export default Input