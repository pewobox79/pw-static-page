export async function getDemoInfoContent(){

    try{
        const response = await fetch("https://pewobox.com/" + "api/demoContent")
        const data = await response.json()
        return data
    }catch(err){
        const errorMessage = "get demo content error" + err;
        return errorMessage
    }

}