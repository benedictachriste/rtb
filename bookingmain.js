// document.getElementById("openPopup").addEventListener("click", function(){
    
// });
// document.getElementById("closePopup").addEventListener("click", function(){
//     document.getElementById("overlay").style.display="none";
// });

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
  
  