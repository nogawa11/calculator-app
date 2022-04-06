const btns = document.querySelectorAll(".btn-calculator");
const totalNum = document.querySelector(".total");
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const times = document.querySelector(".times");
const divide = document.querySelector(".divide");
const decimal = document.querySelector(".decimal");
const equal = document.querySelector(".equal");
let total = '';
let firstNum = '';
let secondNum = '';
let totalAmount = '';
let formattedAmount = '';
let sign = '';
let signTwo = '';
const numbers = [one, two, three, four, five, six, seven, eight, nine, zero]
const operators = [plus, minus, times, divide]

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
  withoutComma = num.replace(/,/g, '');
  number = Number(withoutComma);
  return number.toLocaleString('en-US', { maximumFractionDigits: 15 });
}

const checkComma = (string) => {
  let testString = string
  if (/[,]/.test(string)) {
    testString = string.replace(/,/g, '');
  }
  return testString;
}

const formula = (num1, num2, op) => {
  let number = '';
  if (op === '+') {
    number = num1 + num2;
  } else if (op === '-') {
    number = num1 - num2;
  } else if (op === 'x') {
    number = num1 * num2;
  } else if (op === '/') {
    number = num1 / num2;
  }
  return number;
}

const calculate = (op) => {
  if (firstNum === '') {
    firstNum = total
    totalNum.innerText = 0;
    total = '0'
  } else if (firstNum !== '' && secondNum === '') {
    secondNum = total
    firstNum = checkComma(firstNum);
    secondNum = checkComma(secondNum);
    const first = Number(firstNum);
    const second = Number(secondNum);
    totalAmount = formula(first, second, op);
    formattedAmount = totalAmount.toLocaleString('en-US', { maximumFractionDigits: 15 });
    if (formattedAmount.length > 15) {
      if (/[,]/.test(formattedAmount)) {
        formattedAmount = formattedAmount.replace(/,/g, '');
      }
      formattedAmount = formattedAmount.slice(0, 16);
      formattedAmount = formattedAmount.toLocaleString('en-US', { maximumFractionDigits: 15 });
      if (formattedAmount.slice(-1) === '.') {
        formattedAmount = formattedAmount.slice(0, -1);
      };
    }
    totalNum.innerText = formattedAmount;
    firstNum = formattedAmount
    secondNum = '';
    total='';
  }
}

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    event.preventDefault();
    if (sign === '') {
      sign = event.currentTarget.innerText;
      calculate(sign);
    } else if (sign !== '' && signTwo === '') {
      signTwo = event.currentTarget.innerText;
      calculate(sign);
    } else if (sign !== '' && signTwo !== '') {
      sign = signTwo;
      signTwo = event.currentTarget.innerText;
      calculate(sign);
    }
  })
})

equal.addEventListener("click", (event) => {
  event.preventDefault();
  if (signTwo === '') {
    calculate(sign);
  } else {
    calculate(signTwo);
  }
})

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    event.preventDefault();
    if (totalNum.innerText === '0') {
      totalNum.innerText = event.currentTarget.innerText;
      total = event.currentTarget.innerText;
    } else if (total.length <= 15 || total.length === undefined) {
      total = total + event.currentTarget.innerText;
      if (!(/[\.]/.test(total))) {
        total = addComma(total);
      }
      totalNum.innerText = total;
    }
  })
})

decimal.addEventListener("click", (event) => {
  event.preventDefault();
  if ((/[\.]/.test(total))) {
    total = total;
    totalNum.innerText = total;
  } else if (totalNum.innerText === '0' || total === '') {
    totalNum.innerText = '0.';
    total = '0.';
  } else if (total.length <= 15 || total.length === undefined) {
    total = total + '.';
    totalNum.innerText = total;
  }
})

del.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = '0';
    total = '0';
  } else if (total.length === 1 || total.length === undefined) {
    totalNum.innerText = '0';
    total = '0';
  } else {
    firstNum = firstNum.slice(0, -1);
    if (!(/[\.]/.test(firstNum))) {
      firstNum = addComma(firstNum);
    }
    totalNum.innerText = firstNum;
  }
})

reset.addEventListener("click", (event) => {
  event.preventDefault;
  totalNum.innerText = '0'
  total = '0'
  firstNum = '';
  secondNum = '';
  totalAmount = '';
  formattedAmount = '';
  sign = '';
  signTwo = '';
})
