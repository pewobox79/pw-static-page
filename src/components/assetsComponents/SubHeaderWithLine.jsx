import style from '../../styling/AboutMe.module.css';

export default function SubHeaderWithLine({ title }) {
    return (
        <div className={style.experienceTitle}>
            <h3>{title}</h3>
            <div className={style.experienceTitleLine}></div>
        </div>
    );
}
