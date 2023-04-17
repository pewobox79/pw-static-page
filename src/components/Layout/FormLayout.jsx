import styles from '../../styling/FormLayout.module.css'

const FormLayout =({children})=>{
    return(
        <div className={styles.formLayoutContainer}>
            <div className={styles.formLayoutInner}>
                <div className={styles.formWrapper}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FormLayout