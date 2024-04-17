function hamburgerMenu() {
    const menu = document.getElementById('menu');
    const isChecked = document.querySelector('.hamburger-menu input[type="checkbox"]').checked;
    
    if (isChecked) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }

    window.addEventListener("resize", () => {
        menu.style.display = "flex"
    })
  }

