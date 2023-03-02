import React, {useEffect, useState} from 'react'
import {getDataFromBackend} from "../../../apis/dataProvider.js";
import style from '../../styling/BasicPage.module.css'


const BasicPage =({pageData, apiString})=>{

    const [basicPageContent, setBasicPageContent] = useState()
    const [languageCode, setLanguageCode] = useState("English")

    useEffect(()=>{
       const relevantData = getDataFromBackend(apiString).then(res => setBasicPageContent(res))

    },[])

    console.log("data", basicPageContent)
    const UserSelectedBasicPageContent = basicPageContent?.map((basicPageContent)=>{
        if(basicPageContent.langcode === languageCode){
            console.log("after language", basicPageContent)
            if(basicPageContent.title.replace(/\s/g, '').toLowerCase() === pageData.toLowerCase()){
                return(
                    <div key={basicPageContent.uuid} className={style.basicPageWrapper}>
                        <div className={style.basicPageInner}>
                        <h1>{basicPageContent.title}</h1>
                        <div className={style.basicPageMainContent} dangerouslySetInnerHTML={{__html: basicPageContent.body}}></div>
                        </div>
                    </div>
                )
            }
        }
    })

    return(<>
        {UserSelectedBasicPageContent}
        </>
    )
}

export default BasicPage