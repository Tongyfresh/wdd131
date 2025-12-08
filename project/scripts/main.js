document.addEventListener('DOMContentLoaded', () => {

    function updateCopyrightYear() {
        const yearSpan = document.getElementById('currentyear');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    // Data: Array of beginner bonsai tree objects
    const beginnerTrees = [
        {
            name: 'Ficus Bonsai',
            scientificName: 'Ficus retusa',
            description: 'Very forgiving and great for indoors. Tolerates low light and is resilient to overwatering.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Ficus+Bonsai'
        },
        {
            name: 'Juniper Bonsai',
            scientificName: 'Juniperus procumbens',
            description: 'A classic outdoor bonsai. It needs plenty of sun and is very hardy. Perfect for wiring and shaping.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Juniper+Bonsai'
        },
        {
            name: 'Chinese Elm',
            scientificName: 'Ulmus parvifolia',
            description: 'A fast-growing and tough tree. It can be kept indoors or outdoors and responds well to pruning.',
            imageUrl: 'https://via.placeholder.com/300x200.png?text=Chinese+Elm'
        }
    ];

    // Populate the beginner's guide with tree data
    function displayBeginnerTrees() {
        const gallery = document.getElementById('tree-gallery');
        // Only run if the gallery element exists on the page
        if (gallery) {
            beginnerTrees.forEach(tree => {
                // dynamically building the HTML string
                const cardHTML = `
                    <div class="tree-card">
                        <h3>${tree.name}</h3>
                        <p><em>${tree.scientificName}</em></p>
                        <img src="${tree.imageUrl}" alt="A ${tree.name} bonsai tree" loading="lazy" width="300" height="200">
                        <p>${tree.description}</p>
                    </div>
                `;
                gallery.innerHTML += cardHTML;
            });
        }
    }

    // Handle form submission and localStorage
    function manageInquiries() {
        const contactForm = document.getElementById('contact-form');
        const inquiryCountSpan = document.getElementById('inquiry-count');

        // Only run if the form and span exist
        if (contactForm && inquiryCountSpan) {
            let inquiryCount = localStorage.getItem('inquiryCount') || 0;
            inquiryCountSpan.textContent = inquiryCount;

            contactForm.addEventListener('submit', () => {
                inquiryCount++;
                localStorage.setItem('inquiryCount', inquiryCount);
            });
        }
    }

    updateCopyrightYear();
    displayBeginnerTrees();
    manageInquiries();
});
