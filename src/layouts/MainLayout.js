import { navigate } from '@/core';

import { Sidebar } from '@/components';

export function MainLayout(contentHTML, title) {
    return `
    <div class="main-layout">
        ${Sidebar()}
        <div class="main-layout__content">
            ${contentHTML}
        </div>
    </div>
    `;


}