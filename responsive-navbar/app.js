const toggleBtn = document.querySelector('.toggle');
const menuOpen = false;

toggleBtn.addEventListener('click', () => {
    if(!menuOpen) {
        toggleBtn.classList.add('open');
        menuOpen = true;
    } else {
        toggleBtn.classList.remove('open');
        menuOpen = false;
    }
})