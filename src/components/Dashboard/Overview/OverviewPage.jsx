import styles from '../../../styling/DashboardStyling/OverviewPage.module.css'

import {UserContext} from "../../Layout/DashboardLayout.jsx";
import {useContext} from "react";
const OverviewPage =()=>{
    const context = useContext(UserContext)
    return(
        <div className={styles.overviewPageWrapper}>
            <h1>Welcome {context?.firstname} </h1>
            <h4>I am glad you could make the time to check my coding skills with some examples.<br/>
            This dashboard has some features like data requests, API handling, localStorage management and more.<br/></h4>
              <h4>On the left sidebar you can navigate through the dashboard.<br/>
                  If you have further questions feel free to get in touch with me.</h4>
        </div>
    )
}

export default OverviewPage