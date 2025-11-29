document.addEventListener("DOMContentLoaded", function () {
    // Footer dynamic date
    const currentYearSpan = document.getElementById("currentyear");
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
  
    const lastModifiedP = document.getElementById("lastModified");
    if (lastModifiedP) {
        lastModifiedP.textContent = `Last Modified: ${document.lastModified}`;
    }

    // Hamburger menu functionality
    const hamburgerBtn = document.getElementById('menu');
    const navigation = document.querySelector('nav');

    hamburgerBtn.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamburgerBtn.classList.toggle('open');
    });
});
