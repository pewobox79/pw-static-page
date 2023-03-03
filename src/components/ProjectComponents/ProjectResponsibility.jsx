
import style from '../../styling/ProjectDetails.module.css';
import HeaderText from "../assetsComponents/HeaderText.jsx";

export default function ProjectResponsibility(props) {

    return (
        <div className={style.responsibilitiesBlockWrapper}>
            <div className={style.projectHeaderSectionInner}>
            <HeaderText title={'My responsibilities'} variant={'h3'} />
            <div className={style.responsibilitiesTextBlock}>
                <p>{props.responsibility}</p>
            </div>
            </div>
        </div>
    );
}
