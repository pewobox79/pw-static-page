import {checkLocalStorage} from "../../../../lib/FormHandler.js";

export function addNewItemsToCart(newCartItem, callback) {
    const storageResponse = callback();
    console.log("storage response", storageResponse)
    console.log(newCartItem)
    const cartItemsString = JSON.stringify(newCartItem)
    if (!storageResponse) {
        localStorage.setItem("cart", JSON.stringify([newCartItem]))
    } else {
        storageResponse.push(newCartItem)
        localStorage.setItem("cart", JSON.stringify(storageResponse))
    }
    console.log("storage cart: ", storageResponse)
    console.log(newCartItem, "add to cart")
}

export function checkCartItemExists(cart, newItemId) {
    console.log(cart)
    let itemExists = false;
    cart?.forEach((item) => {
        itemExists = item.productId === newItemId;

    })

    return itemExists


}

export function removeItemFromCart(selectedItem) {
    console.log(selectedItem)

    const allCartItems = checkLocalStorage("cart");
    console.log("old item list", allCartItems)
    const newCartItemList = allCartItems.filter((item) => item.productId !== selectedItem)
    console.log("new item list", newCartItemList)

    localStorage.setItem("cart", JSON.stringify(newCartItemList))
}


export function updateCartListEntry(selectedItem, updatedValue, updatedName) {
    const allCartItems = checkLocalStorage("cart");
    const selectedCartItem = allCartItems.filter((item) => item.productId === selectedItem)
    console.log("old item values", selectedCartItem)
    const updatedCartItem = {...selectedCartItem[0], [updatedName]: updatedValue}
    const newArrayOfCartItems = [...selectedCartItem, updatedCartItem]
    console.log("new data", updatedCartItem)

    localStorage.setItem("cart", JSON.stringify(newArrayOfCartItems))


}


export function checkNewItemBeforeAdding(item) {
    return !(item.size === "" || item.quantity === 0 || item.quantity === null);
}