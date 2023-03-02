import React from 'react'
import HeaderText from "../assetsComponents/HeaderText.jsx";
import {Outlet} from "react-router-dom";

const ProjectLayout = () => {
    return (
        <>
            <HeaderText title={"My Projects Layout"}/>
            <Outlet/>
        </>
    )
}

export default ProjectLayout