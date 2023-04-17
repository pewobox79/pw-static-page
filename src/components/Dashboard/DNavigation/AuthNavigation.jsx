import {Link} from "react-router-dom";

const AuthNavigation=()=>{
    return(
        <nav>
            <ul>
                <li><a href={"/aboutme"}>About Me</a></li>
                <li><Link to={"/demo/logout"}>Logout</Link></li>
            </ul>
        </nav>
    )
}

export default AuthNavigation