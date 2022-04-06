const btns = document.querySelectorAll(".btn-calculator");

btns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    btn.classList.add("active")
    setTimeout(() => {
      btn.classList.remove("active")
    }, 100);
  })
})
