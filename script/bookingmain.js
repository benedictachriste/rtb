// COPY JS NOTIF

let slideMenu = document.getElementById("slideMenu")
let notifIcon = document.querySelector(".notif-icon")
notifIcon.addEventListener("click", function() {
  if (slideMenu.style.right != "0px") {
    slideMenu.style.right = "0"
  } else {
    slideMenu.style.right = "-25vw"
  }
})

// BATAS JS NOTIF

function popup() {
    document.getElementById("overlay").style.display="block"
    document.querySelector("body").classList.add("body-no-scroll")
}

function closepopup(){
    document.getElementById("overlay").style.display="none"
    document.querySelector("body").classList.remove("body-no-scroll")
}


document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.getElementById("dropdown-toggle")
  const options = document.querySelectorAll(".dropdown-option")
  const toggleText = document.querySelector(".dropdown-text")

  toggle.addEventListener("click", function() {
    const dropdownOptions = document.getElementById("dropdown-options")
    dropdownOptions.style.display = dropdownOptions.style.display === "block" ? "none" : "block"
    toggleText.style.color = "#93969A"
  })

  options.forEach(function(option) {
    option.addEventListener("click", function() {
      toggleText.textContent = option.textContent
      toggleText.style.color = "black"
      toggle.style.backgroundColor = "#E8F0FE"
      document.getElementById("dropdown-options").style.display = "none"
    })
  })

  window.addEventListener("click", function(event) {
    if (!document.getElementById("dropdown-toggle").contains(event.target)) {
      document.getElementById("dropdown-options").style.display = "none";
    }
  })
})


const dropArea = document.getElementById("drop-area")
const imageView = document.getElementById("img-view")
const inputFile = document.querySelectorAll(".fileInput")
const addFile = document.getElementById("addfileurl")


inputFile.forEach(function (input) {
  input.addEventListener("change", function () {
    let imgLink = URL.createObjectURL(input.files[0])
    imageView.style.backgroundImage = `url(${imgLink})`
    imageView.textContent = ""
    addFile.textContent = input.files[0].name
    imageView.style.border = 0
    imageView.style.backgroundPosition="center"
  })
})

dropArea.addEventListener("dragover", function(e){
  e.preventDefault()
})

dropArea.addEventListener("drop", function(e){
  e.preventDefault()
  inputFile.files=e.dataTransfer.files
  let imgLink = URL.createObjectURL(inputFile.files[0])
  imageView.style.backgroundImage = `url(${imgLink})`
  imageView.textContent = ""
  addFile.textContent = inputFile.files[0].name
  imageView.style.border = 0
  imageView.style.backgroundPosition="center"
})

document.addEventListener("DOMContentLoaded", function() {
  const submitButton = document.getElementById("submit")
  submitButton.addEventListener("click", function(e){
      e.preventDefault()

      const nameEl = document.getElementById("name")
      const classEl = document.querySelector(".dropdown-text")
      const facilityEl = document.getElementById("facility")
      const locEl = document.getElementById("loc")
      const desEl = document.getElementById("des")

      const toggle = document.getElementById("dropdown-toggle")

      const namee = nameEl.value
      const className = classEl.textContent
      const facility = facilityEl.value
      const loc = locEl.value
      const des = desEl.value

      const nameRegex = /^[a-zA-Z\s]*$/

      let isValid = true

      if(facility === "" || loc === "" || des === "" || namee === ""){
        error.textContent = "Please fill in all fields"
        error.style.color = "red"
        error.style.display = "block"
        isValid = false
      }

      if(isValid){
        if(className == "Select your class"){
          error.textContent = "Please select your class"
          error.style.color = "red"
          error.style.display = "block"
          isValid = false
        }
      }

      if(isValid){
        if(!nameRegex.test(namee)){
          error.textContent = "Name should only contain characters within a-z, A-Z, and space"
          error.style.color = "red"
          error.style.display = "block"
          isValid = false
        }
      }

      if(isValid){
        nameEl.value = ""
        locEl.value = ""
        desEl.value = ""
        classEl.textContent = "Select your class"
        toggle.style.backgroundColor = "white"
        facilityEl.value = ""
        error.textContent = "Your complain has been recorded"
        error.style.color = "#0060AF"
        error.style.display = "block"
      }
  })
})
