import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

productsMount(document.getElementById("dev-products"));
cartMount(document.getElementById("dev-carts"));

console.log("Container !");
