export class ProjectController{
    constructor(projects, language, projectId) {
        this.allProjects = projects
        this.language = language
        this.projectId = projectId
    }

    getSingleProject(){
        let selectedProject
        this.allProjects?.map((item)=>{
            if(item.langcode === this.language){
                if(item.uuid === this.projectId){
                    selectedProject = item
                }

            }
        })

        return selectedProject
    }
}