import style from '../../styling/ProjectsOverview.module.css';
import Head from "../assetsComponents/Head.jsx";
import ProjectItem from "./ProjectItem.jsx";
import {useEffect, useState} from "react";
import {getDataFromBackend} from "../../../apis/dataProvider.js";
import SectionHeader from "../assetsComponents/SectionHeader.jsx";

function ProjectsOverview() {

    const [projectList, setProjectList]=useState(projectData)

    useEffect(()=>{
        const projectData = getDataFromBackend("projectlist").then(res => setProjectList(res))
    },[])
    if (!projectList) {
        return <h1>no data</h1>

    } else {
        const courseItems = projectList.map((projectItem) => {
            return (
                <ProjectItem
                    key={projectItem.uuid}
                    id={projectItem.uuid}
                    title={projectItem.title}
                    uuid={projectItem.uuid}
                    client={projectItem.field_related_to}
                />
            );
        });

        return (
            <>
                <Head
                    title={`Web development project examples of Peter Wolf`}
                    description={
                        'Find some of my work examples listed. The projects are created with JavaScript, NextJS, ReactJS.'
                    }

                />
                <section className={style.projectListSection}>
                    <SectionHeader title={"My international Projects"} subTitle={"Check some of my past projects and solutions"} SubTitleVariant={"h5"} TitleVariant={"h1"}/>
                    <ul>{courseItems}</ul>
                </section>
            </>
        );
    }
}

export default ProjectsOverview;
