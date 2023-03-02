import style from '../../styling/ProjectDetails.module.css';
import ProjectTechStackItem from './ProjectTechStackItem.jsx';
import HeaderText from "../assetsComponents/HeaderText.jsx";


export default function ProjectTechStack(props) {
    const techStackArray = props.techStack?.split(',');

    const techStackItems = techStackArray?.map((techStackItem) => {
        return (
            <ProjectTechStackItem key={techStackItem} title={techStackItem} />
        );
    });

    return (
        <section className={style.projectStackSection}>
            <HeaderText title={'TechStack for this Project'} variant={'h3'} />
            <div className={style.techStackItemsContainer}>
                {techStackItems}
            </div>
        </section>
    );
}
