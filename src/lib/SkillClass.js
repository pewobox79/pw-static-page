export class Skills {
    constructor(data) {
        this.data = data
    }

    getLanguageSkills() {
        let skillList = []
        this.data?.map(item => {
            {
                if (item.field_areas === "communication") {
                    skillList.push(item)
                }
            }
        })
        return skillList
    }

    getDiverseTech() {
        let skillList = []
        this.data?.map(item => {
            {
                if (item.field_areas === "diverse_technologies") {
                    skillList.push(item)
                }
            }
        })
        return skillList
    }


    getManagementMethods() {
        let skillList = []
        this.data?.map(item => {
            {
                if (item.field_areas === "management_methods") {
                    skillList.push(item)
                }
            }
        })
        return skillList
    }

    getCodingSkills() {
        let skillList = []
        this.data?.map(item => {
            {
                if (item.field_areas === "coding_scripts_queryLanguage") {
                    skillList.push(item)
                }
            }
        })
        return skillList
    }

    getCMS() {
        let skillList = []
        this.data?.map(item => {
            {
                if (item.field_areas === "ContentManagementSystems") {
                    skillList.push(item)
                }
            }
        })
        return skillList
    }
    getToolsPlatforms() {
        let skillList = []
        this.data?.map(item => {
            {
                if (item.field_areas === "tools_platforms") {
                    skillList.push(item)
                }
            }
        })
        return skillList
    }

    getCollaborationTools() {
        let skillList = []
        this.data?.map(item => {
            {
                if (item.field_areas === "collaboration_tools") {
                    skillList.push(item)
                }
            }
        })
        return skillList
    }
getFrameworks() {
        let skillList = []
        this.data?.map(item => {
            {
                if (item.field_areas === "frameworks_libraries") {
                    skillList.push(item)
                }
            }
        })
        return skillList
    }

}