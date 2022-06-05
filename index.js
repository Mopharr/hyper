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
const hyper = document.getElementById("lll");
const username = document.getElementById("username");
const display = document.getElementById("disresult");
display.innerHTML = `${JSON.parse(result).status.toFixed(2)} %`
username.innerHTML = `${JSON.parse(result).name}`

if(JSON.parse(result).status <= 0.33) {
  hyper.innerHTML = `(YOU ARE HYPERTHETIC)`
} else if(JSON.parse(result).status <= 0.66 && JSON.parse(result).status > 0.33) {
  hyper.innerHTML = `(NORMAL)`
} else {
  hyper.innerHTML = `(HIGH)`
}
