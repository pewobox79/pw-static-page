import style from '../../styling/AboutMe.module.css';
import LanguageContainer from "./LanguageContainer.jsx";
import SkillComponent from "./SkillComponent.jsx";

function SkillExperienceSection(props) {
    console.log('skillsdata', props.field_languages);
    return (
        <section className={style.skillAndLanguageSection}>
            <SkillComponent />
            <LanguageContainer languageData={props.field_languages} />
        </section>
    );
}

export default SkillExperienceSection;
