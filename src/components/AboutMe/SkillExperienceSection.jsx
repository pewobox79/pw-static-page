import style from '../../styling/AboutMe.module.css';
import LanguageContainer from "./LanguageContainer.jsx";
import SkillComponent from "./SkillComponent.jsx";

function SkillExperienceSection(props) {

    return (
        <section className={style.skillAndLanguageSection}>
            <div className={style.skillAndLanguageSectionInner}>
            <SkillComponent />
            <LanguageContainer languageData={props.field_languages} />
            </div>
        </section>
    );
}

export default SkillExperienceSection;
