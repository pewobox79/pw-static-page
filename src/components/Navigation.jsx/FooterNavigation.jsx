import React from 'react'
import {Link} from 'react-router-dom'
import styles from '../../styling/Footer.module.css'


export default function FooterNavigation() {
    return (
        <nav className={styles.footerNavigation}>
            <Link className={styles.footerNavLink} to="/imprint">imprint</Link>
            <Link className={styles.footerNavLink} to="/cookies">cookies</Link>
            <Link className={styles.footerNavLink} to="/dataprotection">dataprotection</Link>
             </nav>
    )
}