import React from 'react';
import styles from '../styling/Footer.module.css'

export default function Footer(){

    const date = new Date()

    return(
        <footer id={styles.mainFooter}>
            <p> &#169; {date.getFullYear()} Peter Wolf. All Rights Reserved.</p>
           
        </footer>
    )
}