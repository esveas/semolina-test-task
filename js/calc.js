const number = document.getElementById("number");
const result = document.getElementById("result");
const nav = document.getElementById("nav");
let numberValue = document.getElementById("number").value.replace(/\D/g, "");

function check() {
  if (event.keyCode < 48 || event.keyCode > 57) event.returnValue = false;
}

number.onchange = function() {
  numberValue = number.value.replace(/\D/g, "");
};

nav.onclick = function(event) {
  let id = event.target.id;
  if (id == "sqr") {
    result.innerText = Math.pow(numberValue, 2);
  } else if (id == "sqrt") {
    result.innerText = Math.sqrt(numberValue);
  } else if (id == "ln") {
    result.innerText = Math.log(numberValue);
  }
};
