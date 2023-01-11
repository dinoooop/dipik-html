var menuBtn = document.querySelector("#menu");
var closeBtn = document.querySelector("#close");
var sidenav = document.querySelector("#sidenav");
var themeToggler = document.querySelector("#theme-toggler");




var theme = localStorage.getItem('config.theme');

menuBtn.addEventListener('click', () => {
    sidenav.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    sidenav.style.display = 'none';
});
themeToggler.addEventListener('click', () => {
    
    if(theme == 'dark'){
        theme = 'light';
        document.body.classList.remove('dark-theme');
    } else {
        theme = 'dark';
        document.body.classList.add('dark-theme');
    }
    localStorage.setItem('config.theme', `${theme}`);
});

window.addEventListener('DOMContentLoaded', () => {
    if(theme == 'dark'){
        document.body.classList.add('dark-theme');
    }
});



// Profile Pic Drop Down

// var profilePicBtn = document.getElementById("profile-pic");
// var profileDropdown = document.getElementById("profile-dropdown");

// document.body.addEventListener('click', (e) => {
//     if(profileDropdown.style.display == 'block' && e.target != profilePicBtn){
//         profileDropdown.style.display = 'none';
//     }
// });

// profilePicBtn.addEventListener('click', (e) => {    
//     profileDropdown.style.display = (profileDropdown.style.display == 'none') ? 'block' : 'none';
// });


// General Dropdown
var dropdownButton = document.querySelector(".dropdown-button");
var allDropdown = document.querySelector(".dropdown");

document.body.addEventListener('click', (e) => {
    if(e.target != dropdownButton){
        allDropdown.style.display = 'none';
    }
});

dropdownButton.addEventListener('click', (e) => {
    
    //e.target.parentElement.style.display = 'none';
    var dropdownItme = e.target.parentElement.querySelector('.dropdown');
    dropdownItme.style.display = (dropdownItme.style.display == 'none') ? 'block' : 'none';
});