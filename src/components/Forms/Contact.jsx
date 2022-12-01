import { Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styles from '../../styling/Contact.module.css'
import { ButtonBase } from '@mui/material';


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
        <div className={styles.formWrapper}>
            <h1>Contact</h1>
            <p>Let´s get in touch!</p>

            <Box component="form" noValidate autoComplete="off" className={styles.form} sx={{ '& .MuiTextField-root': { m: 4, width: '35ch ' }}}>
                <div >
            <TextField id="outlined-basic" className={styles.inputField} onChange={handleChange} name="subject" label="Request Subject" variant="outlined" autoFocus />
            </div>
          
            <div> 
                <TextField className={styles.inputField} label="Your Message" multiline rows={5} name="body" onChange={handleChange}/>
            </div>
               
            </Box>
            <a variant="contained" className={styles.requestButton}href={`mailto:${email}?subject=${message.subject}&body=${message.body} `}>Send Request</a>
        </div>
    )
}