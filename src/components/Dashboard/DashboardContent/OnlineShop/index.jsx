import DashboardItemLayout from "../../../Layout/DashboardItemLayout.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";
import ShoppingItemsOverview from "./components/ShoppingItemsOverview/index.jsx";
import React, {createContext, useState} from "react";
import {ShoppingData} from "./data.js";
import {checkLocalStorage} from "../../../../lib/FormHandler.js";


const INITIAL_CART_VALUES = []
export const ShoppingContext = createContext(null);
const OnlineShop = () => {

    const myCartItems = checkLocalStorage("cart");
    console.log("checked ", myCartItems)

    const [shoppingCartItemArray, setShoppingCartItemArray] = useState(myCartItems ? myCartItems : [])

    console.log("Arrayy",shoppingCartItemArray)

    return (
        <ShoppingContext.Provider value={{ShoppingData, shoppingCartItemArray, setShoppingCartItemArray}}>
            <DashboardItemLayout>
                <ShoppingCart/>
                <h1>Online Shop</h1>
                <ShoppingItemsOverview/>
            </DashboardItemLayout>
        </ShoppingContext.Provider>
    )
}

export default OnlineShop