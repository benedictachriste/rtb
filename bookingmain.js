// document.getElementById("openPopup").addEventListener("click", function(){
    
// });
// document.getElementById("closePopup").addEventListener("click", function(){
//     document.getElementById("overlay").style.display="none";
// });

function popup() {
    document.getElementById("overlay").style.display="block";
}

function closepopup(){
    document.getElementById("overlay").style.display="none";
}

const dropdowns=document.querySelectorAll('.dropdown');

// loop through all dropdown elements
dropdowns.forEach(dropdown =>{
    // get inner elements for each dropdown
    const select=dropdown.querySelector('.select');
    const caret=dropdown.querySelector('.caret');
    const menu=dropdown.querySelector('.menu');
    const options=dropdown.querySelectorAll('.menu li');
    const selected=dropdown.querySelector('.select');

    // add a click event to select element
    select.addEventListener('click',() => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click',( )=> {
            selected.innerText=option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            // options.forEach(option =>{
            //     option.classList.remove('active');
            // });
        });
        option.classList.add('active');
    })
});

