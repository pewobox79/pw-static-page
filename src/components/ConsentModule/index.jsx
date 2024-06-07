import {ConsentContext} from "../../store/ContextStore.js";
import {useContext} from "react";
import styles from "../../styling/ConsentModule.module.css"
import style from "../../styling/Buttons.module.css";
import ConfigureView from "./components/ConfigureView.jsx";
import useLocalStorage from "../../hooks/useLocalStorage.js";

const ConsentModule = () => {
  const consentContext = useContext(ConsentContext);
  const {value, setStoredValue} = useLocalStorage("pw_wd_cons")

  function handleAcceptAll() {


    consentContext.setContext({
      ...consentContext.context,
      consentModuleOpen: false,
      configure: false,
      values: {
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        ad_storage: 'granted',
        analytics_storage: 'granted',
      }
    })

    {value === null && setStoredValue({consent: "user has consent managed", timestamp: new Date()} )}
  }


  function handleConfigure() {
    consentContext.setContext({
      ...consentContext.context,
      configure: !consentContext.context.configure
    })
  }

  function handleEssentials() {
    consentContext.setContext({
      ...consentContext.context,
      consentModuleOpen: false,
      configure: false,
      values: {
        ad_user_data: 'granted',
        ad_personalization: 'denied',
        ad_storage: 'granted',
        analytics_storage: 'denied',
      }
    })

  }

  const myStyle = `${styles.consentContainer} ${consentContext.context.consentModuleOpen ? styles.consentOpen : styles.consentClose}`
  return <div className={myStyle}>


    <div className={styles.consentInner}>
      {consentContext.context.configure ? <ConfigureView/> :
        <>
          <h3>Consent</h3>
          <div>
            <p className={styles.consentText}>
              We use cookies to provide a better website functionality. View our Privacy policy for more information and
              know how to update your cookie settings.</p>
          </div>
          <div className={styles.buttonWrapper}>
            <button className={style.formButtonStyling} onClick={handleAcceptAll}>Accept all</button>
            <button className={style.formButtonNegativeStyle} onClick={handleEssentials}>Only Essentials</button>
            <button className={style.formButtonNegativeStyle} onClick={handleConfigure}>Configure</button>
          </div>
        </>
      }
    </div>
  </div>
}

export default ConsentModule;