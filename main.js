const modeBtn = document.querySelector('.mode-button');
const modeIcon = document.querySelector('.mode-button i');
modeBtn.addEventListener('click', ()=> {
    document.body.classList.toggle('dark');
    modeIcon.classList.toggle('bx-moon');
    modeIcon.classList.toggle('bx-sun');
})