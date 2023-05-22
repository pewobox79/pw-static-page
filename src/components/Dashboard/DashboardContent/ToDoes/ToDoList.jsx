import DashboardItemLayout from "../../../Layout/DashboardItemLayout.jsx";
import {useEffect, useState, useContext} from "react";
import {getToDoList} from "../../../../lib/DashboardDataHelper.js";
import ToDoesItem from "./ToDoesItem.jsx";
import {UserContext} from "../../../Layout/DashboardLayout.jsx";


const ToDoList =()=>{

    const context = useContext(UserContext)

    const [toDoes, setToDoes] = useState()


    useEffect(()=>{
const abortController = new AbortController
        const data = getToDoList(abortController)
            .then(data => setToDoes(data))
            .catch(err => console.log("error fetch", err))


    return ()=>{
        abortController.abort()
    }

    },[])




    const ListOfToDoes = toDoes?.map((item)=>{
        if(item.id <= 10) {
            return (
                <ToDoesItem key={item.id} id={item.id } title={item.title} status={item.completed}/>
            )
        }
    })

    return(
        <DashboardItemLayout>
            <div>
                <h1 style={{textAlign: "center"}}>{context.firstname?.toUpperCase()} ´s To Does</h1>
                <div>
                    {ListOfToDoes}
                </div>
            </div>
        </DashboardItemLayout>
    )
}

export default ToDoList