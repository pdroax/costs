import styles from './Select.module.css'

function Select() {
    return (
        <div className={styles.form_control}>
            <label>Selecione o assunto:</label>
            <select>
                <option value="" selected>Selecione</option>
                <option>Orçamento de instalação</option>
                <option>Orçamento de Insulfilms</option>
            </select>
        </div>
    )
} 

export default Select