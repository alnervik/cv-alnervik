// Funktion för att växla mellan ljust och mörkt läge
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.querySelector('.light-mode i');
    
    body.classList.toggle('dark-mode');
    
    // Ändrar ikonen när användare byter färg-läge
    if (body.classList.contains('dark-mode')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
}

// Lägger till en eventlyssnare på light-mode-elementet
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.light-mode');
    themeToggle.addEventListener('click', toggleTheme);

    // Kontrollera användarens sparade inställning
    const savedTheme = localStorage.getItem('theme');
    const themeIcon = document.querySelector('.light-mode i');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }
});