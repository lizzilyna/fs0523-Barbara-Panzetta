
  window.addEventListener("scroll", function() {
    let header = document.querySelector(".header-container");
    let heroHeight = document.querySelector(".hero").offsetHeight; 

    if (window.scrollY > heroHeight) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  window.addEventListener("scroll", function() {
    let button = document.querySelector(".topbutton");
    let heroHeight = document.querySelector(".hero").offsetHeight; 

    if (window.scrollY > heroHeight) {
      button.classList.add("scrolled");
    } else {
      button.classList.remove("scrolled");
    }
  });
