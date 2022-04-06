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
let secondNum = '';

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
  number = parseInt(withoutComma);
  return number.toLocaleString('en-US');
}

one.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = 1;
    total = 1;
  } else {
    total = total + '1';
    total = addComma(total);
    totalNum.innerText = total;
  }
})

two.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = 2;
    total = 2;
  } else {
    total = total + '2';
    total = addComma(total);
    totalNum.innerText = total;
  }
})

three.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = 3;
    total = 3;
  } else {
    total = total + '3';
    total = addComma(total);
    totalNum.innerText = total;
  }
})

four.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = 4;
    total = 4;
  } else {
    total = total + '4';
    total = addComma(total);
    totalNum.innerText = total;
  }
})

five.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = 5;
    total = 5;
  } else {
    total = total + '5';
    total = addComma(total);
    totalNum.innerText = total;
  }
})

six.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = 6;
    total = 6;
  } else {
    total = total + '6';
    total = addComma(total);
    totalNum.innerText = total;
  }
})

seven.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = 7;
    total = 7;
  } else {
    total = total + '7';
    total = addComma(total);
    totalNum.innerText = total;
  }
})

eight.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = 8;
    total = 8;
  } else {
    total = total + '8';
    total = addComma(total);
    totalNum.innerText = total;
  }
})

nine.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = 9;
    total = 9;
  } else {
    total = total + '9';
    total = addComma(total);
    totalNum.innerText = total;
  }
})

zero.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = 0;
  } else {
    total = total + '0';
    totalNum.innerText = total;
  }
})

decimal.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = '0.';
    total = '0.';
  } else {
    total = total + '.';
    total = addComma(total);
    totalNum.innerText = total;
  }
})

del.addEventListener("click", (event) => {
  event.preventDefault();
  if (totalNum.innerText === '0') {
    totalNum.innerText = '0';
    total = '0';
  } else {
    total = total.slice(0, -1);
    if (total === '') {
      total = '0';
    }
    total = addComma(total);
    totalNum.innerText = total;
  }
})
