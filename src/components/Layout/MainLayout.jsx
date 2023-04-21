import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer.jsx";
import Header from "../Header/index.jsx";

export default function MainLayout({children}){

    return(
        <>
            <Header/>
            <main>{children}
            <Outlet/></main>
            <Footer/>
        </>
    )
}