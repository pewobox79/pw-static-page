import style from '../../styling/ProjectsOverview.module.css';
import Head from "../assetsComponents/Head.jsx";
import ProjectItem from "./ProjectItem.jsx";
import {useEffect, useState} from "react";
import {getDataFromBackend} from "../../../apis/dataProvider.js";
import SectionHeader from "../assetsComponents/SectionHeader.jsx";
import SpinnerComponent from "../assetsComponents/SpinnerComponent.jsx";

function ProjectsOverview() {

    const [projectList, setProjectList]=useState()
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        setIsLoading(true)
        const abortController = new AbortController()
        const projectData = getDataFromBackend("projectlist", abortController)
            .then(data=>{
            setProjectList(data)
            setIsLoading(false)
        })

        return ()=>{
            abortController.abort()
        }
    },[])


    if (isLoading) {
        return <SpinnerComponent/>

    } else {
        const courseItems = projectList?.map((projectItem) => {
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
