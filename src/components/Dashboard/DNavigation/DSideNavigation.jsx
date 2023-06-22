import React from "react";
import { NavLink} from "react-router-dom";
import styles from '../../../styling/DashboardStyling/DSideNavigation.module.css'


const DSideNavigation =()=>{




    return(
        <div className={styles.sidenav}>
            <aside>
                <ul>
                    <li>
                    <NavLink to={"/demo/dashboard"} className={styles.inactive}>Dashboard</NavLink>
                    </li><li>
                    <NavLink to={"/demo/dashboard/mytasks"} className={({ isActive }) =>
                        isActive ? styles.active : styles.inactive}>My Tasks</NavLink>
                    </li>
                    <li><NavLink to={"/demo/dashboard/crypto"} className={({ isActive }) =>
                        isActive ? styles.active : styles.inactive}>CryptoBoard</NavLink></li>
                    <li><NavLink to={"/demo/dashboard/shop"} className={({ isActive }) =>
                        isActive ? styles.active : styles.inactive}>OnlineShop</NavLink></li>
                </ul>
            </aside>
        </div>
    )
}


export default DSideNavigation