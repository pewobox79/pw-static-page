import React, {useEffect, useState} from "react";
import AboutMeHeader from "./AboutMeHeader.jsx";
import HeaderText from "../assetsComponents/HeaderText.jsx";
import SkillExperienceSection from "./SkillExperienceSection.jsx";
import CoreValues from "./CoreValueComponent/CoreValues.jsx";
import Head from "../assetsComponents/Head.jsx";
import ExperienceSection from "./ExperienceComponents/ExperienceSection.jsx";
import ServiceSection from "./ServiceComponents/ServiceSection.jsx";
import TestimonialSection from "./TestimonalComponents/TestimonialSection.jsx";
import {getDataFromBackend} from "../../../apis/dataProvider.js";
import SpinnerComponent from "../assetsComponents/SpinnerComponent.jsx";
import DownloadButton from "../assetsComponents/Buttons/DownloadButton.jsx";
import {PersonalDataController} from "../../../apis/controller/dataController.js";
import style from '../../styling/AboutMe.module.css'

const AboutMe = () => {


    const [aboutMeData, setAboutMeData] = useState([])
    const [loading, setLoading] = useState(false)

    const expertData = new PersonalDataController(aboutMeData, "English")
    const cVDataToDownload = expertData.getExpertCV()
    console.log(cVDataToDownload)

    useEffect(() => {
        setLoading(true)
        const data = getDataFromBackend("expertlist").then(res => setAboutMeData(res))
        setLoading(false)

    }, [])

    if (loading) {
        return (<SpinnerComponent/>)
    }
    return (
        <>
            <Head title={"About Peter Wolf the web developer & advisor!"}
                  descr={"Get to know peter wolf better! He is a Freelance Web Developer and Advisor to "}
                  keywords={"CoreValues, freelancer, web developer, techstack"}/>
            <AboutMeHeader personalData={aboutMeData}/>
            <HeaderText title={"Some relevant skills"} variant={"h2"} align={"center"} margin={"0"}/>
            <SkillExperienceSection {...aboutMeData[1]}/>
            <HeaderText title={"Core values"} align={"center"} margin={"0"} variant={"h2"}/>
            <CoreValues {...aboutMeData[1]}/>
            <HeaderText title={"Experience & Education"} align={"center"} margin={"0"} variant={"h2"}/>
            <ExperienceSection/>
            <HeaderText title={"What I will bring to you!"} variant={"h2"} align={"center"} margin={"0"}/>
            <ServiceSection/>
            <HeaderText title={"Some client feedback"} variant={"h2"} align={"center"} margin={"0"}/>
            <TestimonialSection/>
            <div className={style.downloadSection}>
                <HeaderText title={"Downloads"} variant={"h2"} align={"center"} margin={"0"}/>
                <DownloadButton downloadData={cVDataToDownload} buttonText={"CV"}/>
            </div>

        </>)
}
export default AboutMe