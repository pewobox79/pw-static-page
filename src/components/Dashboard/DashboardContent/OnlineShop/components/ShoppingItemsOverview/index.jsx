import styles from '../../styling/ShoppingOverList.module.css'
import ShoppingItem from "./ShoppingItem.jsx";
import React, {useContext, useEffect} from "react";
import {ShoppingContext} from "../../index.jsx";

const ShoppingItemsOverview = () => {

    const data = useContext(ShoppingContext)

    const TheShoppingItems = data?.ShoppingData.map((item) => (
        <ShoppingItem key={item.title + item.price.value} {...item}/>
    ))


    return (

            <section className={styles.shoppingListWrapper}>
                {TheShoppingItems}
            </section>

    )
}

export default ShoppingItemsOverview