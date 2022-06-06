let fullname = document.getElementById("fullname");
let dob = document.getElementById("date");
let age = document.getElementById("age");
let sex = document.getElementById("sex");

let headache = document.getElementById("headache");
let vision = document.getElementById("vision");
let chest = document.getElementById("chest");
let heartbeat = document.getElementById("heartbeat");
let dizzy = document.getElementById("dizzy");
let sleep = document.getElementById("sleep");
let stomach = document.getElementById("stomach");
let nose = document.getElementById("nose");
let urine = document.getElementById("urine");
let confusion = document.getElementById("confusion");

let btn = document.getElementById("result-btn");

let totalValue;
async function calcHyper(
  _headache,
  _vision,
  _chest,
  _heartbeat,
  _dizzy,
  _sleep,
  _stomach,
  _nose,
  _urine,
  _confusion
) {
  totalValue =
    _headache +
    _vision +
    _chest +
    _heartbeat +
    _dizzy +
    _sleep +
    _stomach +
    _nose +
    _urine +
    _confusion;
  let result = totalValue / 9.99;
  let payload = {
    age: age.value,
    dob: date.value,
    name: fullname.value,
    status: result,
  };
  let url = "https://hyper-test.herokuapp.com/api/post_user";
  await fetch(url, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (res) {
      console.log(res.data);
    });
  localStorage.setItem("result", JSON.stringify(payload));
  return result;
}
btn.addEventListener("click", async function (e) {
  e.preventDefault();
  console.log("Testing....");
  await calcHyper(
    parseFloat(headache.value),
    parseFloat(vision.value),
    parseFloat(chest.value),
    parseFloat(heartbeat.value),
    parseFloat(dizzy.value),
    parseFloat(sleep.value),
    parseFloat(stomach.value),
    parseFloat(nose.value),
    parseFloat(urine.value),
    parseFloat(confusion.value)
  );
  console.log("Testing....");
  window.location = "/result.html";
});
