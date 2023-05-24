/*const backendURL = import.meta.env.VITE_VERCEL_DRUPAL_BACKEND_URL*/
const backendURL = "https://pewobox.com/api/"

export async function getDataFromBackend(searchString, abortController) {
    let responseData


    const localAbort = abortController ? {signal: abortController.signal} : null;
    const response = await fetch(backendURL + searchString, localAbort)
        .then(res => {
            if (!res.ok) {
                throw new Error()
            } else {
                responseData = res.json()
            }
        }).catch(err => {
            console.log("error happend")
        })

    return responseData
}


export function getDailyPrice(priceOverview, searchData) {
    for (let key in priceOverview) {
        const todayPrice = priceOverview[key]["6. market cap (USD)"]
        console.log("today: ", todayPrice)

    }

    console.log("date", typeof searchData)

}