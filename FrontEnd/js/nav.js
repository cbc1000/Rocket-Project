// get all nav links
const navLinks = document.querySelectorAll('.nav-link');

// function to remove active class from all links
function removeActiveClass() {
    navLinks.forEach(link => link.classList.remove('active'));
}

// function to add active class to clicked link
function addActiveClass(e) {
    removeActiveClass();
    e.target.classList.add('active');
}

// add click event listener to all links
navLinks.forEach(link => link.addEventListener('click', addActiveClass));

// Get current page URL
let url = window.location.href;

// Loop through each nav link
navLinks.forEach((navLink) => {
    // If the nav link matches the current URL, add the 'active' class
    if (navLink.href === url) {
        removeActiveClass();
        navLink.classList.add('active');
    }
});