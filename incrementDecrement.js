import { getCartProductFromLS } from "./getCartProducts";
import { updateCartProductTotal } from "./updateCartProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
    const currentCardElemnt = document.querySelector(`#card${id}`)
    
    const productQuantity = currentCardElemnt.querySelector(".number");
    const productPrice = currentCardElemnt.querySelector(".curPrice")

    let quantity = 1;

    let localStoragePrice = 0;

    let localCartProduct = getCartProductFromLS();

    let existingProd = localCartProduct.find((curProd) => curProd.id === id);

    if(existingProd){
        quantity = existingProd.quantity;
        localStoragePrice = existingProd.price;
    }else{
        localStoragePrice = price;
        price = price;
    }

    if(event.target.className === "increment"){
        if(quantity < stock){
            quantity += 1;
        }else if(quantity == stock){
            quantity = stock;
            localStoragePrice =  price * stock;
        }
    };
    if(event.target.className === "decrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    };

    localStoragePrice = price * quantity;
    localStoragePrice = Number(localStoragePrice.toFixed(2));

    let updateCart = {id, quantity, price: localStoragePrice}
        updateCart = localCartProduct.map((curProd)=>{
            return curProd.id === id ? updateCart : curProd ;
        });
    // console.log(updateCart);
        
    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    productQuantity.innerText = quantity
    productPrice.innerText = `Rs ${localStoragePrice}`;

    updateCartProductTotal();
}