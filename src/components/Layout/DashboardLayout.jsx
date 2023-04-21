import {Outlet} from "react-router-dom";
import styles from '../../styling/DashboardStyling/DashboardLayout.module.css'
import DHeader from "../Dashboard/DHeader/DHeader.jsx";
import DSideNavigation from "../Dashboard/DNavigation/DSideNavigation.jsx";
import {createContext, useEffect, useState} from "react";
import {checkLocalStorage} from "../../lib/FormHandler.js";
import PageLayout from "./PageLayout.jsx";
import {DefaultButton} from "../assetsComponents/Buttons/DefaultButton.jsx";
import MainLayout from "./MainLayout.jsx";

export const UserContext = createContext(null)
const DashboardLayout = ({children}) => {

    const [contextData, setContextData] = useState()
    useEffect(()=>{
        const userData = checkLocalStorage();
        setContextData(userData)
    },[])





    return (
        <UserContext.Provider value={contextData}>
            {contextData?.logged ? <>
                <DHeader/>
                <div className={styles.dashboardWrapper}>
                    <DSideNavigation/>
                    {children}
                    <Outlet/>
                </div>
            </> : <PageLayout><h2 style={{paddingBottom: "20px"}}>Please login first, to get access to the demo
                dashboard</h2><DefaultButton title={"Go to login"} href={"/demo/login"}/></PageLayout>
            }
        </UserContext.Provider>
    )
}

export default DashboardLayout