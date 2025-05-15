// Function to switch images in the best organizations section
function switchOrganizationImage() {
    const orgImage = document.querySelector('.org-img');
    let currentImage = 'bel_org_1.jpg';
    
    setInterval(() => {
        currentImage = currentImage === 'bel_org_1.jpg' ? 'bel_org_2.jpg' : 'bel_org_1.jpg';
        orgImage.src = `/mediation/photos/${currentImage}`;
    }, 5000);
}

// Initialize the image switching when the page loads
document.addEventListener('DOMContentLoaded', switchOrganizationImage);
