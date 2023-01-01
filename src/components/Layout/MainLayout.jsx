import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer.jsx";
import Navigation from "../Navigation.jsx";

export default function Layout({children}){

    return(
        <>
            <Navigation/>
            <main>{children}
            <Outlet/></main>
            <Footer/>
        </>
    )
}