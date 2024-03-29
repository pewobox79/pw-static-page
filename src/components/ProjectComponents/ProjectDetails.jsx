import {useParams} from 'react-router-dom';
import BackButton from '../assetsComponents/Buttons/BackButton.jsx';
import ProjectHeader from './ProjectHeader';
import style from '../../styling/ProjectDetails.module.css';
import ProjectTechStack from './ProjectTechStack';
import ProjectScreenShots from './ProjectScreenShots';
import ProjectResponsibility from './ProjectResponsibility';
import Head from "../assetsComponents/Head.jsx";
import {ProjectController} from "../../../apis/controller/projectController.js";
import {getDataFromBackend} from "../../../apis/dataProvider.js";
import {useEffect, useState} from "react";
import SpinnerComponent from "../assetsComponents/SpinnerComponent.jsx";

export default function ProjectDetails(props) {

    const {id, title} = useParams();
    const [allProjects, setAllProjects] = useState()
    const [isLoading, setIsLoading] = useState(false)

    const projectDetails = new ProjectController(allProjects, "English", id)

    useEffect(() => {
        const abortController = new AbortController()
        setIsLoading(true)
        const projectData = getDataFromBackend("projectlist", abortController)
            .then(res => {
                setAllProjects(res)
                setIsLoading(false)
            })

        return ()=>{
            abortController.abort()
        }
    }, [])


    if (isLoading) {
        return <SpinnerComponent/>
    }

    const selectedProject = projectDetails.getSingleProject();

    return (
        <>
            <Head
                title={
                    selectedProject?.field_meta_title
                        ? selectedProject?.field_meta_title
                        : `WebDevelopment project of  ${selectedProject?.title}`
                }
                description={
                    selectedProject?.field_meta_description
                        ? selectedProject?.field_meta_description
                        : selectedProject?.field_description
                }
                image={""}

            />
            <div className={style.projectMainContainer}>
                <div className={style.projectHeaderSectionInner}>
                    <BackButton ctaTitle={'back to projectlist'}/>
                </div>
                <ProjectHeader {...selectedProject} />

                <ProjectResponsibility
                    responsibility={selectedProject?.field_responsibility_point}
                />
                <ProjectTechStack
                    techStack={selectedProject?.field_provided_service}
                />
                {selectedProject?.field_image ? <ProjectScreenShots
                    imageList={selectedProject?.field_image}
                    projectName={selectedProject?.title}
                /> : null}
            </div>
        </>
    );
}
