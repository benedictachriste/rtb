const image = ["/img/building.jpg", "/img/building2.png", "/img/building3.png"]
const imageDiv = document.querySelector(".wrapper")
let currIdx = 0

function changeImage() {
    currIdx = (currIdx + 1) % image.length;
    imageDiv.style.backgroundImage = `url("${image[currIdx]}")`;
}

setInterval(changeImage, 3000)