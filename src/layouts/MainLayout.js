import { Sidebar } from '@/components';

export function MainLayout(contentHTML, title = '') {
    const sidebar = new Sidebar();

    return `
    <div class="flex h-screen bg-gray-900 font-sans overflow-hidden">
        ${sidebar.render()}
        
        <!-- Contenedor Principal Flotante -->
        <main class="flex-1 p-4 md:p-8 overflow-y-auto">
            <div class="max-w-6xl mx-auto h-full flex flex-col">
                
                ${title ? `
                <header class="mb-8">
                    <h2 class="text-3xl font-bold text-white tracking-tight">${title}</h2>
                </header>
                ` : ''}
                
                <!-- Tarjeta Flotante -->
                <div class="flex-1 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                    ${contentHTML}
                </div>
                
            </div>
        </main>
    </div>
    `;
}