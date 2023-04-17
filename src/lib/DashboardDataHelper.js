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