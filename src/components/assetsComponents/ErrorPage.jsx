import React from 'react'
import style from '../../styling/ErrorPage.module.css'
import {DefaultButton} from "./Buttons/DefaultButton.jsx";



export default function ErrorPage(){

    return(
      <div className={style.errorPageWrapper}>
          <div className={style.errorPageInner}>
              <h2>Something went wrong!</h2><br/>
              <h4>I am sorry for this issue and will try to solve it as soon as possible. <br/> In the meantime please go back to the homepage.</h4>
<br/>
              <DefaultButton href={"/"} title={"Go Back to Homepage"} target={"_self"}/>
          </div>
      </div>
    )
}