const image = ["/img/building.png", "/img/building2.png", "/img/building3.png"]
const imageDiv = document.querySelector(".wrapper")
let currIdx = 0

function changeImage() {
    currIdx = (currIdx + 1) % image.length;
    imageDiv.style.backgroundImage = `url("${image[currIdx]}")`;
}

setInterval(changeImage, 3000)


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