import React, {useEffect, useState} from 'react';
import Logo from '../assets/peter-wolf-web-developer-advisor_s.png';
import styles from '../styling/Homepage.module.css';
import {Helmet} from 'react-helmet'
import {DefaultButton} from "./assetsComponents/Buttons/DefaultButton.jsx";
import ModalContainer from "./assetsComponents/Modal/ModalContainer.jsx";

export default function Homepage() {

    const [demoMessage, setDemoMessage] = useState(false);
    const [desktopMessage, setDesktopMessage] = useState(false)
    const device = navigator.userAgent;

    useEffect(()=>{
        if (device.match(/Android/i) || device.match(/webOS/i) || device.match(/iPhone/i) || device.match(/iPad/i) || device.match(/iPod/i) || device.match(/BlackBerry/i) || device.match(/Windows Phone/i)) {
            // the user is using a mobile device, so redirect to the mobile version of the website
            setDemoMessage(true)
        }else{
            setDesktopMessage(true)
        }
    }, [])


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
            <img src={Logo} alt="Logo Peter Wolf - Freelance Webdeveloper & Advisor"/>
            <div style={{textAlign: "center", paddingTop: "100px"}}>
                <DefaultButton title={"get to know me"} target={"_self"} href={"/aboutme"}/>
            </div>
            {demoMessage &&
             <ModalContainer
                 openModal={demoMessage}
                 setOpenModal={setDemoMessage}
                 modalTitle={"Demo on Desktop available!"}
                 modalBody={"You can access my Demo Dashboard for your consideration. This feature is not available from your mobile device! So please open my website on your desktop and enjoy the new feature!"}
             />}

            {desktopMessage &&
             <ModalContainer
                 openModal={desktopMessage}
                 setOpenModal={setDesktopMessage}
                 modalTitle={"Checkout my new Demo Dashboard!"}
                 modalBody={"My new feature will allow you to see some of my skills in action. You can access my Demo Dashboard for your consideration at any time. You won´t share any data with me. Enjoy it!"}
                 internalLink={"/demo/register"}
                 clientName={"Demo Dashboard"}
             />}
        </div>
    )
}
