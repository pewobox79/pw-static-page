import styles from '../../../styling/LoginForm.module.css'
import FormLayout from "../../Layout/FormLayout.jsx";
import FormButton from "../Buttons/FormButton.jsx";
import {isRouteErrorResponse, Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {ToastContainer, toast} from 'react-toastify';
import {authenticate, checkEmail, checkLocalStorage, comparePassword, setUserLogged} from "../../../lib/FormHandler.js";
import {Alert} from "@mui/material";
import globalStyle from '../../../styling/global.module.css'

const INIT_VALUE = {
    email: "",
    password: ""
}

const LoginForm = () => {

    const navigate = useNavigate();

    const [buttonStatus, setButtonStatus] = useState(true)
    const [user, setUser] = useState(INIT_VALUE)
    const [accessDenied, setAccessDenied] = useState(false)
    const [errorMessage, setErrorMessage] = useState(false)



    function handleChange(e) {
        if (user.email.length > 2 && user.password.length > 3 && user.email.includes("@") && user.email.includes(".")) {
            setButtonStatus(false);
        } else {
            setButtonStatus(true);
        }

        setUser({
            ...user,
            [e.target.name]: e.target.value
        });

    }


    function handleSubmit(e) {
        e.preventDefault()
        let userDataStored = checkLocalStorage("user");

        if(userDataStored === null ){
            setErrorMessage(true);
        }else {
            const passwordCheck = comparePassword(user.password, userDataStored.password)
            const emailCheck = checkEmail(user.email, userDataStored.email)

            const userAuth = authenticate(emailCheck, passwordCheck)
            if (userAuth === "authenticated") {
                setUserLogged();
                navigate("/demo/dashboard")
            } else {
                setAccessDenied(true)
            }
            setUser(INIT_VALUE);
        }
    }

    return (
        <>
            <FormLayout>
                <h1>Demo Login</h1>
                <form className={styles.loginForm}>
                    <label className={styles.labelStyling} htmlFor={"email"}>Email</label><br/>
                    <input id="email" type="email" name="email" value={user.email} className={styles.inputStyling}
                           onChange={handleChange} inputMode={"text"}/>
                    <br/>
                    <label className={styles.labelStyling} htmlFor={"password"}>Password</label><br/>
                    <input id="password" type="password" value={user.password} name="password" onChange={handleChange}
                           inputMode={"email"} className={styles.inputStyling}/>
                    <br/>
                    <FormButton
                        title={"Login"}
                        status={buttonStatus}
                        type={"submit"}
                        handleClick={handleSubmit}
                    />
                </form>
                <div style={{paddingTop: "20px", textAlign: "center"}}>
                    <Link to={"/demo/register"} className={globalStyle.textLinkStyle}>Register to use the demo</Link><br/>
                    <Link to={"/demo/resetPassword"} className={globalStyle.textLinkStyle}>Reset Password</Link>
                </div>

                {errorMessage && <div style={{paddingTop: "10px"}}><Alert variant="filled" severity="error">
                    No user data available! Register first!
                </Alert>
                    </div>}

                {accessDenied && <div style={{paddingTop: "10px"}}><Alert variant={"filled"} severity={"error"}>Password or username not valid!</Alert></div>}

            </FormLayout>

        </>
    )
}

export default LoginForm