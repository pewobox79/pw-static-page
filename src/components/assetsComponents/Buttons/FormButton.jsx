import styles from '../../../styling/Buttons.module.css'

export default function FormButton({handleClick, type, title, status, placeholder}){


    return(
        <button className={status ? styles.formButtonStylingDeactive :styles.formButtonStyling} disabled={status} type={type} onClick={handleClick} >{title}</button>
    )
}