import style from '../../styling/BasicPage.module.css'
import MainLayout from "./MainLayout.jsx";

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