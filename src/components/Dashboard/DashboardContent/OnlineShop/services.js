import {checkLocalStorage} from "../../../../lib/FormHandler.js";

export function addNewItemsToCart(newCartItem, callback) {
    const storageResponse = callback();

    const cartItemsString = JSON.stringify(newCartItem)
    if (!storageResponse) {
        localStorage.setItem("cart", JSON.stringify([newCartItem]))
    } else {
        storageResponse.push(newCartItem)
        localStorage.setItem("cart", JSON.stringify(storageResponse))
    }

}

export function checkCartItemExists(cart, newItemId) {

    let itemExists = false;
    cart?.forEach((item) => {
        itemExists = item.productId === newItemId;

    })

    return itemExists


}

export function removeItemFromCart(selectedItem) {
    const allCartItems = checkLocalStorage("cart");
    const newCartItemList = allCartItems.filter((item) => item.productId !== selectedItem)

    localStorage.setItem("cart", JSON.stringify(newCartItemList))
}


export function updateCartListEntry(selectedItem, updatedValue, updatedName) {


    const allCartItems = checkLocalStorage("cart");
    const selectedCartItem = allCartItems.filter((item) => item.productId === selectedItem)

    const updatedCartItem = {...selectedCartItem[0], [updatedName]: updatedValue}
    const newArrayOfCartItems = [...selectedCartItem, updatedCartItem]

    localStorage.setItem("cart", JSON.stringify(newArrayOfCartItems))


}


export function checkNewItemBeforeAdding(item) {
    return !(item.size.length === 0 || item.quantity == null);

}


export function calcTotalCartSum(shoppingCart) {
    let initialValue
    return shoppingCart?.reduce((accumulate, value) => {

        return initialValue = accumulate + value.price * value.quantity

    }, 0)
}