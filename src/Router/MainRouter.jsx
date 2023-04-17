import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Homepage from "../components/Homepage";
import Layout from "../components/Layout/MainLayout";

import Contact from "../components/Forms/Contact";
import ErrorPage from "../components/assetsComponents/ErrorPage";
import AboutMe from "../components/AboutMe/index.jsx";
import Cookies from "../components/legalComponents/Cookies.jsx";
import ProjectsOverview from "../components/ProjectComponents/ProjectsOverview.jsx";
import ProjectDetails from "../components/ProjectComponents/ProjectDetails.jsx";
import Course from "../components/CourseComponents/CourseOverview.jsx";
import PartnerOverview from "../components/PartnerComponents/PartnerOverview.jsx";
import BlogOverview from "../components/BlogComponents/BlogOverview.jsx";
import BasicPage from "../components/assetsComponents/BasicPage.jsx";
import OverviewPage from "../components/Dashboard/Overview/OverviewPage.jsx";
import DashboardLayout from "../components/Layout/DashboardLayout.jsx";
import LoginForm from "../components/assetsComponents/Forms/LoginForm.jsx";
import RegistrationForm from "../components/assetsComponents/Forms/RegistrationForm.jsx";
import ThankYouPage from "../components/assetsComponents/pages/ThankYouPage.jsx";
import LogoutForm from "../components/assetsComponents/Forms/LogoutForm.jsx";
import ResetPassword from "../components/assetsComponents/Forms/ResetPassword.jsx";
import LoggedOutPage from "../components/assetsComponents/pages/LoggedOutPage.jsx";


const router = createBrowserRouter(
    createRoutesFromElements(

            <Route >
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Homepage/>}/>
                    <Route path="aboutme" element={<AboutMe/>}/>
                    <Route path="contact" element={<Contact/>}/>
                    <Route path="courses" element={<Course/>}/>
                    <Route path="webdev-blog" element={<BlogOverview/>}/>
                    <Route path="projects/" element={<ProjectsOverview/>}/>
                    <Route path="partner/" element={<PartnerOverview/>}/>
                    <Route path="dataprotection/" element={<BasicPage pageData={"dataprotection"} apiString={"legaldata"}/>}/>
                    <Route path="imprint" element={<BasicPage pageData={"imprint"} apiString={"legaldata"}/>}/>
                    <Route path="cookies" element={<Cookies/>}/>
                    <Route path="details/:title/:id"  element={<ProjectDetails/>}/>
                    <Route path="/demo/login" element={<LoginForm/>}/>
                    <Route path="/demo/register" element={<RegistrationForm/>}/>
                    <Route path="/demo/logout" element={<LogoutForm/>}/>
                    <Route path="/demo/resetPassword" element={<ResetPassword/>}/>
                    <Route path="/demo/registration/thank_you" element={<ThankYouPage/>}/>
                    <Route path="/demo/loggedOut" element={<LoggedOutPage/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Route>
                <Route path="/demo/dashboard" element={<DashboardLayout/>}>
                    <Route index element={<OverviewPage/>}/>
                </Route>
            </Route>
    ))

export default router