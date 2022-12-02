import { Avatar, Button, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import styles from '../../styling/Contact.module.css'
import { ButtonBase } from '@mui/material';
import AvatarImg from '../../assets/frontend-web-developer_peterwolf.jpg';
import Head from '../assetsComponents/Head';


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
            <Head title="Contact | Hire Peter Wolf as Web Developer" descr="Web Developer Peter Wolf | Request time availabiltiy  " keywords="web developer, availabilty, frontend development, contact form, hire me"/>
            <h1>Contact</h1>

            <Avatar alt="Remy Sharp" src={AvatarImg} sx={{width: "150px", height: "150px", filter: "grayscale(1)", margin: "30px auto",}} />
            <p>Send me a message with some details and I will reply to you  as soon as possible</p>

            <Box component="form" noValidate autoComplete="off" className={styles.form} sx={{ '& .MuiTextField-root': { m: 4, width: '25ch ' }}}>
                <div >
            <TextField id="outlined-basic" className={styles.inputField} onChange={handleChange} name="subject" label="Request Subject" variant="outlined"  />
            </div>
          
            <div> 
                <TextField className={styles.inputField} label="Your Message" multiline rows={5} name="body" onChange={handleChange}/>
            </div>
            <a variant="contained" className={styles.requestButton}href={`mailto:${email}?subject=${message.subject}&body=${message.body} `}>Send Request</a>
      
            </Box>
              

</div>

    )
}