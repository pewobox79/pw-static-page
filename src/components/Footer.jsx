import React from 'react';
import styles from '../styling/Footer.module.css'
import FooterNavigation from "./Navigation/FooterNavigation.jsx";
import HorizontalLine from "./assetsComponents/HorizontalLine.jsx";
import DemoAccess from "./Navigation/DemoAccess.jsx";

export default function Footer(){

    const date = new Date()

    return(
        <footer id={styles.mainFooter}>
           <FooterNavigation/>
            <div className={styles.demoSection}>
                <h3>check out my demo dashboard</h3>
            <div><DemoAccess/>
            </div>
            </div>
            <p> &#169; {date.getFullYear()} Peter Wolf. All Rights Reserved.</p>
        </footer>
    )
}