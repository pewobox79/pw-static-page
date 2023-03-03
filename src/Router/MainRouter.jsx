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


const router = createBrowserRouter(
    createRoutesFromElements(

            <Route path="/" element={<Layout/>}>
                <Route index element={<Homepage/>}/>
                <Route path="aboutme" element={<AboutMe/>}/>
                <Route path="contact" element={<Contact/>}/>
                <Route path="courses" element={<Course/>}/>
                <Route path="webdev-blog" element={<BlogOverview/>}/>
                {/*<Route path="projects/" element={<ProjectsOverview/>}/>*/}
                <Route path="partner/" element={<PartnerOverview/>}/>
                <Route path="dataprotection/" element={<BasicPage pageData={"dataprotection"} apiString={"legaldata"}/>}/>
                <Route path="imprint" element={<BasicPage pageData={"imprint"} apiString={"legaldata"}/>}/>
                <Route path="cookies" element={<Cookies/>}/>
                <Route path="details/:title/:id"  element={<ProjectDetails/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Route>
    ))

export default router