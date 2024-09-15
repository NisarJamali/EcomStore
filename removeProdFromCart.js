import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const removeProdFromCart = (id)=>{
    let cartProducts = getCartProductFromLS();
    cartProducts = cartProducts.filter((curProd) => curProd.id !== id);

    localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));


    let removeDiv = document.querySelector(`#card${id}`);

    if(removeDiv){
        removeDiv.remove();

        showToast("delete", id)
    }

    updateCartValue(cartProducts);
    updateCartProductTotal();
}