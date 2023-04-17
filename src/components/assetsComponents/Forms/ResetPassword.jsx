import FormLayout from "../../Layout/FormLayout.jsx";
import styles from "../../../styling/LoginForm.module.css";
import FormButton from "../Buttons/FormButton.jsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import {resetPassword} from "../../../lib/FormHandler.js";
import {Alert} from "@mui/material";

const ResetPassword=()=>{

    const [buttonStatus, setButtonStatus] = useState(true);
    const [resetMessage, setResetMessage] = useState(false)
    const [newPassword, setNewPassword] = useState({
        password: ""

    })

    function handlePasswordChange(e){
        setNewPassword({...newPassword, [e.target.name]: e.target.value})

    }

    function checkPassword(e) {
        if (newPassword.password.length > 3) {
            if (newPassword.password === e.target.value) {
                setButtonStatus(false)

            }
        }

    }

    function handleSubmit(e){
        e.preventDefault();
        resetPassword(newPassword.password)
        setResetMessage(true)

    }




    return(
        <FormLayout>

                <h1>Reset Password</h1>
                {resetMessage && <Alert variant={"filled"} severity={"success"}>password reset was successful</Alert>}
                <form className={styles.loginForm}>
                    <label className={styles.labelStyling} htmlFor={"password"}>New Password</label><br/>
                    <input id="password" type="password" name="password" className={styles.inputStyling}
                           onChange={handlePasswordChange} inputMode={"text"}/>
                    <br/>
                    <label className={styles.labelStyling} htmlFor={"repeatPassword"}>Repeat New Password</label><br/>
                    <input id="repeatPassword" type="password" name="repeatPassword" onChange={checkPassword}
                           inputMode={"text"} className={styles.inputStyling}/>
                    <br/>
                    <FormButton
                        title={"Reset"}
                        status={buttonStatus}
                        type={"submit"}
                        handleClick={handleSubmit}
                    />
                </form>
                <div style={{paddingTop: "20px"}}>
                    <Link to={"/demo/register"}>Register to use the demo</Link>
                </div>

        </FormLayout>
    )
}

export default ResetPassword