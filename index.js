const subBtn1 = document.getElementById("sub1");
const addBtn1 = document.getElementById("add1");
const subBtn2 = document.getElementById("sub2");
const addBtn2 = document.getElementById("add2");
const inputNum1 = document.getElementById("input-num1");
const inputNum2 = document.getElementById("input-num2");
let value1 = +inputNum1.getAttribute("value");
let value2 = +inputNum2.getAttribute("value");

subBtn1.addEventListener("click", () => {
  if (value1 > 0) {
    value1--;
    inputNum1.setAttribute("value", value1);
  }
});
addBtn1.addEventListener("click", () => {
  value1++;
  inputNum1.setAttribute("value", value1);
});
subBtn2.addEventListener("click", () => {
  if (value2 > 0) {
    value2--;
    inputNum2.setAttribute("value", value2);
  }
});
addBtn2.addEventListener("click", () => {
  value2++;
  inputNum2.setAttribute("value", value2);
});
