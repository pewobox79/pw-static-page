import React from 'react'
import styles from '../../styling/Imprint.module.css'
import DeleteLocalStorageData from "../assetsComponents/Buttons/DeleteLocalStorageData.jsx";

const Cookies=()=>{
    return(
        <div className={styles.cookies}>
        <h1>For us it is important that your data is safe!</h1>
            <h3>Website Cookies</h3>
            <p>This website is not storing or setting any COOKIES - and will never!</p>
            <h3>Demo section</h3>
            <p>My website offers a DEMO section to which I will provide access throughout an restricted area.<br/>
            To enter the DEMO you have to register via the provided form first.<br/>
            All provided data of you will be store in the local storage of your personal browser, to which only you have access to.<br/>This website cannot share any data with me or other user, because local storage is only accessible via your personal device.<br/>
            If you want to delete your local storage of your browser for the DEMO, you can do it by using the below button.</p>

            <DeleteLocalStorageData/>

        </div>
    )
}

export default Cookies