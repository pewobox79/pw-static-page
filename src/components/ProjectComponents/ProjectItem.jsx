import style from '../../styling/ProjectsOverview.module.css';


export default function ProjectItem({title, client, id, uuid}) {

    const seoTitle = title.replace(/\s/g, '_').toLowerCase()
    return (
        <li key={id} className={style.projectListItem}>
            <div className={style.projectListItemInner}>
                <div className={style.projectListItemSubHeader}>
                    Project with {client}<br/>
                    <div className={style.projectListItemTitle}><a href={`/details/${seoTitle}/${id}`}>{title}</a></div>
                </div>


                <a className={style.detailButton}
                    href={`/details/${seoTitle}/${id}`}
                >
                    Find out more</a>
            </div>
        </li>
    );
}
