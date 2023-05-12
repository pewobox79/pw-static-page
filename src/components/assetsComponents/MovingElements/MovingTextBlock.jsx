import styles from '../../../styling/MovingTextBlock.module.css'

function MovingTextBlock({text}){
    return(
        <div className={styles.blockWrapper}>
            <div className={styles.movingTextBlock}>
                <h1>{text}</h1>
            </div>
        </div>
    )
}

export default MovingTextBlock