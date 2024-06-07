import style from "../../../styling/Buttons.module.css";
import styles from "../../../styling/ConsentModule.module.css";
import {useContext} from "react";
import {ConsentContext} from "../../../store/ContextStore.js";
import {FormControlLabel, FormGroup, Switch} from "@mui/material";
import useLocalStorage from "../../../hooks/useLocalStorage.js";

const ConfigureView = () => {

  const consentContext = useContext(ConsentContext);
  const {value, setStoredValue} = useLocalStorage('pw_wd_cons');

  function handleSelectAll() {

    consentContext.setContext({
      ...consentContext.context,
      consentModuleOpen: false,
      configure: !consentContext.context.configure,
      values: {
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        ad_storage: 'granted',
        analytics_storage: 'granted',
      }
    })

    {
      value === null && setStoredValue({consent: "user has consent managed"})
    }
  }

  function handleChange(e) {
    consentContext.setContext({
      ...consentContext.context,
      values: {
        ...consentContext.context.values,
        [e.target.name]: e.target.checked ? 'granted' : 'denied'
      }
    })
    {
      value === null && setStoredValue({consent: "user has consent managed"})
    }
  }

  function handleClose() {
    consentContext.setContext({
      ...consentContext.context,
      configure: !consentContext.context.configure,
      consentModuleOpen: !consentContext.context.consentModuleOpen
    })
  }


  return <div className={styles.consentInner}>

    <h3>configure consent</h3>

    <FormGroup style={{minWidth: "600px"}}>
      <details open>
        <summary>Marketing Cookies</summary>
        <FormControlLabel control={<Switch name={"ad_user_data"}
                                           defaultChecked={consentContext && consentContext.context.values['ad_user_data'] === "granted"}
                                           onChange={handleChange}/>} label="User Data"/>
        <FormControlLabel control={<Switch name={"ad_personalization"}
                                           defaultChecked={consentContext && consentContext.context.values['ad_personalization'] === "granted"}
                                           onChange={handleChange}/>} label="Personal Data"/>
        <FormControlLabel control={<Switch name={"ad_storage"}
                                           defaultChecked={consentContext && consentContext.context.values['ad_storage'] === "granted"}
                                           onChange={handleChange}/>} label="User Settings"/>

        <p>These cookies are used to track visitors across websites. The intention is to display ads that are relevant
          and engaging for the individual user and thereby more valuable for publishers and third party advertisers.</p>
      </details>

      <div className={styles.divider}></div>
      <details open>
        <summary>Analytics Cookies</summary>

        <FormControlLabel control={<Switch name={"analytics_storage"}
                                           defaultChecked={consentContext && consentContext.context.values['analytics_storage'] === "granted"}
                                           onChange={handleChange}/>} label="Analytics Cookie"/>

        <p>These cookies are used to analyze and evaluate the performance of the Website. They collect aggregate
          information on how the Website is used, time spent, pages visited, contents which interest users, location,
          etc. to enable use to improve the content and functionality of the Website. These cookies are placed by third
          parties and therefore, are third party cookies.These cookies do not store any information that would allow the
          user to be identified. The information collected is aggregated and does not allow us to draw any direct
          conclusions about your person. They are used solely to create statistics in order to tailor the content of our
          website to the needs of our users, to improve the user experience and to optimize our offer. The following
          cookies are used on the basis of your consent, i.e. they are not strictly necessary for use of the
          Website.</p>
      </details>

    </FormGroup>
    <div className={styles.buttonWrapper}>
      <button className={style.formButtonStyling} onClick={handleSelectAll}>accept all</button>
      <button className={style.formButtonNegativeStyle} onClick={handleClose}>confirm my choice</button>
    </div>


  </div>
}

export default ConfigureView