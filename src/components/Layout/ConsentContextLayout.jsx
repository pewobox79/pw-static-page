import {ConsentContext} from "../../store/ContextStore.js";
import React, { useState} from "react";
import {Helmet} from "react-helmet";
import GoogleTrackingCode from "../ConsentModule/components/GoogleTrackingCode.jsx";
import useLocalStorage from "../../hooks/useLocalStorage.js";

const ConsentContextLayout=({children})=>{

  const {value} = useLocalStorage("pw_wd_cons");

  const [context, setContext]=useState({
    consentModuleOpen: value === null,
    configure: false,
    googleId: 'G-3ZMD5S05SG',
    values: {
    ad_user_data: 'granted',
    ad_personalization: 'denied',
    ad_storage: 'granted',
    analytics_storage: 'granted'
  }})

  return <ConsentContext.Provider value={{context, setContext}}>
    <GoogleTrackingCode/>
    {children}
  </ConsentContext.Provider>
}

export default ConsentContextLayout