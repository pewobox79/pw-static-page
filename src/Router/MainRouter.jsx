import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Homepage from "../components/Homepage";
import Layout from "../components/Layout/MainLayout";
import Imprint from "../components/legalComponents/Imprint";
import Contact from "../components/Forms/Contact";
import ErrorPage from "../components/assetsComponents/ErrorPage";


 const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
        <Route index element={<Homepage/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="imprint" element={<Imprint/>}/>
        <Route path="*" element={<ErrorPage/>}/>
    </Route>
))

export default router