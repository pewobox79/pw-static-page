import React from 'react';
import Logo from '../assets/peter-wolf-web-developer-advisor_s.png';

import styles from '../styling/Homepage.module.css';
import {Helmet} from 'react-helmet'

export default function Homepage(){


    return (
        <div className={styles.mainPage}> 
        <Helmet>
        <title>Peter Wolf | Freelance WebDeveloper & Advisor </title>
    <meta name="description" content="Freelance WebDeveloper & Advisor Peter Wolf. Teckstack is JavaScript, ReactJS, NextJS, PreactJS with focus on headless approach. "/>
    <meta name="keywords" content="web development, reactjs, nextjs, freelance, web developer, advisor, consultant, javascript, headless cms"/>
    <meta name="type" property="og:type" content="website"/>
    <meta name="title" property="og:title" content="Freelance WebDeveloper & Advisor Peter Wolf. Teckstack is JavaScript, ReactJS, NextJS, PreactJS with focus on headless approach. " />
    <meta name="description" property="og:description" content="Freelance WebDeveloper & Advisor Peter Wolf. Teckstack is JavaScript, ReactJS, NextJS, PreactJS with focus on headless approach. "/>
    <meta name="url" property="og:url" content="https://www.webdeveloper-peterwolf.com"/>
    <meta name="image" property="og:image" content="https://www.webdeveloper-peterwolf.com/pw-webdeveloper.png"/>
  
        </Helmet>
            <img src={Logo} alt="Logo Peter Wolf - Freelance Webdeveloper & Advisor"/>
            <div style={{textAlign: "center"}}>
            <h1>The website is coming soon...</h1>  

            </div>
        </div>
    )
}
