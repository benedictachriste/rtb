let slideMenu = document.getElementById("slideMenu")
let notifIcon = document.querySelector(".notif-icon")
notifIcon.addEventListener("click", function() {
  if (slideMenu.style.right != "0px") {
    slideMenu.style.right = "0"
    document.querySelector("body").classList.add("body-no-scroll")
  } else {
    slideMenu.style.right = "-25vw"
    document.querySelector("body").classList.remove("body-no-scroll")
  }
})