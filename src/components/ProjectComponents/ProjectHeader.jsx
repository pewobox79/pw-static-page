import style from '../../styling/ProjectDetails.module.css';
import ProjectFactItem from './ProjectFactItem';

export default function ProjectHeader(props) {
    const factsArray = [
        props.field_industry,
        props.field_projekt_url,
        props.field_related_to,
    ];

    return (
        <section className={style.projectHeaderSection}>
            <div className={style.projectHeaderSectionInner}>
            <div className={style.projectTitle}>
                <h1>{props.title?.toUpperCase()}</h1>
            </div>
            <div className={style.projectDetailsContainer}>
                <div className={style.projectDescription}>
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
