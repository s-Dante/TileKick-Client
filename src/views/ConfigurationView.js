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

        const configContent = `
            <div class="h-full flex flex-col md:flex-row bg-gray-900/40">
                
                <!-- Menú Lateral Interno -->
                <div class="md:w-64 border-b md:border-b-0 md:border-r border-gray-700/50 p-6 flex flex-row md:flex-col gap-2 overflow-x-auto">
                    <button data-tab="general" class="tab-btn flex-none md:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium whitespace-nowrap ${activeTab === 'general' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            General
                        </div>
                    </button>
                    <button data-tab="sonido" class="tab-btn flex-none md:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium whitespace-nowrap ${activeTab === 'sonido' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                            Sonido
                        </div>
                    </button>
                    <button data-tab="controles" class="tab-btn flex-none md:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium whitespace-nowrap ${activeTab === 'controles' ? 'bg-blue-500/20 text-blue-400' : 'text-gray-400 hover:bg-gray-800 hover:text-white'}">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Controles
                        </div>
                    </button>
                </div>

                <!-- Área de Contenido de la Configuración -->
                <div class="flex-1 p-8 overflow-y-auto">
                    ${this.renderTabContent()}
                </div>
                
            </div>
        `;

        return MainLayout(configContent, "Configuración");
    }

    renderTabContent() {
        switch (this.state.activeTab) {
            case 'general':
                return `
                    <div class="space-y-8 animate-fade-in">
                        <h3 class="text-xl font-bold text-white border-b border-gray-700 pb-2">Ajustes Generales</h3>
                        
                        <div class="space-y-6">
                            <!-- Idioma -->
                            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                <div>
                                    <h4 class="text-white font-medium">Idioma de la Interfaz</h4>
                                    <p class="text-sm text-gray-400">Selecciona el idioma principal del juego.</p>
                                </div>
                                <select class="bg-gray-900 border border-gray-600 text-white rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition-colors">
                                    <option value="es" ${this.state.settings.language === 'es' ? 'selected' : ''}>Español</option>
                                    <option value="en" ${this.state.settings.language === 'en' ? 'selected' : ''}>Inglés</option>
                                    <option value="pt" ${this.state.settings.language === 'pt' ? 'selected' : ''}>Portugués</option>
                                </select>
                            </div>

                            <!-- Notificaciones -->
                            <div class="flex items-center justify-between gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                <div>
                                    <h4 class="text-white font-medium">Notificaciones en el juego</h4>
                                    <p class="text-sm text-gray-400">Mostrar alertas y mensajes durante la partida.</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${this.state.settings.notifications ? 'checked' : ''}>
                                    <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                `;
            case 'sonido':
                return `
                    <div class="space-y-8 animate-fade-in">
                        <h3 class="text-xl font-bold text-white border-b border-gray-700 pb-2">Ajustes de Sonido</h3>
                        
                        <div class="space-y-6">
                            <!-- Música -->
                            <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 class="text-white font-medium">Música</h4>
                                        <p class="text-sm text-gray-400">Volumen de la música ambiental y de los menús.</p>
                                    </div>
                                    <span class="text-blue-400 font-bold">${this.state.settings.musicVolume}%</span>
                                </div>
                                <input type="range" min="0" max="100" value="${this.state.settings.musicVolume}" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500">
                            </div>

                            <!-- SFX -->
                            <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 class="text-white font-medium">Efectos de Sonido (SFX)</h4>
                                        <p class="text-sm text-gray-400">Volumen de los golpes, la pelota y las habilidades.</p>
                                    </div>
                                    <span class="text-blue-400 font-bold">${this.state.settings.sfxVolume}%</span>
                                </div>
                                <input type="range" min="0" max="100" value="${this.state.settings.sfxVolume}" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500">
                            </div>
                        </div>
                    </div>
                `;
            case 'controles':
                return `
                    <div class="space-y-8 animate-fade-in">
                        <h3 class="text-xl font-bold text-white border-b border-gray-700 pb-2">Asignación de Controles</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${this.renderControlBinding('Mover Arriba', this.state.settings.moveUp)}
                            ${this.renderControlBinding('Mover Abajo', this.state.settings.moveDown)}
                            ${this.renderControlBinding('Mover Izquierda', this.state.settings.moveLeft)}
                            ${this.renderControlBinding('Mover Derecha', this.state.settings.moveRight)}
                            ${this.renderControlBinding('Patear / Acción', this.state.settings.kick)}
                        </div>
                        
                        <div class="mt-6 flex justify-end">
                            <button class="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium">Restablecer por defecto</button>
                        </div>
                    </div>
                `;
            default:
                return '';
        }
    }

    renderControlBinding(label, key) {
        return `
            <div class="flex items-center justify-between bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <span class="text-gray-300 font-medium">${label}</span>
                <button class="px-4 py-2 bg-gray-900 border border-gray-600 hover:border-blue-500 text-white rounded-lg transition-colors font-mono min-w-[60px] text-center">
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