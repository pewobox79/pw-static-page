import PageLayout from "../../Layout/PageLayout.jsx";
import {Link} from "react-router-dom";
import {getDemoInfoContent} from "../../../lib/DemoData.js";
import {useEffect, useState} from "react";

const LoggedOutPage =()=>{

    const [content, setContent]=useState();

    useEffect(()=>{
        const loggedOutContent = getDemoInfoContent()
            .then(data => setContent(data))

    },[])

    console.log("data",content)


    return(
        <PageLayout>
            <h1>You have been successfully logged out!</h1>
            <h3>
                you can login back at any time again with your credentials with the login form.
            </h3>
            <Link to={"/demo/login"}>Go to Login</Link>

        </PageLayout>
    )
}

export default LoggedOutPage