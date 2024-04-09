function hamburgerMenu() {
  const menu = document.getElementById("menu");
  const contentElements = document.querySelectorAll('.content');
  const isChecked = document.querySelector('.hamburger-menu input[type="checkbox"]').checked;

  if (isChecked) {
      menu.style.display = "flex";
      contentElements.forEach(function(element) {
          element.style.position = 'relative';
          element.style.top = '22vw'; // Adjust as per your menu height and additional space
      });
  } else {
      menu.style.display = "none";
      contentElements.forEach(function(element) {
          element.style.position = 'static';
          element.style.top = 'auto';
      });
  }
}

