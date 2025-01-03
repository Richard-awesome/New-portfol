const popupMenubar = document.getElementById('activate-menu');
const showMenu = document.querySelector('header');
const award = document.querySelector('.award');
const peek = document.querySelector('.peek');
const handles = document.querySelector('.handles');

const changeMenudisplay = () => {
    showMenu.classList.toggle('read')
}

award.addEventListener('click', () => {
    showMenu.classList.toggle('read')
})

handles.addEventListener('click', () => {
    showMenu.classList.toggle('read')
})

peek.addEventListener('click', () => {
    showMenu.classList.toggle('read')
})
     
popupMenubar.onclick = changeMenudisplay;