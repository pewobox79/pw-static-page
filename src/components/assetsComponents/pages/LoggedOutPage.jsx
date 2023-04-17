import PageLayout from "../../Layout/PageLayout.jsx";
import {Link} from "react-router-dom";

const ThankYouPage =()=>{
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

export default ThankYouPage