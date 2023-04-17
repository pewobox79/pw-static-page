import {DefaultButton} from "../Buttons/DefaultButton.jsx";
import FormLayout from "../../Layout/FormLayout.jsx";
import FormButton from "../Buttons/FormButton.jsx";
import {userLogoutOnly, userLogoutWithDataDelete} from "../../../lib/FormHandler.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const LogoutForm =()=>{

    const navigate = useNavigate();
    const [loggedOut, setLoggedOut]=useState(false)
    console.log(loggedOut)
    function handleLogout(){
        userLogoutOnly()
        setLoggedOut(true)

    }

    function handleLogoutDeleteUser(){
        userLogoutWithDataDelete()
        setLoggedOut(true)
    }


    if(loggedOut){
        navigate("/demo/loggedOut")
    }
    return(
        <FormLayout>
            <h3>Thanks for using the demo of my website</h3>
            <p>I hope you enjoyed your experience and you could make a better impression about me and my skills</p>

            <h5>Please choose your logout option:</h5>

            <div style={{display: "flex", flexDirection: "row"}}>
            <FormButton title={"Logout and keep user"} handleClick={handleLogout}/>
            <FormButton title={"Logout and delete user data"} handleClick={handleLogoutDeleteUser}/>
            </div>
        </FormLayout>
    )
}

export default LogoutForm