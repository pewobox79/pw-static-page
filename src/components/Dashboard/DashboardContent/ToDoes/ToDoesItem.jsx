import {useState} from "react";
import CheckIcon from '@mui/icons-material/Check';
import AddIcon from '@mui/icons-material/Add';
import style from '../../../../styling/DashboardStyling/ToDoList.module.css'


export default function ToDoesItem({title, status, id }){

    const [myStatus, setMyStatus] =useState(status)
    const openTask = {
        color: "green"
    }

    const closedTask = {
        textDecoration: "line-through",
        color: "black"
    }



    return(
        <div style={!myStatus ? openTask: closedTask} className={style.taskItemWrapper}>
            <h5>{id}. {title}</h5>
        <div onClick={()=>setMyStatus(!myStatus)}>{!myStatus ?<CheckIcon fontSize={"small"}/>: <AddIcon/>}</div>
        </div>
    )
}