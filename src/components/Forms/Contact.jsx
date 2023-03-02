import {Avatar, TextField} from '@mui/material'
import {Box} from '@mui/material'
import React, {useState} from 'react'
import styles from '../../styling/Contact.module.css'
import {ButtonBase} from '@mui/material';
import AvatarImg from '../../assets/frontend-web-developer_peterwolf.jpg';
import Head from '../assetsComponents/Head';
import LinkedInIcon from '../../assets/socialIcons/linkedIn_icon.png'
import EventIcon from '@mui/icons-material/Event';
import SectionHeader from "../assetsComponents/SectionHeader.jsx";

export default function Contact() {
    const email = 'pw@webdeveloper-peterwolf.com'

    const [message, setMessage] = useState({
        subject: "",
        body: ""
    });

    const [valid, setValid] = useState(false);

    const emailHref = valid ? `mailto:${email}?subject=${message.subject}&body=${message.body} ` : "javascript:alert('Please fill out the form before sending...!')";

    function handleChange(e) {

        setMessage(prev => ({...prev, [e.target.name]: e.target.value}));
        if (message.body.length > 0 && message.body.length > 0) {
            setValid(true);
        }
    }


    return (
        <section className={styles.contactSection}>
            <div className={styles.contactSectionInner}>
                <div className={styles.formWrapper}>
                    <Head title="Contact | Hire Peter Wolf as Web Developer"
                          descr="Web Developer Peter Wolf | Request time availabiltiy  "
                          keywords="web developer, availabilty, frontend development, contact form, hire me"/>


                    <Avatar alt="Remy Sharp" src={AvatarImg}
                            sx={{width: "150px", height: "150px", filter: "grayscale(1)", margin: "30px auto",}}/>
                    <p className={styles.paragraph}>Send me a message with some details and I will reply to you as soon
                        as
                        possible</p>

                    <Box component="form" noValidate autoComplete="off" className={styles.form}
                         sx={{'& .MuiTextField-root': {m: 4, width: '25ch '}}}>
                        <div>
                            <TextField id="outlined-basic" className={styles.inputField} onChange={handleChange}
                                       name="subject" label="Request Subject" variant="outlined"/>
                        </div>

                        <div>
                            <TextField className={styles.inputField} label="Your Message" multiline rows={5} name="body"
                                       onChange={handleChange}/>
                        </div>
                        <a variant="contained" className={styles.requestButton} href={emailHref}>Send Request</a>

                    </Box>


                </div>
                <div className={styles.socialMediaContact}>
                    <div className={styles.contactBox}>
                        <SectionHeader title={"Meet me on social media"} TitleVariant={"h4"}/>
                        <a href="https://www.linkedin.com/in/frontend-developer-seo-expert-peterwolf/"
                           title="Peter Wolf - Web Developer & Advisor LinkedIn Profile Page" target="_blank"
                           rel="noreferrer-noopener"><img className={styles.socialIcon} src={LinkedInIcon}
                                                          height="100px"
                                                          alt="Linkedin Profile Link to Peter Wolf"/></a>
                    </div>
                    <div className={styles.contactBox}>
                        <SectionHeader title={"Block your 30 Min talk!"} TitleVariant={"h4"}/>
                        <a href={"https://calendly.com/webdeveloper-peterwolf/30min"} target={"_blank"}
                           title={"Book an appointment"}>
                            <EventIcon sx={{fontSize: "6rem", color: "black"}}/>
                        </a>
                    </div>

                </div>
            </div>
        </section>

    )
}