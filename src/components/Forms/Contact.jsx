import React, { useState } from 'react'
import styles from '../../styling/Contact.module.css'

export default function Contact(){

const [message, setMessage] = useState({
    subject: "",
    body: ""
})

function handleChange(e){

    setMessage(prev =>({...prev, [e.target.name]: e.target.value}))
    
}
console.log(message)

const email= 'pw@webdeveloper-peterwolf.com'
    return(
        <div>
            <h1>contact</h1>

            <form className={styles.form}>
                <input type="text" name="subject" onChange={handleChange}/>
                <input type={"textfield"} name="body" onChange={handleChange}/>
                <a href={`mailto:${email}?subject=${message.subject}&body=${message.body} `}>Send Request</ a>
            </form>
        </div>
    )
}