export function LandingPageInfo(image, description) {
    const container = document.createElement('div');
    container.className = 'landing-info';

    const img = document.createElement('p');
    img.src = image;
    img.alt = 'Info Image';
    container.appendChild(img);

    const desc = document.createElement('p');
    desc.textContent = description;
    container.appendChild(desc);
}