import React, {useEffect, useState} from 'react';
import Logo from '../assets/peter-wolf-web-developer-advisor_s.png';
import styles from '../styling/Homepage.module.css';
import {Helmet} from 'react-helmet'
import {DefaultButton} from "./assetsComponents/Buttons/DefaultButton.jsx";

import {useInView} from "react-intersection-observer";


export default function Homepage() {





    const {ref,entry} = useInView({
        threshold: 1
    })



    return (
        <div className={styles.mainPage}>
            <Helmet>
                <title>Peter Wolf | Freelance WebDeveloper & Advisor </title>
                <meta name="description"
                      content="Fullstack web developer and skilled programmer specializing in JavaScript, React, and Next.js. Elevate your digital projects with expertise in cutting-edge technologies. Let's transform ideas into seamless, responsive, and dynamic web experiences together.
"/>
                <meta name="keywords"
                      content="programeming, web development, reactjs, nextjs, freelance, web developer, programer, advisor, consultant, javascript, headless cms"/>
                <meta name="type" property="og:type" content="website"/>
                <meta name="title" property="og:title"
                      content="Freelance WebDeveloper & Advisor Peter Wolf. Teckstack is JavaScript, ReactJS, NextJS, PreactJS with focus on headless approach. "/>
                <meta name="description" property="og:description"
                      content="Freelance WebDeveloper & Advisor Peter Wolf. Teckstack is JavaScript, ReactJS, NextJS, PreactJS with focus on headless approach. "/>
                <meta name="url" property="og:url" content="https://www.webdeveloper-peterwolf.com"/>
                <meta name="image" property="og:image"
                      content="https://www.webdeveloper-peterwolf.com/pw-webdeveloper.png"/>

            </Helmet>
            <img ref={ref} className={styles.homepageImage} src={Logo} alt="Logo Peter Wolf - Freelance Webdeveloper & Advisor"/>
            <div  className={styles.mainPageButton}>
                <DefaultButton title={"get to know me"} target={"_self"} href={"/aboutme"}/>
            </div>
        </div>
    )
}
