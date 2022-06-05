const menu = document.querySelector("#hamburger");
const menuC = document.querySelector("#close");
const menuLinks = document.querySelector(".navItem");

const mobileMenu = () => {
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);
menuC.addEventListener("click", mobileMenu);

const close = () => {
  menuLinks.classList.toggle("active");
};

const result = localStorage.getItem("result");
const display = document.getElementById("disresult");
display.innerHTML = `${JSON.parse(result).status.toFixed(2)} %`
