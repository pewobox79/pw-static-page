import React, {useEffect, useState} from "react";
import {checkLocalStorage} from "../../../../../lib/FormHandler.js";
import styles from '../styling/ShoppigCart.module.css'
import FormButton from "../../../../assetsComponents/Buttons/FormButton.jsx";
import ShoppingCartItem from "./ShoppingCartItem.jsx";
import {IconButton, Badge} from "@mui/material";
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {calcTotalCartSum} from "../services.js";


const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 0,
        border: `2px solid grey`,
        padding: '0 6px',
        backgroundColor: "grey"
    },
}));

function ShoppingCart({data}) {

    const [isOpen, setIsOpen] = useState(false)
    const myCart = checkLocalStorage("cart")



    function handleOpen(e) {
        setIsOpen(!isOpen)
    }

    function deleteCompleteCart() {
        localStorage.removeItem("cart");
        setIsOpen(false)
    }

    const totalCartValue =calcTotalCartSum(myCart)

    const CartItemList = myCart?.map((cartItem) => {

        return (
            <ShoppingCartItem key={cartItem.productId+cartItem.productId} cartItem={cartItem} isOpen={isOpen} setIsOpen={setIsOpen}/>
        )
    })

    return (
        <>
            {isOpen ?
                <div className={styles.shoppingCartOpen}>

                    <div onClick={handleOpen} className={styles.openCloseButton}>X</div>
                    <h1>Shopping cart</h1>
                    {CartItemList ? CartItemList : <p>No items in Shopping cart</p>}
                    <div style={{width: "80%", margin: "auto", paddingBottom: "10px"}}>
                        <div>Total Sum: {totalCartValue}</div>
                    <FormButton title={"Clear Cart"} handleClick={deleteCompleteCart}/>

                    </div>
                </div>
                :
                <div className={styles.cartButtonOpen} onClick={handleOpen}>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={myCart?.length ? myCart.length : "0"} sx={{color: "black", fontWeight: "bold"}}>
                            <ShoppingCartIcon sx={{color: "black"}}/>
                        </StyledBadge>
                    </IconButton>
                </div>}

        </>

    )
}

export default ShoppingCart