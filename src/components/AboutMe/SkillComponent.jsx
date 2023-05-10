import style from '../../styling/AboutMe.module.css';
import SkillItem from "./SkillItem.jsx";
import SpinnerComponent from "../assetsComponents/SpinnerComponent.jsx";
/*const backendURL = import.meta.env.VITE_VERCEL_DRUPAL_BACKEND_URL*/

function SkillComponent({title, data, isLoading}) {

    const skillList = data?.map((skill) => {
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
            <h2>{title}</h2>
            <div className={style.skillListingBox}>
                {isLoading ? <SpinnerComponent /> : skillList}
            </div>
        </div>
    );
}

export default SkillComponent;
