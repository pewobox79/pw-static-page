import {Helmet} from "react-helmet";
import React, {useContext} from "react";
import {ConsentContext} from "../../../store/ContextStore.js";

const GoogleTrackingCode=()=>{
  const consentContext = useContext(ConsentContext)
  return <Helmet>
    <script async src={`https://www.googletagmanager.com/gtag/js?id=${consentContext && consentContext.context.googleId}`}></script>
    <script id="google-analytics">
      {`
              window.dataLayer = window.dataLayer || [];    
              function gtag() { dataLayer.push(arguments); }
              
              gtag('consent', 'update', {
                  'ad_user_data': '${consentContext && consentContext.context.values['ad_user_data']}',
                  'ad_personalization': '${consentContext && consentContext.context.values['ad_personalization']}',
                  'ad_storage': '${consentContext && consentContext.context.values['ad_storage']}',
                  'analytics_storage': '${consentContext && consentContext.context.values['analytics_storage']}',
            });
            gtag('config', '${consentContext && consentContext.context.googleId}');
          `}
    </script>
  </Helmet>
}

export default GoogleTrackingCode;