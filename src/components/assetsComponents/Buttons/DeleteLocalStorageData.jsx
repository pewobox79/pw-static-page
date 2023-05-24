import FormButton from "./FormButton.jsx";
import styles from '../../../styling/Buttons.module.css'
import {useState} from "react";

export default function DeleteLocalStorageData(){


    const [message, setMessage] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(false);

    function deleteLocalStorageData(){
        localStorage.clear()
        setDeleteMessage(true)

    }

    function handleDeleteData(e){
setMessage(true)
    }


    return(
        <>

            {message ? <div><h4>Are you sure to clear all of your data related to this website in local storage?</h4> <button className={styles.formButtonStyling} onClick={deleteLocalStorageData}>Yes, I am sure</button> </div>: <FormButton title={"Delete your local Data"} handleClick={handleDeleteData} status={false} />}
            {deleteMessage ? <p>Your local storage has been cleared</p> : null}
            </>
    )
}