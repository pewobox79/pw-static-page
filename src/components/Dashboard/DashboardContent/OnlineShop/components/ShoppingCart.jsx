import React, {useEffect, useState} from "react";
import {checkLocalStorage} from "../../../../../lib/FormHandler.js";
import styles from '../styling/ShoppigCart.module.css'
import FormButton from "../../../../assetsComponents/Buttons/FormButton.jsx";
import ShoppingCartItem from "./ShoppingCartItem.jsx";
import {IconButton, Badge} from "@mui/material";
import styled from "styled-components";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const StyledBadge = styled(Badge)(({theme}) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid green`,
        padding: '0 4px',
    },
}));

function ShoppingCart({data}) {

    const [isOpen, setIsOpen] = useState(true)
    const myCart = checkLocalStorage("cart")


    function handleOpen(e) {
        setIsOpen(!isOpen)
    }

    function deleteCompleteCart() {
        localStorage.removeItem("cart");
        setIsOpen(false)
    }


    const CartItemList = myCart?.map((cartItem) => {

        return (
            <ShoppingCartItem key={cartItem.productId} {...cartItem} isOpen={isOpen} setIsOpen={setIsOpen}/>
        )
    })

    return (
        <>
            {isOpen ?
                <div className={styles.shoppingCartOpen}>

                    <div onClick={handleOpen} className={styles.openCloseButton}>X</div>
                    <h1>Shopping cart</h1>
                    {CartItemList ? CartItemList : <p>No items in Shopping cart</p>}

                    <FormButton title={"Delete Cart"} handleClick={deleteCompleteCart}/>
                </div>
                :
                <div className={styles.cartButtonOpen} onClick={handleOpen}>
                    <IconButton aria-label="cart">
                        <StyledBadge badgeContent={myCart ? myCart.length : "0"}>
                            <ShoppingCartIcon sx={{color: "black"}}/>
                        </StyledBadge>
                    </IconButton>
                </div>}

        </>

    )
}

export default ShoppingCart