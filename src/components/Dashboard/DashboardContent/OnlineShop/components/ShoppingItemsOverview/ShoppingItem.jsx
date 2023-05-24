import styles from '../../styling/ShoppingCard.module.css'
import FormButton from "../../../../../assetsComponents/Buttons/FormButton.jsx";
import styled from "styled-components";
import {useContext, useState} from "react";
import HorizontalLine from "../../../../../assetsComponents/HorizontalLine.jsx";
import {checkLocalStorage} from "../../../../../../lib/FormHandler.js";
import {addNewItemsToCart, checkCartItemExists, checkNewItemBeforeAdding} from "../../services.js";
import {ShoppingContext} from "../../index.jsx";
import {Chip} from "@mui/material";


const CardImage = styled.img`
  background: url(${props => props.url1}) center center no-repeat;
  background-size: cover;
  width: 100%;
  min-height: 50px;
  height: 100%;
  -moz-border-radius-topleft: 10px;
  -moz-border-radius-topright: 10px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  &:hover {
    background: url(${props => props.url2}) center center no-repeat;
    background-size: cover;
  }
`


function ShoppingItem(props) {
    const data = useContext(ShoppingContext)

    const [itemAlreadyInCart, setItemAlreadyInCart] = useState(false);
    const [isItemValid, setIsItemValid] = useState(true);

    const [newItem, setNewItem] = useState({
        title: props.title,
        size: "",
        quantity: null,
        price: props.specialOffer.isActive ? props.specialOffer.specialOfferVariant.price.value : props.price.value,
        productId: props.productId

    })


    function handleChange(e) {

        setNewItem({
            ...newItem, [e.target.name]: e.target.value
        })
    }


    function addToCard(e) {

        const itemCheckResponse = checkNewItemBeforeAdding(newItem)
        console.log("new item is valid: ",itemCheckResponse)


        if(isItemValid) {
            e.preventDefault();
            const existingCartItems = checkLocalStorage("cart")
            const itemExits = checkCartItemExists(existingCartItems, newItem.productId)

            if (itemExits) {
                setItemAlreadyInCart(true)
            } else {
                data.setShoppingCartItemArray(newItem)
                addNewItemsToCart(newItem, () => checkLocalStorage("cart"))

            }
        }


    }


    const ListOfVariants = props.variants.sizeVariations.map((variant) => (
        <option key={variant.value} value={variant.value} disabled={variant.status}>{variant.type}</option>
    ))
    return (

        <div className={styles.shoppingCard}>

            <div className={styles.cardImage}>
                <CardImage url1={props.imageFront.src} url2={props.imageBack.src}/></div>
            <div>
                <h3>{props.title}</h3>
            </div>
            <Chip label={props.specialOffer.isActive? "Special Price":"Regular Price"} variant="outlined" color={props.specialOffer.isActive? "error":"primary"} />
            <div className={styles.cardDescription}>
                <p>{props.description}</p>
            </div>
            <div>{props.specialOffer.isActive ? props.specialOffer.specialOfferVariant.price.value : props.price.value} {props.price.currency}</div>
            <HorizontalLine/>

            <form style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                textAlign: "center",
                width: "80%"
            }}>
                <label htmlFor="size">Size</label>
                <select id="size" name="size" onChange={handleChange}>
                    <option value={0}>Choose your size..</option>
                    {ListOfVariants}
                </select>
                <label htmlFor="quantity">Quantity</label>
                <input type="number" name="quantity" min={0} defaultValue={newItem.quantity} onChange={handleChange}/>
                <br/>
                <FormButton title={"add to card"} handleClick={addToCard}/>
            </form>
            {itemAlreadyInCart ? <p style={{backgroundColor: "red", color: "white", position: "absolute", bottom: "30px", padding: "5px"}} onClick={()=> setItemAlreadyInCart(false)}>item already in cart</p> : null}
        </div>


    )
}

export default ShoppingItem