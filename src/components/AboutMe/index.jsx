import React, { useState} from "react";
import AboutMeHeader from "./AboutMeHeader.jsx";
import HeaderText from "../assetsComponents/HeaderText.jsx";
import SkillExperienceSection from "./SkillExperienceSection.jsx";
import CoreValues from "./CoreValueComponent/CoreValues.jsx";
import Head from "../assetsComponents/Head.jsx";
import ExperienceSection from "./ExperienceComponents/ExperienceSection.jsx";
import ServiceSection from "./ServiceComponents/ServiceSection.jsx";
import TestimonialSection from "./TestimonalComponents/TestimonialSection.jsx";
import SpinnerComponent from "../assetsComponents/SpinnerComponent.jsx";
import DownloadButton from "../assetsComponents/Buttons/DownloadButton.jsx";
import {PersonalDataController} from "../../../apis/controller/dataController.js";
import style from '../../styling/AboutMe.module.css'
import {useFetch} from "../../hooks/useFetch.js";

const AboutMe = () => {

    const [loading, setLoading] = useState(false)

    const aboutMeData = useFetch("expertlist");
    const expertData = new PersonalDataController(aboutMeData, "English")
    const metaData = expertData.getMetaData();
    const cVDataToDownload = expertData.getExpertCV()
    const imageUrl = expertData.getExpertImage()


    if (loading) {
        return (<SpinnerComponent/>)
    }
    return (
        <>
            <Head title={metaData?.title}
                  description={metaData?.description}
                  keywords={"CoreValues, freelancer, web developer, techstack"}
                  image={imageUrl}
            />
            <AboutMeHeader personalData={aboutMeData}/>
            <HeaderText title={"Skills and Technologies"} variant={"h2"} align={"center"} margin={"0"}/>
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