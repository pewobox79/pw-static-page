import style from '../../styling/AboutMe.module.css';
import LanguageContainer from "./LanguageContainer.jsx";
import SkillComponent from "./SkillComponent.jsx";
import {useEffect, useState} from "react";
import {Skills} from "../../lib/SkillClass.js";

const backendURL = "https://pewobox.com/api/"
function SkillExperienceSection(props) {



    const [isLoading, setIsLoading] = useState(false);
    const [skillsData, setSkillsData] = useState([]);
    useEffect(()=>{
        setIsLoading(true);
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const dataFetch = fetch(`${backendURL}listofskills`,requestOptions )
            .then(data => data.json())
            .then(response => {
                setSkillsData(response)
                setIsLoading(false)
            })
    }, [])

    const skillList = new Skills(skillsData)
    const languages = skillList.getLanguageSkills();
    const codingSkills = skillList.getCodingSkills();
    const diverseTec = skillList.getDiverseTech();
    const frameworks = skillList.getFrameworks();
    const tools = skillList.getToolsPlatforms();
    const cms = skillList.getCMS();
    const collaboration = skillList.getCollaborationTools();
    return (
        <section className={style.skillAndLanguageSection}>
            <div className={style.skillAndLanguageSectionInner}>
            <SkillComponent title={"Coding, Scripts, Query Languages"} data={codingSkills} isLoading={isLoading}/>
            <SkillComponent title={"Frameworks | Libraries"} data={frameworks} isLoading={isLoading}/>
            <SkillComponent title={"Tools | Platforms"} data={tools} isLoading={isLoading}/>
            <SkillComponent title={"Collaboration"} data={collaboration} isLoading={isLoading}/>
            <SkillComponent title={"Diverse Technologies"} data={diverseTec} isLoading={isLoading}/>
            <SkillComponent title={"Content Management Systems"} data={cms} isLoading={isLoading}/>
            <SkillComponent title={"Languages | Communication"} data={languages} isLoading={isLoading}/>


            </div>
        </section>
    );
}

export default SkillExperienceSection;
