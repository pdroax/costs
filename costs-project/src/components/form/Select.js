import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>
                Selecione:
            </label>
        <select>
            <option>Selecione uma opção</option>
        </select>
        </div>
    )
} 

export default Select