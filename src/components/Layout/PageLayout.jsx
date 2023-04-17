import style from '../../styling/BasicPage.module.css'

const PageLayout=({children})=>{

    return(
        <div className={style.basicPageWrapper}>
                <div className={style.basicPageInner}>
                    {children}
                </div>
        </div>
    )
}


export default PageLayout