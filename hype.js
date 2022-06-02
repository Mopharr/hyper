let name = document.getElementById("fullname").value;
let dob = document.getElementById("dob").value;
let age = document.getElementById("age").value;

let headache = document.getElementById("headache").value;
let vision = document.getElementById("vision").value;
let chest = document.getElementById("chest").value;
let heartbeat = document.getElementById("heartbeat").value;
let dizzy = document.getElementById("dizzy").value;
let sleep = document.getElementById("sleep").value;

let btn = document.getElementById("result-btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
  console.log("dob", dob);
});
