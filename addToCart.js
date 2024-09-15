import { getCartProductFromLS } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCart";

getCartProductFromLS();

export const addToCart = (event, id, stock) =>{

    let arrLocalStorageProduct = getCartProductFromLS();
    
    
    const currentProElem = document.querySelector(`#card${id}`)

    let quantity = currentProElem.querySelector(".number").innerText;
    
    let price = currentProElem.querySelector(".curPrice").innerText;
    price = price.replace("Rs", "")

    let existingProd = arrLocalStorageProduct.find( (curProd) => curProd.id === id);

    if(existingProd && quantity > 0){


        quantity = Number(existingProd.quantity) + Number(quantity);
        price = Number(price * quantity);

        let updateCart = {id, quantity, price}
        updateCart = arrLocalStorageProduct.map((curProd)=>{
            return curProd.id === id ? updateCart : curProd ;
        });
        // console.log(updateCart);
        
        localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

        showToast("add", id)
    }

    if(existingProd){
        return false
    };

    price = Number(price * quantity);
    quantity = Number(quantity)

    arrLocalStorageProduct.push({id, quantity, price});

    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));


    updateCartValue(arrLocalStorageProduct);

    showToast("add", id)
}