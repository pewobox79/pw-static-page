import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import styles from '../styling/ShoppigCart.module.css'
import {removeItemFromCart, updateCartListEntry} from "../services.js";
import {useState} from "react";
import {CartUpdateInput} from "./CartUpdateInput.jsx";
function ShoppingCartItem({cartItem, setIsOpen}){

    const [updateState, setUpdateState] = useState(false);

    function handleEdit(){

        setUpdateState(!updateState)
    }

    function handleUpdateValue(e){
        e.preventDefault()
        //store values in Object
        updateCartListEntry(cartItem.productId, e.target.value, e.target.name)

        //call localstorage entries

        // find the related productID entry

        //add new data to the productID
    }


function handleUpdateEntry(e){
        setUpdateState(!updateState)
}
    function handleDelete(){

        removeItemFromCart(cartItem.productId)
        setIsOpen(false)

    }
    return(
        <div className={styles.CartItemWrapper}>
                <p>{cartItem.title}</p>
                <p>{cartItem.description}</p>
                <p>{cartItem.price} Euro</p>
            {updateState ? <CartUpdateInput value={cartItem.quantity} name={"quantity"}/> : <p>{cartItem.quantity} pc.</p>}
            {updateState ? <SaveIcon sx={{fontSize: "1rem"}} onClick={handleUpdateEntry}/> :<EditIcon sx={{fontSize: "1rem"}} onClick={handleEdit}/>}
                <DeleteIcon sx={{fontSize: "1rem"}} onClick={handleDelete}/>
        </div>
    )
}
export default ShoppingCartItem