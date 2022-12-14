import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styling/Navigation.module.css'


export default function Navigation(){
    return(
        <nav className={styles.mainNavigation}>

            <Link className={styles.navLink} to="/">Home</Link>
            <Link className={styles.navLink} to="/contact">Hire Me</Link>
           <Link className={styles.navLink} to="/imprint">Imprint</Link>
        </nav>
    )
}