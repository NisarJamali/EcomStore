let navmenu = document.querySelector(".navmenu");
let sidemenu = document.querySelector(".sidemenu");
let closebtn = document.querySelector(".close")

sidemenu.addEventListener("click", ()=>{
    navmenu.style.right = 0;
    sidemenu.style.right = "-200px";
})

closebtn.addEventListener("click",()=>{
    navmenu.style.right = "-300px";
    sidemenu.style.right = "20px";
})


// import products from "./api/products.json"
import allProducts from "./api/allProducts.json"
import { fecthQuantityFromCartLS } from "./fecthQuantityFromCartLS";
import { getCartProductFromLS } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProdFromCart } from "./removeProdFromCart";
import { updateCartProductTotal } from "./updateCartProductTotal";

let cartProducts = getCartProductFromLS();

let filterProducts = allProducts.filter((curProd)=>{
    return cartProducts.some((curElem) => curElem.id === curProd.id);
})

// console.log(filterProducts);



// adding cart items to on page 

const cartElem = document.querySelector(".cartItems");
const templateContainer = document.querySelector(".cartItemsTemp");

const showCartProducts = () =>{
    filterProducts.forEach((curProd)=>{
        const {id, name, category , price, image, stock} = curProd;

        const productClone = document.importNode(templateContainer.content, true)

        const LSActualData = fecthQuantityFromCartLS(id, price);


        productClone.querySelector(".proName").innerText = name;
        productClone.querySelector(".pImage").src = image;
        productClone.querySelector(".category").innerText = category;
        productClone.querySelector(".curPrice").innerText = `Rs ${LSActualData.price.toFixed(2)}`;
        productClone.querySelector(".number").innerText = LSActualData.quantity;
        productClone.querySelector("#cardID").setAttribute("id", `card${id}`);

        
        productClone.querySelector(".proAmount").addEventListener("click", (event)=>{
            incrementDecrement(event, id, stock, price);
        });


        productClone.querySelector(".removeFromCart").addEventListener("click" , ()=>{
            removeProdFromCart(id)
        })

        cartElem.append(productClone)

    })
}


showCartProducts();


updateCartProductTotal();