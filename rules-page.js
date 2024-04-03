function toggleSlideMenu() {
    var slideMenu = document.getElementById('slideMenu');
    if (slideMenu.style.right === "-25vw") {
      slideMenu.style.right = "0";
      // document.querySelector("body").classList.add("body-no-scroll")
    } else {
      slideMenu.style.right = "-25vw";
      // document.querySelector("body").classList.remove("body-no-scroll")
    }
  }