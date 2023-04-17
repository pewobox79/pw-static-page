import styles from '../../../styling/DashboardStyling/DHeader.module.css'
import AuthNavigation from "../DNavigation/AuthNavigation.jsx";
import logo from '../../../assets/pw_letter_logo_s.png'
import {useContext} from "react";
import {UserContext} from "../../Layout/DashboardLayout.jsx";

const DHeader =()=>{
    const userData = useContext(UserContext)
    console.log("user",userData)

    return(
        <header className={styles.headerWrapper}>
            <a href={"/"}>
                <img className={styles.headerLogo} src={logo} alt={"PW logo "}/>
            </a>

            {userData.logged ? <AuthNavigation/> : null}

        </header>
    )
}

export default DHeader