import styles from '../../../styling/DashboardStyling/OverviewPage.module.css'
import ToDoList from "../DashboardContent/ToDoes/ToDoList.jsx";
const OverviewPage =()=>{
    return(
        <div className={styles.overviewPageWrapper}>
            <ToDoList/>


        </div>
    )
}

export default OverviewPage