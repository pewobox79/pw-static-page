import React, {useEffect} from "react";
import {getPersonalData} from "../../../apis/aboutmedata.js";
import AboutMeHeader from "./AboutMeHeader.jsx";
import HeaderText from "../assetsComponents/HeaderText.jsx";
import SkillExperienceSection from "./SkillExperienceSection.jsx";
import CoreValues from "./CoreValueComponent/CoreValues.jsx";
import Head from "../assetsComponents/Head.jsx";
import ExperienceSection from "./ExperienceComponents/ExperienceSection.jsx";
import ServiceSection from "./ServiceComponents/ServiceSection.jsx";
import TestimonialSection from "./TestimonalComponents/TestimonialSection.jsx";

const AboutMe = () => {

    async function personalData() {
        const data = await getPersonalData()
        return data
    }

    useEffect(() => {
        const data = personalData();
        console.log(data)
    }, [])


    return (
        <>
            <Head title={"About Peter Wolf the web developer & advisor!"}
                  descr={"Get to know peter wolf better! He is a Freelance Web Developer and Advisor to "}
                  keywords={"CoreValues, freelancer, web developer, techstack"}/>
            <AboutMeHeader/>
            <HeaderText title={"Skills"} variant={"h2"} align={"center"} margin={"0"}/>
            <SkillExperienceSection/>
            <HeaderText title={"CoreValues"} align={"center"} margin={"0"} variant={"h2"}/>
            <CoreValues/>
            <HeaderText title={"Experience & Education"} align={"center"} margin={"0"} variant={"h2"}/>
            <ExperienceSection/>
            <HeaderText title={"benefit with me"} variant={"h2"} align={"center"} margin={"0"}/>
            <ServiceSection/>
            <HeaderText title={"Some client feedback"} variant={"h2"} align={"center"} margin={"0"}/>
            <TestimonialSection/>


        </>)
}
export default AboutMe