import styles from "../../../styling/MovingTextBlock.module.css";

function MovingBG(){
    return(
        <div className={styles.blockWrapper}>
            <div className={styles.movingBackground}>  </div>
                <h1 className={styles.textBlockPosition}>text</h1>

        </div>
    )
}


export default MovingBG