import style from '../../styling/AboutMe.module.css';
import { useEffect, useState } from 'react';
import SkillItem from "./SkillItem.jsx";
import SpinnerComponent from "../assetsComponents/SpinnerComponent.jsx";

function SkillComponent() {
    const [isLoading, setIsLoading] = useState(false);
    const [skillsData, setSkillsData] = useState([]);



    const skillList = skillsData?.map((skill) => {
        return (
            <SkillItem
                key={skill.uuid}
                skill={skill.title}
                skillValueColor={'#1ABC9C'}
                skillLevelValue={skill.field_skill_level}
            />
        );
    });

    return (
        <div className={style.skillContainer}>
            <div className={style.skillListingBox}>
                {isLoading ? <SpinnerComponent /> : skillList}
            </div>
        </div>
    );
}

export default SkillComponent;
