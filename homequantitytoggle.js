export const homeQuantityToggle = (event, id, stock) =>{
    const currentCardElemnt = document.querySelector(`#card${id}`)
    
    const productQuantity = currentCardElemnt.querySelector(".number");

    let quantity = parseInt( productQuantity.getAttribute("dataQuantity")) || 1;

    if(event.target.className === "increment"){
        if(quantity < stock){
            quantity += 1;
        }else if(quantity == stock){
            quantity = stock;
        }
    };
    if(event.target.className === "decrement"){
        if(quantity > 1){
            quantity -= 1;
        }
    };

    productQuantity.innerText = quantity;
    productQuantity.setAttribute("dataQuantity", quantity);
    return quantity;

}