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

    const [shoppingCartItemArray, setShoppingCartItemArray] = useState(myCartItems ? myCartItems : [])



    return (

        <DashboardItemLayout>
            <ShoppingContext.Provider value={{ShoppingData, shoppingCartItemArray, setShoppingCartItemArray}}>
                <ShoppingCart/>
                <h1>Online Shop</h1>
                <ShoppingItemsOverview/>
            </ShoppingContext.Provider>
        </DashboardItemLayout>

    )
}

export default OnlineShop