const form = document.getElementById('form')
const errorElement = document.getElementById('error')

function validateName(){
    
}

function NumofAttendees(){
    let a;
    
    const attendeesElement = document.getElementById('number')

    if(attendeesElement.value < 15){
        errorElement.innerHTML = 'Sorry The Number Of Attendees does not reach the minimum booking'
    }
}