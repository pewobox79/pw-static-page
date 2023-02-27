import React from 'react'
import Navigation from "../Navigation.jsx/index.jsx";
import styles from '../../styling/Header.module.css'

const Header =()=>{

    return(
        <header className={styles.headerContainer}>
            <Navigation/>
        </header>
    )
}

export default Header