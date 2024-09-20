// Funktion för att växla mellan ljust och mörkt läge
function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    
    // Sparar användarens val i localStorage
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// Lägg till en eventlyssnare på light-mode-elementet
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.light-mode');
    themeToggle.addEventListener('click', toggleTheme);

    // Kontrollera användarens sparade inställning
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});