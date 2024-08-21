function navLinks() {
  const wrap = document.querySelector(".wrap");
  const hamburger = document.querySelector(".hamburger");
  const close = document.querySelector(".close");
  const navBar = document.querySelector(".nav_bar")

  wrap.addEventListener("click", () => {
    navBar.classList.toggle ("nav-active");

    close.classList.toggle("close-active");
    hamburger.classList.toggle("hamburger-inactive")

  
  })


  
}
  
navLinks();
