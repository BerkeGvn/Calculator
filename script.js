const btnClear = document.querySelector(".clear");
const btnNumber = document.querySelectorAll(".number");
const btnOperator = document.querySelectorAll(".operator");
const btnEqual = document.querySelector(".equal");
let opScreen = document.querySelector(".op");
opScreen.textContent = "";

let isfalse = false;
let a = "";
let b = [];
let sum = 0;
for (let i = 0; i < btnNumber.length; i++) {
  btnNumber[i].addEventListener("click", function (e) {
    isfalse = false;
    isDisabled(e);
    opScreen.value += `${e.target.value}`;
    return (a += `${e.target.value}`);
  });
}
for (let j = 0; j < btnOperator.length; j++) {
  btnOperator[j].addEventListener("click", function (e) {
    isfalse = true;
    isDisabled();
    opScreen.value += ` ${e.target.value} `;
    return (a += ` ${e.target.value} `);
  });
}

btnEqual.addEventListener("click", function () {
  b = a.split(" ");
  divide(b);
  multiply(b);
  add(b);
  subtract(b);
  return (opScreen.value = a);
});

function add(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      sum = +arr[i - 1] + +arr[i + 1];
      if (sum.length >= 20) {
        sum = sum.toFixed(10);
      }
      arr = arr.splice(arr.indexOf(arr[i - 1]), 3, +sum);
    }
  }
  return (a = `${sum}`);
}
function subtract(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "-") {
      sum = arr[i - 1] - arr[i + 1];
      if (sum.length >= 20) {
        sum = sum.toFixed(10);
      }
      arr = arr.splice(arr.indexOf(arr[i - 1]), 3, sum);
    }
  }
  return (a = `${sum}`);
}
function divide(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "/") {
      sum = arr[i - 1] / arr[i + 1];
      if (sum.length >= 20) {
        sum = sum.toFixed(10);
      }
      arr = arr.splice(arr.indexOf(arr[i - 1]), 3, sum);
    }
  }
  return (a = `${sum}`);
}
function multiply(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*") {
      sum = arr[i - 1] * arr[i + 1];
      if (sum.length >= 20) {
        sum = sum.toFixed(10);
      }
      arr = arr.splice(arr.indexOf(arr[i - 1]), 3, sum);
    }
  }
  return (a = `${sum}`);
}

btnClear.addEventListener("click", function () {
  a = "";
  b = [];
  sum = 0;
  opScreen.value = "";
  return;
});
function isDisabled() {
  for (let j = 0; j < btnOperator.length; j++) {
    if (isfalse) {
      btnOperator[j].disabled = true;
      btnEqual.disabled = true;
    } else if (!isfalse) {
      btnOperator[j].disabled = false;
      btnEqual.disabled = false;
    }
  }
}

window.addEventListener("keydown", function (e) {
  console.log(e);
  if (Number(e.key) || e.key === "0") {
    isfalse = false;
    isDisabled();
    opScreen.value += `${e.key}`;
    return (a += `${e.key}`);
  }
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/") {
    if (!isfalse) {
      isfalse = true;
      isDisabled();
      opScreen.value += ` ${e.key} `;
      return (a += ` ${e.key} `);
    }
  }
  if (e.key === "Enter") {
    b = a.split(" ");
    divide(b);
    multiply(b);
    add(b);
    subtract(b);
    return (opScreen.value = a);
  } else {
    return;
  }
});
