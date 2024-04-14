const darkbtn = document.getElementById('darkbtn');
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode){
    darkbtn.checked = true;
}
darkbtn.addEventListener('change', () => {
    const navBar = document.querySelector('.nav-bar');

    if(darkbtn.checked){
        navBar.style.background = '#0d1021';
        navBar.querySelectorAll('a').forEach(link => {
            link.style.color = '#ffffff';
        });
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
        navBar.style.background = '#FBECB2';
        navBar.querySelectorAll('a').forEach(link => {
            link.style.color = '#072541';
        });
    }
})