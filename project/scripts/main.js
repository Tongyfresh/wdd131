document.addEventListener('DOMContentLoaded', () => {

    /* -----------------------------------------------------------
       Function: updateCopyrightYear
       Description: Automatically updates the year in the footer.
       ----------------------------------------------------------- */
    function updateCopyrightYear() {
        const yearSpan = document.getElementById('currentyear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    /* -----------------------------------------------------------
       Data: Beginner Trees Array
       Description: Hardcoded data for the gallery.
       ----------------------------------------------------------- */
    const beginnerTrees = [
        {
            name: 'Ficus Bonsai',
            scientificName: 'Ficus retusa',
            description: 'Very forgiving and great for indoors. Tolerates low light and is resilient to overwatering.',
            imageUrl: 'images/ficus.webp' 
        },
        {
            name: 'Juniper Bonsai',
            scientificName: 'Juniperus procumbens',
            description: 'A classic outdoor bonsai. It needs plenty of sun and is very hardy. Perfect for wiring and shaping.',
            imageUrl: 'images/juniper.webp'
        },
        {
            name: 'Chinese Elm',
            scientificName: 'Ulmus parvifolia',
            description: 'A fast-growing and tough tree. It can be kept indoors or outdoors and responds well to pruning.',
            imageUrl: 'images/chinese-elm.webp'
        }
    ];

    /* -----------------------------------------------------------
       Function: displayBeginnerTrees
       Description: Loops through the array and injects HTML cards.
       ----------------------------------------------------------- */
    function displayBeginnerTrees() {
        const galleryGrid = document.getElementById('gallery-grid');
        
        if (galleryGrid) {
            galleryGrid.innerHTML = '';

            beginnerTrees.forEach(tree => {
                const cardHTML = `
                    <div class="tree-card">
                        <h3>${tree.name}</h3>
                        <p class="scientific"><em>${tree.scientificName}</em></p>
                        <img src="${tree.imageUrl}" alt="A ${tree.name} bonsai tree" loading="lazy">
                        <p>${tree.description}</p>
                    </div>
                `;
                galleryGrid.innerHTML += cardHTML;
            });
        }
    }

    /* -----------------------------------------------------------
       Function: manageInquiries
       Description: Handles form submission counting (LocalStorage).
       ----------------------------------------------------------- */
    function manageInquiries() {
        const contactForm = document.getElementById('contact-form');
        const inquiryCountSpan = document.getElementById('inquiry-count');

        if (contactForm && inquiryCountSpan) {
            let inquiryCount = localStorage.getItem('inquiryCount') || 0;
            inquiryCountSpan.textContent = inquiryCount;

            contactForm.addEventListener('submit', () => {
                inquiryCount++;
                localStorage.setItem('inquiryCount', inquiryCount);
            });
        }
    }
        /* -----------------------------------------------------------
       Function: mobileMenu
       Description: Toggles the hamburger menu
       ----------------------------------------------------------- */

    function mobileMenu() {
        const hamburger = document.getElementById('menu');
        const nav = document.querySelector('.navigation');

        if (hamburger && nav) {
            hamburger.addEventListener('click', () => {
                nav.classList.toggle('open');
                
                hamburger.classList.toggle('open');
                
                if (hamburger.classList.contains('open')) {
                    hamburger.innerHTML = '&times;'; 
                } else {
                    hamburger.innerHTML = '&#9776;'; 
                }
            });
        }
    }


    mobileMenu();
    updateCopyrightYear();
    displayBeginnerTrees();
    manageInquiries();
});