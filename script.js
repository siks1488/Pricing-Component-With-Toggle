const monButt = document.querySelector(".mo");
const annButt = document.querySelector(".an");
const price1 = document.querySelector(".price1");
const price2 = document.querySelector(".price2");
const price3 = document.querySelector(".price3");

const ann = function(){
    price1.textContent = "$99.99";
    price2.textContent = "$119.99";
    price3.textContent = "$109.99";
    annButt.classList.add("hidden");
}
const mon = function(){
    price1.textContent = "$19.99";
    price2.textContent = "$39.99";
    price3.textContent = "$24.99";
    annButt.classList.remove("hidden");
}

annButt.addEventListener("click",ann);
monButt.addEventListener("click",mon);