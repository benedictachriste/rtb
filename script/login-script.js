const form = document.getElementById('form');
const errorElement = document.getElementById('error');


function validateForm(e){
    e.preventDefault();

    const username = document.getElementById('username');
    const password = document.getElementById('password');

    if(username.value == '' || username == null){
        errorElement.innerHTML = "Username is required";
        return false;
    }
    if(password.value == '' || password == null){
        errorElement.innerHTML = "Password is required";
        return false;
    }
    if (username.value === "penghuni.rtb" && password.value === "penghuni123") {
        alert("You have successfully logged in.");
        // displayText();
        // location.reload();
        errorElement.innerHTML = ''; 
    
        location.href = "homepage.html";
    
        return true;
    }
    else if(username.value != "penghuni.rtb" || password.value != "penghuni123"){
        errorElement.innerHTML = "Username or password wrong";
        return false;
    }

   
}


form.addEventListener('submit', validateForm)
