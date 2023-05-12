import FormLayout from "../../Layout/FormLayout.jsx";
import styles from "../../../styling/LoginForm.module.css";
import FormButton from "../Buttons/FormButton.jsx";
import {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {beCryptPassword, checkLocalStorage} from "../../../lib/FormHandler.js";
import {Alert} from "@mui/material";
import globalStyle from '../../../styling/global.module.css'


const INIT_VALUES = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
}
const RegistrationForm = () => {

    const navigate = useNavigate();

    const [localStorageData, setLocalStorageData]=useState();
    const [userExists, setUserExists] = useState(false)


    useEffect(()=>{
          const userValues = checkLocalStorage()
if(userValues) {
    setLocalStorageData(userValues)
    setUserExists(true)
}



    },[])

    if(localStorageData){
        setTimeout(()=>{
            navigate("/demo/login")
        },3000)
    }

    const [newUser, setNewUser] = useState(INIT_VALUES);
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [passwordTestFailed, setPasswordTestFailed] = useState(true);

    const buttonStatus = passwordTestFailed && buttonDisabled

    function handleChange(e) {
            setNewUser({
                ...newUser,
                [e.target.name]: e.target.value
            })


    }


    function checkPassword(e) {
        if (newUser.password.length > 3) {
            if (newUser.password === e.target.value) {
                setButtonDisabled(false)
                setPasswordTestFailed(false)
            }
        }

    }

    function handleSubmit(e) {
        e.preventDefault();

        const hashedUser = beCryptPassword(newUser)
        localStorage.setItem("user", JSON.stringify(hashedUser))
        setNewUser(INIT_VALUES)
        navigate('/demo/registration/thank_you')

    }



    return (
        <FormLayout>
            {userExists && <Alert variant={"filled"} severity={"success"}>You are already registered! We will redirect you automatically to the login form!</Alert>}
            <h1 style={{textAlign: "center"}}>Demo Registration</h1>
            <form className={styles.loginForm}>
                <label className={styles.labelStyling} htmlFor={"firstname"}>Firstname</label><br/>
                <input id="firstname" type="text" name="firstname" value={newUser.firstname}
                       className={styles.inputStyling} onChange={handleChange} inputMode={"text"}/>
                <br/>
                <label className={styles.labelStyling} htmlFor={"lastname"}>Lastname</label><br/>
                <input id="lastname" type="text" name="lastname" value={newUser.lastname}
                       className={styles.inputStyling} onChange={handleChange} inputMode={"text"}/>
                <br/>
                <label className={styles.labelStyling} htmlFor={"email"}>Email</label><br/>
                <input id="email" type="email" name="email" value={newUser.email} className={styles.inputStyling}
                       onChange={handleChange} inputMode={"email"} required/>
                <br/>
                <label className={styles.labelStyling} htmlFor={"password"}>Password</label><br/>
                <input id="password" type="password" value={newUser.password} name="password" onChange={handleChange}
                       inputMode={"text"} className={styles.inputStyling} required/>
                <br/>
                <label className={styles.labelStyling} htmlFor={"repeatPassword"}>repeat password</label><br/>
                <input id="repeatPassword" type="password" name="password" onChange={checkPassword} inputMode={"text"}
                       className={styles.inputStyling} required/>
                <br/>
                <FormButton
                    title={"Login"}
                    status={buttonStatus}
                    type={"submit"}
                    handleClick={handleSubmit}
                />
            </form>
            <div style={{paddingTop: "20px"}}>
                <Link to={"/demo/login"} className={globalStyle.textLinkStyle}>Login to demo area</Link>
            </div>
        </FormLayout>
    )
}

export default RegistrationForm