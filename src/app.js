

const hamburgerButton = document.getElementById('hamburger');
const navList = document.getElementById('nav-list');
const allLinks = document.querySelectorAll('.item-nav');

function toggleButton() {
    navList.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);


allLinks.forEach(function(item){

    item.addEventListener('click', toggleButton)

})