
function popup() {
    document.getElementById("overlay").style.display="block";
    document.querySelector("body").classList.add("body-no-scroll")
}

function closepopup(){
    document.getElementById("overlay").style.display="none";
    document.querySelector("body").classList.remove("body-no-scroll")
}


document.addEventListener("DOMContentLoaded", function() {
  var toggle = document.getElementById("dropdown-toggle");
  var options = document.querySelectorAll(".dropdown-option");
  var toggleText = document.querySelector(".dropdown-text");

  toggle.addEventListener("click", function() {
    var dropdownOptions = document.getElementById("dropdown-options");
    dropdownOptions.style.display = dropdownOptions.style.display === "block" ? "none" : "block";
  });

  options.forEach(function(option) {
    option.addEventListener("click", function() {
      toggleText.textContent = option.textContent;
      document.getElementById("dropdown-options").style.display = "none";
    });
  });

  window.addEventListener("click", function(event) {
    if (!document.getElementById("dropdown-toggle").contains(event.target)) {
      document.getElementById("dropdown-options").style.display = "none";
    }
  });
});


const dropArea = document.getElementById("drop-area");
const imageView = document.getElementById("img-view");
const inputFile = document.querySelectorAll(".fileInput");
const addFile = document.getElementById("addfileurl");


inputFile.forEach(function (input) {
  input.addEventListener("change", function () {
    let imgLink = URL.createObjectURL(input.files[0]);
    imageView.style.backgroundImage = `url(${imgLink})`;
    imageView.textContent = "";
    addFile.textContent = input.files[0].name;
    imageView.style.border = 0;
    imageView.style.backgroundPosition="center";
  })
});

dropArea.addEventListener("dragover", function(e){
  e.preventDefault();
});

dropArea.addEventListener("drop", function(e){
  e.preventDefault();
  inputFile[0].files=e.dataTransfer.files;
  uploadImage();
});


// COPY JS NOTIF

let slideMenu = document.getElementById('slideMenu');
let notifIcon = document.querySelector('.notif-icon')
notifIcon.addEventListener('click', function() {
  if (slideMenu.style.right != "0px") {
    slideMenu.style.right = "0";
    // document.querySelector("body").classList.add("body-no-scroll")
  } else {
    slideMenu.style.right = "-25vw";
    // document.querySelector("body").classList.remove("body-no-scroll")
  }
})

// BATAS JS NOTIF