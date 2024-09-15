import { addToCart } from "./addToCart";
import { homeQuantityToggle } from "./homequantitytoggle";

const cardContainer = document.querySelector(".proCardContainer");
const temContainer = document.querySelector(".productTemplate")


export const showProduct = (products)=>{
    if(!products){
        return false;
    }

    products.forEach((curProd) => {
        const {id, name, category , price, stock, description, image} = curProd;

        const productClone = document.importNode(temContainer.content, true)

        productClone.querySelector(".proName").innerText = name;
        productClone.querySelector(".pImage").src = image;
        productClone.querySelector(".category").innerText = category;
        productClone.querySelector(".proDescribe").innerText = description;
        productClone.querySelector(".curPrice").innerText = `Rs ${price}`;
        productClone.querySelector(".prePrice").innerText = `Rs ${price * 2}`;
        productClone.querySelector(".stockQuantity").innerText = stock;
        productClone.querySelector("#cardID").setAttribute("id", `card${id}`);

        productClone.querySelector(".proAmount").addEventListener("click", (event)=>{
            homeQuantityToggle(event, id, stock);
        });

        productClone.querySelector(".addToCart").addEventListener("click", (event)=>{
            addToCart(event, id, stock);
        });
        
        cardContainer.append(productClone);
    });
};