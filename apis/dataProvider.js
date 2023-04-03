/*const backendURL = import.meta.env.VITE_VERCEL_DRUPAL_BACKEND_URL*/
const backendURL = "https://pewobox.com/api/"
export async function getDataFromBackend(searchString){
   const response =await fetch(backendURL+searchString)
    return await response.json()
}
