const string = document
  .getElementsByTagName("span")[0]
  .innerText.toLowerCase()
  .split("");
let counter = 0;
for (let i = 0; i < string.length - 1; i++) {
  if (string[i] === "x" && string[i + 1] === "y") {
    ++counter;
  }
}
document.getElementsByTagName(
  "p"
)[0].innerText = `Couple "xy" met ${counter} times`;
