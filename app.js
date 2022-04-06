const btns = document.querySelectorAll(".btn-calculator");
const numBtns = document.querySelectorAll(".btn-num");
const opBtns = document.querySelectorAll(".btn-op");
const totalNum = document.querySelector(".total");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");
const firstToggle = document.querySelector(".first_toggle");
const secondToggle = document.querySelector(".second_toggle");
const thirdToggle = document.querySelector(".third_toggle");
const body = document.querySelector("body");
let total = "";
let firstNum = "";
let secondNum = "";
let formattedAmount = "";
let sign = "";
let signTwo = "";
let check = [];

firstToggle.addEventListener("click", (event) => {
  body.classList.remove("second-theme");
  body.classList.remove("third-theme");
})

secondToggle.addEventListener("click", (event) => {
  body.classList.remove("third-theme");
  body.classList.add("second-theme");
})

thirdToggle.addEventListener("click", (event) => {
  body.classList.remove("second-theme");
  body.classList.add("third-theme");
})

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    btn.classList.add("active");
    setTimeout(() => {
      btn.classList.remove("active");
    }, 100);
  })
})

const addComma = (num) => {
  withoutComma = num.replace(/,/g, "");
  const number = Number(withoutComma);
  return number.toLocaleString("en-US", { maximumFractionDigits: 15 });
}

const checkComma = (string) => {
  let testString = string;
  if (/[,]/.test(string)) {
    testString = string.replace(/,/g, "");
  }
  return testString;
}

const formula = (num1, num2, op) => {
  let number = "";
  if (op === "+") {
    number = num1 + num2;
  } else if (op === "-") {
    number = num1 - num2;
  } else if (op === "x") {
    number = num1 * num2;
  } else if (op === "/") {
    number = num1 / num2;
  }
  return number.toLocaleString("en-US", { maximumFractionDigits: 15 });
}

const calculate = (op) => {
  if (firstNum === "") {
    firstNum = total;
    totalNum.innerText = total;
    total = "0";
  } else if (firstNum !== "" && secondNum === "") {
    secondNum = total;
    firstNum = checkComma(firstNum);
    secondNum = checkComma(secondNum);
    const first = Number(firstNum);
    const second = Number(secondNum);
    formattedAmount = formula(first, second, op);
    if (formattedAmount.length >= 15) {
      if (/[,]/.test(formattedAmount)) {
        formattedAmount = formattedAmount.replace(/,/g, "");
      }
      if (Number(formattedAmount) > 1000000000000) {
        firstNum = formattedAmount
        totalNum.innerText = "Too large a number";
      } else {
        formattedAmount = formattedAmount.slice(0, 16);
        formattedAmount = addComma(formattedAmount);
        if (formattedAmount.slice(-1) === ".") {
          formattedAmount = formattedAmount.slice(0, -1);
        };
        firstNum = formattedAmount;
        totalNum.innerText = formattedAmount;
      }
    } else {
      firstNum = formattedAmount;
      totalNum.innerText = formattedAmount;
    }
    secondNum = "";
    total= "";
  }
}

opBtns.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    event.preventDefault();
    check.push("sign");
    if (check.at(-1) === "sign" && check.at(-2) === "sign" && check.includes("num")) {
      signTwo = event.currentTarget.innerText;
      firstNum = totalNum.innerText;
    } else if (check.at(-2) === "del" && check.includes("num")) {
      sign = event.currentTarget.innerText;
      calculate(sign);
    } else if (sign === "" && check.includes("num")) {
      sign = event.currentTarget.innerText;
      calculate(sign);
    } else if (sign !== "" && signTwo === "" && check.includes("num")) {
      signTwo = event.currentTarget.innerText;
      calculate(sign);
    } else if (sign !== "" && signTwo !== "" && check.includes("num")) {
      sign = signTwo;
      signTwo = event.currentTarget.innerText;
      calculate(sign);
    }
  })
})

equal.addEventListener("click", (event) => {
  event.preventDefault();
  if (signTwo === "") {
    calculate(sign);
  } else {
    calculate(signTwo);
  }
})

numBtns.forEach((number) => {
  number.addEventListener("click", (event) => {
    event.preventDefault();
    if (totalNum.innerText === "0") {
      totalNum.innerText = event.currentTarget.innerText;
      total = event.currentTarget.innerText;
    } else if (total.length <= 15 || total.length === undefined) {
      total = total + event.currentTarget.innerText;
      if (!(/[\.]/.test(total))) {
        total = addComma(total);
      }
      totalNum.innerText = total;
    }
    check.push("num");
  })
})

decimal.addEventListener("click", (event) => {
  event.preventDefault();
  if ((/[\.]/.test(total))) {
    total = total;
    totalNum.innerText = total;
  } else if (totalNum.innerText === "0" || total === "") {
    totalNum.innerText = "0.";
    total = "0.";
  } else if (total.length <= 15 || total.length === undefined) {
    total = total + ".";
    totalNum.innerText = total;
  }
})

del.addEventListener("click", (event) => {
  event.preventDefault();
  check.push("del");
  if (totalNum.innerText === "0") {
    totalNum.innerText = "0";
    total = "0";
  } else if (total.length === 1 || total.length === undefined) {
    totalNum.innerText = "0";
    total = "0";
  } else if (firstNum === "") {
    firstNum = totalNum.innerText;
    firstNum = firstNum.replace(/,/g, "");
    firstNum = firstNum.slice(0, -1);
    if (total === "-") {
      firstNum = "0";
      totalNum.innerText = firstNum;
    } else {
      if (!(/[\.]/.test(firstNum))) {
        firstNum = addComma(firstNum);
      }
      totalNum.innerText = firstNum;
      secondNum = "";
      total = "";
      sign = "";
      signTwo = "";
    }
  } else if (firstNum !== "") {
    firstNum = totalNum.innerText;
    firstNum = firstNum.replace(/,/g, "");
    console.log(firstNum);
    firstNum = firstNum.slice(0, -1);
    console.log(firstNum);
    if (total === "-") {
      firstNum = "0";
      totalNum.innerText = firstNum;
    } else {
      if (!(/[\.]/.test(firstNum))) {
        firstNum = addComma(firstNum);
      }
      totalNum.innerText = firstNum;
      secondNum = "";
      total = "";
      sign = "";
      signTwo = "";
    }
  }
})

reset.addEventListener("click", (event) => {
  event.preventDefault;
  totalNum.innerText = "0";
  total = "0";
  firstNum = "";
  secondNum = "";
  formattedAmount = "";
  sign = "";
  signTwo = "";
  check = [];
})
