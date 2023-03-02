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

    useEffect(() => {
        setIsLoading(true)
        const projectData = getDataFromBackend("projectlist").then(res => setAllProjects(res))
        setIsLoading(false)
    }, [])


    if (isLoading) {
        return <SpinnerComponent/>
    }

    const projectDetails = new ProjectController(allProjects, "English", id)
    const selectedProject = projectDetails.getSingleProject()
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
            />
            <div className={style.projectMainContainer}>
                <div className={style.projectHeaderSectionInner}>
                    <BackButton ctaTitle={'back to projectlist'}/>
                </div>
                <ProjectHeader {...selectedProject} />

                <ProjectResponsibility
                    responsibility={selectedProject?.field_my_responsibility}
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
