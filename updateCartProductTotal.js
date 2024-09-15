import { getCartProductFromLS } from "./getCartProducts";

export const updateCartProductTotal = () => {

    let productSubTotal = document.querySelector(".subTotalAmount");
    let prodcuFinalTotal = document.querySelector(".finalTotalAmount")
    let taxAmount = document.querySelector(".taxAmount")

    let localCartProduct = getCartProductFromLS();
    let initialValue = 0;
    let totalProductPrice = localCartProduct.reduce((accum, curElem) => {
        let productPrice = parseInt(curElem.price) || 0;
        return accum + productPrice;
    }, initialValue)

    productSubTotal.textContent = `Rs ${totalProductPrice}`;

    taxAmount.textContent = `Rs ${100}`

    prodcuFinalTotal.textContent = `Rs ${totalProductPrice + 100}`;

}