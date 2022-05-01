let input = document.getElementById("screen");
let button = document.querySelectorAll("button");
let inputValue = "";
for (item of button) {
  item.addEventListener("click", (e) => {
    let buttonText = e.target.innerHTML;
    if (buttonText == "C") {
      inputValue = "";
      input.value = inputValue;
    } else if (buttonText === "x") {
      let currentVal = input.value;
      let currentVal1 = currentVal.slice(0, -1);
      inputValue = currentVal1;
      input.value = inputValue;
    } else if (buttonText == "=") {
      let result = eval(inputValue);
      input.value =result;
    } else {
      inputValue += buttonText;
      input.value = inputValue;
      let type = input.value;
      console.log(typeof type);
    }
  });
}
