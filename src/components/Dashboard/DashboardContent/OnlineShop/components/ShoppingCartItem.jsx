import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import styles from '../styling/ShoppigCart.module.css'
import {removeItemFromCart, updateCartListEntry} from "../services.js";
import {useState} from "react";
import {CartUpdateInput} from "./CartUpdateInput.jsx";
function ShoppingCartItem(props){

    const [updateState, setUpdateState] = useState(false);

    function handleEdit(){
        console.log("update item entry")
        setUpdateState(!updateState)
    }

    function handleUpdateValue(e){

        //store values in Object
        updateCartListEntry(props.productId, e.target.value, e.target.name)

        //call localstorage entries

        // find the related productID entry

        //add new data to the productID
    }


function handleUpdateEntry(e){
        console.log("update entry")
        setUpdateState(!updateState)
}
    function handleDelete(){

        removeItemFromCart(props.productId)
        props.setIsOpen(false)

    }
    return(
        <div className={styles.CartItemWrapper}>
                <p>{props.title}</p>
                <p>{props.description}</p>
                <p>{props.price} Euro</p>
            {updateState ? <CartUpdateInput value={props.quantity} name={"quantity"} onChange={handleUpdateValue}/> : <p>{props.quantity} Stk</p>}
            {updateState ? <SaveIcon sx={{fontSize: "1rem"}} onClick={handleUpdateEntry}/> :<EditIcon sx={{fontSize: "1rem"}} onClick={handleEdit}/>}
                <DeleteIcon sx={{fontSize: "1rem"}} onClick={handleDelete}/>
        </div>
    )
}
export default ShoppingCartItem