/*const sourceUrl = import.meta.env.VITE_VERCEL_DRUPAL_IMAGE_URL*/
const sourceUrl = "https://pewobox.com"

export class PersonalDataController {
    constructor(data, language) {
        this.data = data
        this.language = language

    }

    getExpertName(){
        let expertName
        this.data?.map((item)=>{
            if(item.langcode === this.language){
                expertName = item.title
            }
        })
        return expertName

    }
    getCoreValues() {
        let listOfValues
        this.data?.map((item)=>{
            if(item.langcode === this.language){
               listOfValues = item.field_core_values
            }
        })

        return listOfValues
    }

    getExpertImage() {
        let imgUrl
        this.data?.map((item) => {
            if (item.langcode === this.language) {
                imgUrl = sourceUrl +
                    item.field_profile_image
            }
        })
        return imgUrl
    }

    getPersonalQuote() {
        let personalQuote
        this.data?.map((item) => {
            if (item.langcode === this.language) {
                personalQuote = item.field_personal_quote
            }
        })
        return personalQuote

    }

    getExpertDescription(){
        let personalDescription
        this.data?.map((item) => {
            if (item.langcode === this.language) {
                personalDescription = item.field_description
            }
        })
        return personalDescription

    }

    getExpertCV(){
        let expertCV
        this.data?.map((item)=>{
            if(item.langcode === this.language){
                expertCV = item.field_cv_to_download
            }
        })

        return expertCV
    }

    getMetaData(){
        let metaData
        this.data?.map((item)=>{
            if(item.langcode === this.language){
                metaData = {
                    title: item.field_meta_title,
                    description: item.field_meta_description
                }
            }
        })
        return metaData
    }
}