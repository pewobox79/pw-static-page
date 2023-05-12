/*const backendURL = import.meta.env.VITE_VERCEL_DRUPAL_BACKEND_URL*/
const backendURL = "https://pewobox.com/api/"
export async function getDataFromBackend(searchString, abortController){
    const localAbort = abortController ? {signal: abortController.signal} : null;
   const response =await fetch(backendURL+searchString, localAbort)
    return await response.json()
}
