import style from '../../../styling/AboutMe.module.css';

import SubHeaderWithLine from "../../assetsComponents/SubHeaderWithLine.jsx";
import EmployerContainer from "./EmployerContainer.jsx";
import EducationContainer from "../EducationComponents/EducationContainer.jsx";

export default function ExperienceSection() {
    return (
        <section className={style.experienceSection}>

            <div className={style.experienceSectionInner}>
                <SubHeaderWithLine title={'Experiences'} />
                <EmployerContainer />
            </div>
            <div className={style.experienceSectionInner}>
                <SubHeaderWithLine title={'Education'} />
                <EducationContainer />
            </div>
        </section>
    );
}
