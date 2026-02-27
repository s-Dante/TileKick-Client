export function LogInView(container) {
    const title = document.createElement('h1');
    title.textContent = 'Welcome to TileKick!';
    container.appendChild(title);

    const description = document.createElement('p');
    description.textContent = 'Your ultimate tool for managing and organizing your tile collections.';
    container.appendChild(description);

    const featuresList = document.createElement('ul');
    const features = [
        'Easily catalog your tile collection',
        'Create custom tile sets',
        'Share your collections with friends',
        'Discover new tiles and trends'
    ];
    features.forEach(feature => {
        const listItem = document.createElement('li');
        listItem.textContent = feature;
        featuresList.appendChild(listItem);
    });
    container.appendChild(featuresList);

    const getStartedButton = document.createElement('button');
    getStartedButton.textContent = 'Get Started';
    getStartedButton.addEventListener('click', () => {
        // Navigate to the login view or registration view
        navigate('login');
    });
    container.appendChild(getStartedButton);
}   