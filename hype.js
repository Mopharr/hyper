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

let totalValue, result;
function calcHyper(
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
  result = totalValue / 9.99;
  let data = {
    bioData: {
      fullname: fullname.value,
      age: age.value,
      Gender: sex.value,
      date: date.value,
    },
    result: result,
  };
  localStorage.setItem("result", JSON.stringify(data));
  return result;
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  calcHyper(
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
  window.location("/result.html")
});
