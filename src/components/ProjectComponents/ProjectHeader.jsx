import style from '../../styling/ProjectDetails.module.css';
import ProjectFactItem from './ProjectFactItem';

export default function ProjectHeader(props) {
    console.log(props)
    return (
        <section className={style.projectHeaderSection}>
            <div className={style.projectHeaderSectionInner}>
            <div className={style.projectTitle}>
                <h1>{props.title?.toUpperCase()}</h1>
            </div>
            <div className={style.projectDetailsContainer}>

                <div className={style.projectDescription}>
                    {props.field_company_logo ?
                    <a href={props.field_projekt_url} target={"_blank"}>
                        <img src={"https://pewobox.com"+props.field_company_logo} alt={"logo"}/>
                    </a>
                    :null}
                        <p>{props.field_description}</p>
                </div>
                <div className={style.projectFacts}>
                    <ProjectFactItem
                        industry={props.field_industry}
                        website={props.field_projekt_url}
                        client={props.field_related_to}
                    />
                </div>
            </div>
            </div>
        </section>
    );
}
