import React, {useEffect, useState} from 'react';
import Logo from '../assets/peter-wolf-web-developer-advisor_s.png';
import styles from '../styling/Homepage.module.css';
import {Helmet} from 'react-helmet'
import {DefaultButton} from "./assetsComponents/Buttons/DefaultButton.jsx";
import ModalContainer from "./assetsComponents/Modal/ModalContainer.jsx";
import {useInView} from "react-intersection-observer";
import FixedButton from "./assetsComponents/FixedButton/FixedButton.jsx";

export default function Homepage() {


    const [demoContent, setDemoContent] = useState();


    const {ref,entry} = useInView({
        threshold: 1
    })


    return (
        <div className={styles.mainPage}>
            <Helmet>
                <title>Peter Wolf | Freelance WebDeveloper & Advisor </title>
                <meta name="description"
                      content="Freelance WebDeveloper & Advisor Peter Wolf. Teckstack is JavaScript, ReactJS, NextJS, PreactJS with focus on headless approach. "/>
                <meta name="keywords"
                      content="web development, reactjs, nextjs, freelance, web developer, advisor, consultant, javascript, headless cms"/>
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
            <div style={{textAlign: "center", paddingTop: "100px"}}>
                <DefaultButton title={"get to know me"} target={"_self"} href={"/aboutme"}/>
            </div>
        </div>
    )
}
