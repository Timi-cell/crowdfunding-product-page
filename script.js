let menuBar = document.getElementById("openMenu");

menuBar.addEventListener("click", () => {
  if (menuBar.getAttribute("src") === "./images/icon-hamburger.svg") {
    menuBar.setAttribute("src", "./images/icon-close-menu.svg");
    document.getElementById("modal").style.display = "block";
    document.getElementById("mobileLinks").style.display = "block";
  } else {
    menuBar.setAttribute("src", "./images/icon-hamburger.svg");
    document.getElementById("modal").style.display = "none";
    document.getElementById("mobileLinks").style.display = "none";
  }
});

window.addEventListener("click", (event) => {
  if (
    event.target === document.getElementById("modal") ||
    event.target === document.getElementsByTagName("header")[0]
  ) {
    menuBar.setAttribute("src", "./images/icon-hamburger.svg");
    document.getElementById("modal").style.display = "none";
    document.getElementById("mobileLinks").style.display = "none";
  }
});

