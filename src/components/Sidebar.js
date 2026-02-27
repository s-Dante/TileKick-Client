import { navigate } from '@/core'

export function Sidebar() {
    const sidebar = document.createElement('aside');
    sidebar.className = 'aside';

    const title = document.createElement('span');
    title.textContent = 'TILEKICK';
    sidebar.appendChild(title);

    const links = document.createElement('ul');
    sidebar.appendChild(links);

    const linkData = [
        { name: 'Profile', path: navigate('profile') },
        { name: 'Configuration', path: navigate('configuration') },
        { name: 'Main Menu', path: navigate('mainMenu') },
        { name: 'Ranking', path: navigate('ranking') },
        // { name: 'Exit', path: navigate('exit') },
    ];

    linkData.forEach(({ name, path }) => {
        const link = document.createElement('li');
        link.textContent = name;
        link.addEventListener('click', () => navigate(path));
        links.appendChild(link);
    });

    return sidebar;
}