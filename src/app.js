
let myButton = document.getElementById("myBtn");
const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const allLinks = document.querySelectorAll('.item-nav');

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

function toggleButton() {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);


allLinks.forEach(function(item){

    item.addEventListener('click', toggleButton)

})