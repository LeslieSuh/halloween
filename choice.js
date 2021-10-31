var choices = [];
function picker() {
  let userChoices = document.getElementById("userinput").value;

  if (document.getElementById("userinput").value === "") {
    return false;
  } else {
    choices.push(userChoices + "</br>");
    document.getElementById("selection").innerHTML = choices.join("");
    document.getElementById("userinput").value = "";
  }
}
let userInput = document.getElementById("userinput");
userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("addChoice").click();
  }
});
function winner() {
  let random = Math.floor(Math.random() * choices.length);
  document.getElementById("winner").innerHTML = choices[random];
}
