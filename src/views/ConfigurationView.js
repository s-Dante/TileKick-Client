import { Component } from '@/core';
import { MainLayout } from '@/layouts/MainLayout.js';

export class ConfigurationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 'general', // 'general', 'sonido', 'controles'
            settings: {
                language: 'es',
                notifications: true,
                musicVolume: 75,
                sfxVolume: 60,
                moveUp: 'W',
                moveDown: 'S',
                moveLeft: 'A',
                moveRight: 'D',
                kick: 'Space'
            }
        };
    }

    render() {
        const { activeTab } = this.state;

        const styles = {
            container: "h-full flex flex-col md:flex-row bg-bg-primary-opaque",
            sidebarMenu: "md:w-64 border-b md:border-b-0 md:border-r border-border-primary/50 p-6 flex flex-row md:flex-col gap-2 overflow-x-auto",
            tabBtnBase: "tab-btn flex-none md:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium whitespace-nowrap",
            tabBtnActive: "bg-accent-primary/20 text-accent-primary",
            tabBtnInactive: "text-text-secondary hover:bg-bg-secondary hover:text-text-primary",
            tabBtnContent: "flex items-center gap-3",
            tabIconSvg: "w-5 h-5",
            contentArea: "flex-1 p-8 overflow-y-auto"
        };

        const configContent = `
            <div class="${styles.container}">
                
                <!-- Menú Lateral Interno -->
                <div class="${styles.sidebarMenu}">
                    <button data-tab="general" class="${styles.tabBtnBase} ${activeTab === 'general' ? styles.tabBtnActive : styles.tabBtnInactive}">
                        <div class="${styles.tabBtnContent}">
                            <svg class="${styles.tabIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            General
                        </div>
                    </button>
                    <button data-tab="sonido" class="${styles.tabBtnBase} ${activeTab === 'sonido' ? styles.tabBtnActive : styles.tabBtnInactive}">
                        <div class="${styles.tabBtnContent}">
                            <svg class="${styles.tabIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                            Sonido
                        </div>
                    </button>
                    <button data-tab="controles" class="${styles.tabBtnBase} ${activeTab === 'controles' ? styles.tabBtnActive : styles.tabBtnInactive}">
                        <div class="${styles.tabBtnContent}">
                            <svg class="${styles.tabIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Controles
                        </div>
                    </button>
                </div>

                <!-- Área de Contenido de la Configuración -->
                <div class="${styles.contentArea}">
                    ${this.renderTabContent()}
                </div>
                
            </div>
        `;

        return MainLayout(configContent, "Configuración");
    }

    renderTabContent() {
        const styles = {
            wrapper: "space-y-8 animate-fade-in",
            header: "text-xl font-bold text-text-primary border-b border-border-primary pb-2",
            section: "space-y-6",
            card: "flex flex-col md:flex-row md:items-center justify-between gap-4 bg-bg-secondary-opaque p-4 rounded-xl border border-border-primary",
            cardCol: "bg-bg-secondary-opaque p-5 rounded-xl border border-border-primary",
            cardTitle: "text-text-primary font-medium",
            cardDesc: "text-sm text-text-secondary",
            select: "bg-bg-primary border border-border-primary text-text-primary rounded-lg px-4 py-2 outline-none focus:border-accent-primary transition-colors",
            checkboxBg: "w-11 h-6 bg-border-primary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-primary",
            valText: "text-accent-primary font-bold",
            rangeInput: "w-full h-2 bg-bg-tertiary rounded-lg appearance-none cursor-pointer accent-accent-primary",
            controlsGrid: "grid grid-cols-1 md:grid-cols-2 gap-4",
            resetBtn: "px-6 py-2 bg-bg-tertiary hover:bg-border-primary text-text-primary rounded-lg transition-colors text-sm font-medium",
            bindCard: "flex items-center justify-between bg-bg-secondary-opaque p-4 rounded-xl border border-border-primary",
            bindLabel: "text-text-tertiary font-medium",
            bindBtn: "px-4 py-2 bg-bg-primary border border-border-primary hover:border-accent-primary text-text-primary rounded-lg transition-colors font-mono min-w-[60px] text-center"
        };

        switch (this.state.activeTab) {
            case 'general':
                return `
                    <div class="${styles.wrapper}">
                        <h3 class="${styles.header}">Ajustes Generales</h3>
                        
                        <div class="${styles.section}">
                            <!-- Idioma -->
                            <div class="${styles.card}">
                                <div>
                                    <h4 class="${styles.cardTitle}">Idioma de la Interfaz</h4>
                                    <p class="${styles.cardDesc}">Selecciona el idioma principal del juego.</p>
                                </div>
                                <select class="${styles.select}">
                                    <option value="es" ${this.state.settings.language === 'es' ? 'selected' : ''}>Español</option>
                                    <option value="en" ${this.state.settings.language === 'en' ? 'selected' : ''}>Inglés</option>
                                    <option value="pt" ${this.state.settings.language === 'pt' ? 'selected' : ''}>Portugués</option>
                                </select>
                            </div>

                            <!-- Notificaciones -->
                            <div class="${styles.card}">
                                <div>
                                    <h4 class="${styles.cardTitle}">Notificaciones en el juego</h4>
                                    <p class="${styles.cardDesc}">Mostrar alertas y mensajes durante la partida.</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${this.state.settings.notifications ? 'checked' : ''}>
                                    <div class="${styles.checkboxBg}"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                `;
            case 'sonido':
                return `
                    <div class="${styles.wrapper}">
                        <h3 class="${styles.header}">Ajustes de Sonido</h3>
                        
                        <div class="${styles.section}">
                            <!-- Música -->
                            <div class="${styles.cardCol}">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 class="${styles.cardTitle}">Música</h4>
                                        <p class="${styles.cardDesc}">Volumen de la música ambiental y de los menús.</p>
                                    </div>
                                    <span class="${styles.valText}">${this.state.settings.musicVolume}%</span>
                                </div>
                                <input type="range" min="0" max="100" value="${this.state.settings.musicVolume}" class="${styles.rangeInput}">
                            </div>

                            <!-- SFX -->
                            <div class="${styles.cardCol}">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 class="${styles.cardTitle}">Efectos de Sonido (SFX)</h4>
                                        <p class="${styles.cardDesc}">Volumen de los golpes, la pelota y las habilidades.</p>
                                    </div>
                                    <span class="${styles.valText}">${this.state.settings.sfxVolume}%</span>
                                </div>
                                <input type="range" min="0" max="100" value="${this.state.settings.sfxVolume}" class="${styles.rangeInput}">
                            </div>
                        </div>
                    </div>
                `;
            case 'controles':
                return `
                    <div class="${styles.wrapper}">
                        <h3 class="${styles.header}">Asignación de Controles</h3>
                        
                        <div class="${styles.controlsGrid}">
                            ${this.renderControlBinding('Mover Arriba', this.state.settings.moveUp, styles)}
                            ${this.renderControlBinding('Mover Abajo', this.state.settings.moveDown, styles)}
                            ${this.renderControlBinding('Mover Izquierda', this.state.settings.moveLeft, styles)}
                            ${this.renderControlBinding('Mover Derecha', this.state.settings.moveRight, styles)}
                            ${this.renderControlBinding('Patear / Acción', this.state.settings.kick, styles)}
                        </div>
                        
                        <div class="mt-6 flex justify-end">
                            <button class="${styles.resetBtn}">Restablecer por defecto</button>
                        </div>
                    </div>
                `;
            default:
                return '';
        }
    }

    renderControlBinding(label, key, styles) {
        return `
            <div class="${styles.bindCard}">
                <span class="${styles.bindLabel}">${label}</span>
                <button class="${styles.bindBtn}">
                    ${key}
                </button>
            </div>
        `;
    }

    mounted() {
        if (!this.element) return;

        // Agregar eventos para los botones del menú de pestañas
        const tabBtns = this.element.querySelectorAll('.tab-btn');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                if (tab && tab !== this.state.activeTab) {
                    this.setState({ activeTab: tab });
                }
            });
        });
    }
}