let img = document.querySelector('.img');
function bags(bag){
    img.src = bag;
}
const menu = document.getElementById("menu");
menu.addEventListener("mouseover", (event) => {
    if (event.target.tagName === "LI" || event.target.tagName === "A") {
        event.target.style.color = "#ff6600"; 
        event.target.style.fontWeight = "bold"; 
    }
});
menu.addEventListener("mouseout", (event) => {
    if (event.target.tagName === "LI" || event.target.tagName === "A") {
        event.target.style.color = ""; 
        event.target.style.fontWeight = "";
    }
});
const allProductsLink = document.getElementById("all-products-link");
allProductsLink.addEventListener("mouseover", () => {
    allProductsLink.style.color = "#ff6600";
    allProductsLink.style.fontSize = "1.2em";
    allProductsLink.style.textDecoration = "none";
});
allProductsLink.addEventListener("mouseout", () => {
    allProductsLink.style.color = "";
    allProductsLink.style.fontSize = "";
    allProductsLink.style.textDecoration = "";
});