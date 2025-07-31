function switchOrganizationImage() {
    const orgImage = document.querySelector('.org-img');
    let currentImage = 'bel_org_1.jpg';
    
    setInterval(() => {
        currentImage = currentImage === 'bel_org_1.jpg' ? 'bel_org_2.jpg' : 'bel_org_1.jpg';
        orgImage.src = `/mediation/photos/${currentImage}`;
    }, 5000);
}

document.addEventListener('DOMContentLoaded', switchOrganizationImage);
