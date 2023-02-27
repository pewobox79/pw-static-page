const backendURL = import.meta.env.VITE_DRUPAL_BACKEND_URL

export async function getPersonalData(){
    const options ={
        method: "GET",
        headers:{
            "Access-Control-Allow-Origin": "no-cors"
        }
    }
    const response = await fetch(`${backendURL}expertlist`, options)
    const data = response.json()
    return data
}