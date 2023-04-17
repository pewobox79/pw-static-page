import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../../styling/Footer.module.css'
import HorizontalLine from "../assetsComponents/HorizontalLine.jsx";


export default function FooterNavigation() {
    return (
        <>
            <HorizontalLine/>
        <nav className={styles.footerNavigation}>
            <Link className={styles.footerNavLink} to="/imprint">imprint</Link>
            <Link className={styles.footerNavLink} to="/cookies">cookies</Link>
            <Link className={styles.footerNavLink} to="/dataprotection">dataprotection</Link>
             </nav>
            </>
    )
}