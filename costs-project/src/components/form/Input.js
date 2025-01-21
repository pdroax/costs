import styles from './Input.module.css'

function Input() {
    return (
        <div className={styles.form_control}>
            <label>
                Nome:
            </label>
            <input type='text'/>
        </div>
    )
} 

export default Input