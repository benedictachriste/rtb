// notification

let slideMenu = document.getElementById("slideMenu")
let notifIcon = document.querySelector(".notif-icon")
notifIcon.addEventListener("click", function() {
  if (slideMenu.style.right != "0px") {
    slideMenu.style.right = "0"
  } else {
    slideMenu.style.right = "-25vw"
  }
})

// dropdown form

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

 document.addEventListener("DOMContentLoaded", function(){
  const subButton = document.getElementById('submit')
  subButton.addEventListener("click", function(x){
    x.preventDefault()

    const name = document.getElementById('name').value
    const className = document.querySelector('.dropdown-text').textContent
    const totalNum = document.getElementById('number').value
    const date = document.getElementById('dateInput').value
    const purpose = document.getElementById('des').value
    const start = document.getElementById('start-time').value
    const end = document.getElementById('end-time').value

    const toggle = document.getElementById("dropdown-toggle")

    const nameRegex = /^[a-zA-Z\s]*$/

    let isValid = true;

    if(name === "" || totalNum === "" || purpose === "" || date === "" || start === "" || end === ""){
      error.textContent = "Please fill in all fields"
      error.style.color = "red"
      error.style.display = "block"
      isValid = false
    }

    if(isValid){
      if(!nameRegex.test(name)){
        error.textContent = "Name should only contain characters within a-z, A-Z, and space"
        error.style.color = "red"
        error.style.display = "block"
        isValid = false
      }
    }

    if(isValid){
      if(className == "Select your class"){
        error.textContent = "Please select your class/organization"
        error.style.color = "red"
        error.style.display = "block"
        isValid = false
      }
    }

    const numRegex = /^\d+$/

    if(isValid){
      if(!numRegex.test(totalNum)){
        error.textContent = "Number of attendees should contain numbers only"
        error.style.display = "block"
        error.style.color = "red"
        isValid = false
      }
    }

    if(isValid){
      if(totalNum < 10){
        error.textContent = "The number of attendees does not meet the minimum requirements (10)"
        error.style.color = "red"
        error.style.display = "block"
        isValid = false
      }
    }

    // if(isValid){
    //   const parts = date.split('-'); // Pisahkan input tanggal menjadi bagian-bagian (tahun, bulan, tanggal)
    //   const year = parts[0];
    //   const month = parts[1];
    //   const day = parts[2];

      // asumsi CWS only available on Saturday, 23rd March 2024
      // if (year == '2024' && month == '03' && day == '23') {
      //   isValid = true;
      // } else {
      //   error.textContent = "Please choose another date because Co-Working space is full"
      //   error.style.display = "block"
      //   isValid = false
      // }
    // }

    // asumsi available di semua jam dan hanya dapat di booking maksimal 2 jam
    if(isValid){
      const [startHour, startMinute] = start.split(':').map(Number);
      const [endHour, endMinute] = end.split(':').map(Number);

      // date in java --> untuk melakukan perhitungan durasi atau selisih waktu antara waktu mulai dan waktu selesai.
      const startDate = new Date(0, 0, 0, startHour, startHour)
      const endDate = new Date(0, 0, 0, endHour, endMinute)

      const duration = endDate - startDate

      // ubah durasi dalam bentuk jam
      const hours = Math.floor(duration / (1000 * 60 * 60));
      if(hours > 2){
        error.textContent = "Maximum duration for Communal booking is 2 hours"
        error.style.color = "red"
        error.style.display = "block"
        isValid = false
      }
    }

    // if user click others, then purpose must use format : Organization name - purpose
    if(isValid && className == "Others"){
        if(!purpose.includes('-')){
          error.textContent = "Description must be (organization) - (purpose)";
          error.style.display = "block";
          isValid = false;
        }
      }

    if(isValid){
      document.getElementById('name').value = ""
      document.getElementById('number').value = ""
      document.getElementById('dateInput').value = ""
      document.getElementById('des').value = ""
      document.getElementById('start-time').value = ""
      document.getElementById('end-time').value = ""
      document.querySelector('.dropdown-text').textContent = "Select your class"
      toggle.style.backgroundColor = "white"
      error.textContent = "Your booking request has been recorded"
      error.style.color = "#0060AF"
      error.style.display = "block"
    }

  })
 })