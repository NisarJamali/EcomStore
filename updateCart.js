const cartValue = document.querySelector(".ri-shopping-cart-2-fill")

export const updateCartValue = (productValue) => {
    return cartValue.innerText = `\t\t${productValue.length}`;
}