import React from 'react';
import styles from '../styling/Footer.module.css'
import FooterNavigation from "./Navigation.jsx/FooterNavigation.jsx";
import HorizontalLine from "./assetsComponents/HorizontalLine.jsx";

export default function Footer(){

    const date = new Date()

    return(
        <footer id={styles.mainFooter}>
            <p> &#169; {date.getFullYear()} Peter Wolf. All Rights Reserved.</p>
         <HorizontalLine/>
           <FooterNavigation/>
        </footer>
    )
}