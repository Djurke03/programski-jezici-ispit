document.getElementById('theme-toggle').addEventListener('click', () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-bs-theme', newTheme);

    // Change the icon based on the theme
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.classList.toggle('fa-sun', newTheme === 'light');
    themeIcon.classList.toggle('fa-moon', newTheme === 'dark');
});

// Initialize the icon based on the current theme
document.addEventListener('DOMContentLoaded', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const themeIcon = document.getElementById('theme-icon');
    themeIcon.classList.toggle('fa-sun', currentTheme === 'light');
    themeIcon.classList.toggle('fa-moon', currentTheme === 'dark');
});