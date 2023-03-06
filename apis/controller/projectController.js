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

    getMetaTitle(){
        let selectedMetaTitle
        this.allProjects?.map((item)=>{
            if(item.langcode === this.language){
                if(item.field_meta_title.length > 0)
                    selectedMetaTitle = item.field_meta_title
            }else{
                selectedMetaTitle = item.field_description
            }
        })
        return selectedMetaTitle

    }

    getMetaDescription(){
        let selectedMetaDescription
        this.allProjects?.map((item)=>{
            if(item.langcode === this.language){
                selectedMetaDescription = item.field_meta_description
            }
        })
        return selectedMetaDescription

    }
}