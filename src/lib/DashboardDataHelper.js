export async function getToDoList(){
    const URL = "https://jsonplaceholder.typicode.com/todos"

    try{
        const response = await fetch(URL)
        const data = await response.json()
        return data

    }catch(err){
        console.log("error happen to fetch toDoList", err)

    }

}


export async function getCryptoChartValue(query){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f2f2dfce82mshcb64156556ea80ap1968b8jsn5e6669fe879d',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };

    try {


        const response = await fetch(`https://alpha-vantage.p.rapidapi.com/query?market=CNY&function=DIGITAL_CURRENCY_WEEKLY&symbol=${query}`, options)
        const data = await response.json()
        return data
    }catch(err){

        console.log("fetch failed", err)

    }
}