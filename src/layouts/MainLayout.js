import { Sidebar } from '@/components';

export function MainLayout(contentHTML, title = '') {
    const sidebar = new Sidebar();

    const styles = {
        container: "flex h-screen bg-bg-primary font-sans overflow-hidden",
        main: "flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar",
        wrapper: "max-w-6xl mx-auto h-full flex flex-col",
        header: "mb-8",
        title: "text-3xl font-bold text-text-primary tracking-tight",
        cardContainer: "flex-1 bg-bg-secondary-opaque backdrop-blur-md border border-border-primary/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
    };

    return `
    <div class="${styles.container}">
        ${sidebar.render()}
        
        <!-- Contenedor Principal Flotante -->
        <main class="${styles.main}">
            <div class="${styles.wrapper}">
                
                ${title ? `
                <header class="${styles.header}">
                    <h2 class="${styles.title}">${title}</h2>
                </header>
                ` : ''}
                
                <!-- Tarjeta Flotante -->
                <div class="${styles.cardContainer}">
                    ${contentHTML}
                </div>
                
            </div>
        </main>
    </div>
    `;
}