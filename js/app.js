const checkbox = document.querySelector('#checkbox');
const mediaQueryDark = window.matchMedia('(prefers-color-scheme: dark)');

if (mediaQueryDark.matches) {
    checkbox.setAttribute('checked', true);
}
function toggleDarkMode(evt) {
    if (this.checked) {
        document.body.classList.remove('is-light-mode');
        document.body.classList.add('is-dark-mode');
    } else {
        document.body.classList.remove('is-dark-mode');
        document.body.classList.add('is-light-mode');
    }
}
mediaQueryDark.addEventListener('change', toggleDarkMode)
checkbox.addEventListener('change', toggleDarkMode)