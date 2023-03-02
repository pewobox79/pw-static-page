import style from '../../styling/ProjectDetails.module.css';

export default function ProjectTechStackItem({ title }) {
    return (
        <div className={style.techStackItem}>
            <h3>{title.toLowerCase()}</h3>
        </div>
    );
}
