const navButton = document.getElementById('navbar-button');
const navList = document.getElementById('navbar-list');

navButton.addEventListener('click', ()=>{
  navButton.classList.toggle('navButton-active');
  navList.classList.toggle('hidden');
})