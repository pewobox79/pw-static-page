import React from 'react';
import Logo from '../assets/peter-wolf-webdeveloper.png';
import BusinessCard from '../assets/digitalBusinessCard.png';
import styles from '../styling/Homepage.module.css';

export default function Homepage(){

    return (
        <div className={styles.mainPage}> 
            <img src={Logo} alt="Logo Peter Wolf - Freelance Webdeveloper & Advisor"/>
            <div style={{textAlign: "center"}}>
            <h1>The website is coming soon...</h1>  

            <div style={{marginTop: "80px"}}></div>
            <img src={BusinessCard} className={styles.qrCode} alt="Digital Businesscard of freelance webdeveloper peter wolf"/>
            <h2>keep me in mind</h2>
            </div>
        </div>
    )
}
