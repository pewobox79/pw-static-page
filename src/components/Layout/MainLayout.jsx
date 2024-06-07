import React, {useContext, useEffect, useState} from "react";
import {Outlet} from "react-router-dom";
import Footer from "../Footer.jsx";
import Header from "../Header/index.jsx";
import FixedButton from "../assetsComponents/FixedButton/FixedButton.jsx";
import ModalContainer from "../assetsComponents/Modal/ModalContainer.jsx";
import {checkFetchingErrorsBackend} from "../../../apis/dataProvider.js";
import Maintenance from "../assetsComponents/Maintenance.jsx";
import ConsentContextLayout from "./ConsentContextLayout.jsx";
import ConsentModule from "../ConsentModule/index.jsx";
import {Helmet} from "react-helmet";
import {ConsentContext} from "../../store/ContextStore.js";
import { HelmetProvider } from 'react-helmet-async';
import ConsentButton from "../ConsentModule/components/ConsentButton.jsx";
import GoogleTrackingCode from "../ConsentModule/components/GoogleTrackingCode.jsx";

export default function MainLayout({children}) {

  const [demoMessage, setDemoMessage] = useState(false);
  const [desktopMessage, setDesktopMessage] = useState(false)
  const [online, setOnline] = useState(true)
  const device = navigator.userAgent;

  useEffect(() => {

    checkFetchingErrorsBackend().then((res) => {
      setOnline(res)
    })

    if (device.match(/Android/i) || device.match(/webOS/i) || device.match(/iPhone/i) || device.match(/iPad/i) || device.match(/iPod/i) || device.match(/BlackBerry/i) || device.match(/Windows Phone/i)) {
      // the user is using a mobile device, so redirect to the mobile version of the website
      setDemoMessage(true)
    } else {
      setDesktopMessage(true)
    }


  }, [])

  return (
    <>

      {online ?
<HelmetProvider>

        <ConsentContextLayout>
          <GoogleTrackingCode/>
          <Header/>
          {demoMessage &&
            <ModalContainer
              openModal={demoMessage}
              setOpenModal={setDemoMessage}
              modalTitle={"Demo on Desktop available!"}
              modalBody={"You can access my Demo Dashboard for your consideration. This feature is not available from your mobile device! So please open my website on your desktop and enjoy the new feature!"}
            />}

          <ConsentModule/>
          {desktopMessage &&
            <FixedButton buttonText={"Demo"} xPosition={"40"} yPosition={"0"}/>
          }
          <main>
            {children}
            <Outlet/>
            <ConsentButton/>
          </main>
          <Footer/>

        </ConsentContextLayout>
</HelmetProvider>
        : <><Maintenance/></>}
    </>
  )
}