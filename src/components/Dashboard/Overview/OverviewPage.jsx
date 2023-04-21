import styles from '../../../styling/DashboardStyling/OverviewPage.module.css'

import {UserContext} from "../../Layout/DashboardLayout.jsx";
import {useContext} from "react";
const OverviewPage =()=>{
    const context = useContext(UserContext)
    return(
        <div className={styles.overviewPageWrapper}>
            <h1>Welcome {context?.firstname} </h1>
        </div>
    )
}

export default OverviewPage