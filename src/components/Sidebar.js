import { Component } from '@/core';

export class Sidebar extends Component {
    render() {
        // Tailwind classes extracted and mapped to new semantic variables
        const styles = {
            aside: "flex flex-col w-64 h-screen bg-bg-secondary border-r border-border-primary text-text-primary p-6 shadow-2xl z-20 relative transition-transform duration-300",
            logoContainer: "flex items-center justify-center mb-10 mt-2",
            logoText: "text-4xl font-black text-text-primary tracking-tighter",
            logoHighlight: "text-accent-primary",
            nav: "flex-1 space-y-2",
            ul: "space-y-3",
            linkBox: "flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-tertiary hover:text-accent-primary transition-all duration-200 group",
            iconBox: "bg-bg-tertiary p-2 rounded-lg group-hover:bg-accent-primary/20 group-hover:text-accent-primary transition-colors",
            iconSvg: "w-5 h-5",
            linkLabel: "font-medium",
            logoutContainer: "mt-auto pt-6 border-t border-border-primary",
            logoutBtn: "w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-danger/10 text-danger hover:bg-danger hover:text-white transition-all duration-300 group"
        };

        return `
            <aside class="${styles.aside}">
                <!-- Logo Área -->
                <div class="${styles.logoContainer}">
                    <h1 class="${styles.logoText}">
                        TILE<span class="${styles.logoHighlight}">KICK</span>
                    </h1>
                </div>

                <!-- Navegación -->
                <nav class="${styles.nav}">
                    <ul class="${styles.ul}">
                        <li>
                            <a href="/profile" data-link class="${styles.linkBox}">
                                <span class="${styles.iconBox}">
                                </span>
                                <span class="${styles.linkLabel}">Perfil</span>
                            </a>
                        </li>
                        <li>
                            <a href="/config" data-link class="${styles.linkBox}">
                                <span class="${styles.iconBox}">
                                </span>
                                <span class="${styles.linkLabel}">Configuración</span>
                            </a>
                        </li>
                        <li>
                            <a href="/play" data-link class="${styles.linkBox}">
                                <span class="${styles.iconBox}">
                                </span>
                                <span class="${styles.linkLabel}">Jugar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ranking" data-link class="${styles.linkBox}">
                                <span class="${styles.iconBox}">
                                </span>
                                <span class="${styles.linkLabel}">Ranking</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- Botón de Salir -->
                <div class="${styles.logoutContainer}">
                    <button id="btn-logout" class="${styles.logoutBtn}">
                        <span class="font-medium">Salir</span>
                    </button>
                </div>
            </aside>
        `;
    }

    mounted() {
        const btn = this.element ? this.element.querySelector('#btn-logout') : document.getElementById('btn-logout');
        if (btn) {
            btn.addEventListener('click', () => {
                console.log('Cerrando sesión...');
                // Aquí iría la lógica de logout, y luego redirigir a login
                // window.location.href = '/auth/login';
            });
        }
    }
}