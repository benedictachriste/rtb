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
    // For class dropdown
    const toggle = document.getElementById("dropdown-toggle");
    const options = document.querySelectorAll(".dropdown-option");
    const toggleText = document.querySelector(".dropdown-text");
  
    toggle.addEventListener("click", function() {
      const dropdownOptions = document.getElementById("dropdown-options");
      dropdownOptions.style.display = dropdownOptions.style.display === "block" ? "none" : "block";
      toggleText.style.color = "#93969A"
    });
  
    options.forEach(function(option) {
      option.addEventListener("click", function() {
        toggleText.textContent = option.textContent;
        toggleText.style.color = "black"
        toggle.style.backgroundColor = "#E8F0FE";
        document.getElementById("dropdown-options").style.display = "none";
      });
    });

    // For kitchen dropdown
    const kitchenToggle = document.querySelector(".kitchen-dropdown-toggle"); 
    const kitchenOpt = document.querySelectorAll(".kitchen-dropdown-option");
    const kitchenToggleText = document.querySelector(".kitchen-dropdown-text");

    kitchenToggle.addEventListener("click", function() {
        const kitchenDDOpt = document.getElementById("kitchen-dropdown-options"); 
        kitchenDDOpt.style.display = kitchenDDOpt.style.display === "block" ? "none" : "block";
        kitchenToggleText.style.color = "#93969A";
    });

    kitchenOpt.forEach(function(kitchenOpt) {
        kitchenOpt.addEventListener("click", function() {
            kitchenToggleText.textContent = kitchenOpt.textContent;
            kitchenToggleText.style.color = "black";
            kitchenToggle.style.backgroundColor = "#E8F0FE";
            document.getElementById("kitchen-dropdown-options").style.display = "none";
        });
    });

    // Close dropdowns when clicking outside
    window.addEventListener("click", function(event) {
        if (!toggle.contains(event.target)) {
            document.getElementById("dropdown-options").style.display = "none";
            // toggleText.style.color = "#93969A";
            // toggle.style.backgroundColor = "#FAFAFC";
        }
        if (!kitchenToggle.contains(event.target)) {
            document.getElementById("kitchen-dropdown-options").style.display = "none";
            // kitchenToggleText.style.color = "#93969A";
            // kitchenToggle.style.backgroundColor = "#FAFAFC";
        }
    });
});


 document.addEventListener("DOMContentLoaded", function(){
  const subButton = document.getElementById('submit')

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();

  // Format tanggal agar sesuai dengan format HTML
  if (dd < 10) {
      dd = '0' + dd;
  }
  if (mm < 10) {
      mm = '0' + mm;
  }

  // Tanggal hari ini dalam format YYYY-MM-DD
  var minDate = yyyy + '-' + mm + '-' + dd;

  // Tanggal maksimum adalah 7 hari ke depan
  var maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 7);
  var maxDd = maxDate.getDate();
  var maxMm = maxDate.getMonth() + 1;
  var maxYyyy = maxDate.getFullYear();

  // Format tanggal maksimum agar sesuai dengan format HTML
  if (maxDd < 10) {
      maxDd = '0' + maxDd;
  }
  if (maxMm < 10) {
      maxMm = '0' + maxMm;
  }

  // Tanggal maksimum dalam format YYYY-MM-DD
  var maxDateString = maxYyyy + '-' + maxMm + '-' + maxDd;

  // Atur nilai min dan max untuk input tanggal
  dateInput.min = minDate;
  dateInput.max = maxDateString;
  
  subButton.addEventListener("click", function(x){
    x.preventDefault()

    const name = document.getElementById('name').value
    const className = document.querySelector('.dropdown-text').textContent
    const kitchenApl = document.querySelector('.kitchen-dropdown-text').textContent
    const date = document.getElementById('dateInput').value
    const purpose = document.getElementById('des').value
    const start = document.getElementById('start-time').value
    const end = document.getElementById('end-time').value
    const kitchenToggle = document.querySelector(".kitchen-dropdown-toggle"); 
    const toggle = document.getElementById("dropdown-toggle");
    const toggleText = document.querySelector(".dropdown-text");
    const kitchenToggleText = document.querySelector(".kitchen-dropdown-text");

    const nameRegex = /^[a-zA-Z\s]*$/

    let isValid = true;

    if(name === "" || kitchenApl === "" || purpose === "" || date === "" || start === "" || end === ""){
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

    // const numRegex = /^\d+$/
    if(isValid){
      if(kitchenApl == "Kitchen Appliance"){
        error.textContent = "Please select kitchen appliance"
        error.style.display = "block"
        error.style.color = "red"
        isValid = false
      }
    }

    // if(isValid){
    //   if(totalNum < 20){
    //     error.textContent = "The number of attendees does not meet the minimum requirements"
    //     error.style.color = "red"
    //     error.style.display = "block"
    //     isValid = false
    //   }
    // }

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
        error.textContent = "Maximum duration for Kitchen booking is 2 hours"
        error.style.color = "red"
        error.style.display = "block"
        isValid = false
      }
    }

    // if user click others, then purpose must use format : Organization name - purpose
    if(isValid && className == "Others"){
        if(!purpose.includes('-')){
          error.textContent = "Description must be (organization name) - (purpose)";
          error.style.display = "block";
          isValid = false;
        }
      }

    if(isValid){
      document.getElementById('name').value = ""
      document.getElementById('dateInput').value = ""
      document.getElementById('des').value = ""
      document.getElementById('start-time').value = ""
      document.getElementById('end-time').value = ""
      document.querySelector('.dropdown-text').textContent = "Select your class"
      document.querySelector('.kitchen-dropdown-text').textContent = "Kitchen Appliance"
      toggle.style.backgroundColor = "white"
      kitchenToggle.style.backgroundColor = "white"
      toggleText.style.color = "#93969A";
      kitchenToggleText.style.color = "#93969A";
      error.textContent = "Your booking request has been recorded"
      error.style.color = "#0060AF"
      error.style.display = "block"
    }

  })
 })