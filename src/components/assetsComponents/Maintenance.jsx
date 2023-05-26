import React from 'react'
import style from '../../styling/ErrorPage.module.css'
import {DefaultButton} from "./Buttons/DefaultButton.jsx";
import DownloadButton from "./Buttons/DownloadButton.jsx";



export default function Maintenance(){

    return(
      <div className={style.errorPageWrapper}>
          <div className={style.errorPageInner}>
              <h2>Maintenance mode active</h2><br/>
              <h4>I am working on important updates at the moment. During that time my website is not available.</h4>
<br/>
              <h4>In the meantime you can check my LinkedIn Profile</h4>
              <DefaultButton title={"Check my LinkedIn"} href={"https://www.linkedin.com/in/frontend-developer-seo-expert-peterwolf/"} target={"_self"}/>
          </div>
      </div>
    )
}