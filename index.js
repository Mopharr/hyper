const menu = document.querySelector("#hamburger");
const menuC = document.querySelector("#close");
const menuLinks = document.querySelector(".navItem");
const process = document.querySelector("#process");
const submit = document.querySelector("#submit");
function processing() {
  process.style.display = "block";
  submit.style.display = "none";
}
function notProcessing() {
  process.style.display = "none";
  submit.style.display = "block";
}

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
const user = document.getElementById("user");
const display = document.getElementById("disresult");
display.innerHTML = `${JSON.parse(result).status.toFixed(2)} %`;
username.innerHTML = `${JSON.parse(result).name}`;
user.innerHTML = `${JSON.parse(result).name}`;
const rec = document.getElementById("recco");

const hypo = [
  "Decreased Dietary Salt (Sodium) Intake",
  " Increased Dietary Potassium intake",
  "Exercise Regularly",
  "Weight Loss",
  "Eat a Healthy Diet",
  "Smoking Cessation",
  "Reducing Alcohol Consumption",
  "Relaxation Therapy",
  " Reduce Stress",
  "Monitor Blood Pressure Regularly",
];
const hpr = [
  'Eat more salt (increase sodium intake)',
  'Drink more water and stay hydrated',
  'Do not skip meals • Wear compression stockings',
  'Avoid Sudden position changes',
  ' Check your blood sugar level regularly',
  'Avoid alcoholic beverages'
]
const acc = [
  "Try maintain your health Status"
];



if (JSON.parse(result).status <= 0.33) {
  hyper.innerHTML = `(You are Hypotensive)`;
   hpr.forEach((recc) => {
     let li = document.createElement("li");
     li.innerText = recc;
     rec.appendChild(li);
   });

} else if (
  JSON.parse(result).status <= 0.66 &&
  JSON.parse(result).status > 0.33
) {
  hyper.innerHTML = `(Your BP rate is Accurate)`;
  acc.forEach((recc) => {
    let li = document.createElement("li");
    li.innerText = recc;
    rec.appendChild(li);
  });
} else {
  hyper.innerHTML = `(You are Hypertensive)`;
   hypo.forEach((recc) => { 
     let li = document.createElement("li");
  li.innerText = recc;
  rec.appendChild(li);
   });
}
