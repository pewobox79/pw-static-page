import React from 'react'
import Navigation from "../Navigation.jsx/index.jsx";
import styles from '../../styling/Header.module.css'
import NavBurger from "../Navigation.jsx/NavBurger.jsx";

const Header =()=>{

    return(
        <header className={styles.headerContainer}>
            <Navigation/>

        </header>
    )
}

export default Header