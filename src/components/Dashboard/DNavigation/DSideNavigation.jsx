import {Link, NavLink} from "react-router-dom";
import styles from '../../../styling/DashboardStyling/DSideNavigation.module.css'

const DSideNavigation =()=>{
    return(
        <div className={styles.sidenav}>
            <aside>
                <ul>
                    <li>
                    <NavLink to={"/demo/dashboard"}>Dashboard</NavLink>
                    </li>
                </ul>
            </aside>
        </div>
    )
}

export default DSideNavigation