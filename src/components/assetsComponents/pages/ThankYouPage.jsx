import PageLayout from "../../Layout/PageLayout.jsx";
import {Link} from "react-router-dom";

const ThankYouPage =()=>{
    return(
        <PageLayout>
            <h1>thank you for Registration</h1>
            <p>your registration data is temporarly stored in you local storage. This action will prevent sharing your data with us.
            <br/>
            the registration form is only for demo purposes and will not harm your GDPR rights.</p>
            <h3>
                you can now login with your credentials with the login form.
            </h3>
            <Link to={"/demo/login"}>Go to Login</Link>

        </PageLayout>
    )
}

export default ThankYouPage