import {navigate} from '@/core';

import { MainLayout } from '@/layouts';

export function MainMenuView() {
    const view = document.createElement('div');
    view.className = 'main-menu-view';

    const layout = MainLayout();
    view.appendChild(layout);

    const content = document.createElement('div');
    content.className = 'content';
    layout.appendChild(content);

    const title = document.createElement('h1');
    title.textContent = 'Main Menu';
    content.appendChild(title);

    const backButton = document.createElement('button');
    backButton.textContent = 'Back to Main Menu';
    backButton.addEventListener('click', () => navigate('mainMenu'));
    content.appendChild(backButton);

    return view;
}