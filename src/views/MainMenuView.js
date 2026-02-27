import { Component } from '@/core';
import { MainLayout } from '@/layouts/MainLayout.js';

export class PlaySelectionView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedMode: null, // 'online', 'local', 'ai'
            selectedMap: null,  // 'stadium', 'street', 'beach'

            modes: [
                { id: 'online', title: 'Multijugador Online', desc: 'Juega contra personas de todo el mundo', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>' },
                { id: 'local', title: 'Multijugador Local', desc: 'Juega con un amigo en el mismo teclado', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>' },
                { id: 'ai', title: 'Contra la IA', desc: 'Practica tus habilidades contra la máquina', icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>' }
            ],

            maps: [
                { id: 'stadium', title: 'Estadio Principal', image: 'https://images.unsplash.com/photo-1518605368461-1ee7e5b56574?auto=format&fit=crop&q=80&w=400&h=300' },
                { id: 'street', title: 'Cancha Callejera', image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=400&h=300' },
                { id: 'beach', title: 'Fútbol Playa', image: 'https://images.unsplash.com/photo-1510051640316-cee39563ddcb?auto=format&fit=crop&q=80&w=400&h=300' }
            ]
        };
    }

    render() {
        const { selectedMode, selectedMap, modes, maps } = this.state;
        const canPlay = selectedMode !== null && selectedMap !== null;

        const styles = {
            modeBtnBase: "mode-btn text-left p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group",
            modeBtnActive: "bg-accent-primary/20 border-accent-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]",
            modeBtnInactive: "bg-bg-secondary-opaque border-border-primary hover:border-text-secondary hover:bg-bg-tertiary",
            modeGlow: "absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 rounded-full blur-[30px] -mr-10 -mt-10 transition-opacity",
            modeIconActive: "text-accent-primary mb-4",
            modeIconInactive: "text-text-secondary group-hover:text-text-primary mb-4",
            modeTitle: "text-xl font-bold text-text-primary mb-2",
            modeDesc: "text-text-tertiary text-sm leading-relaxed",
            modeCheck: "absolute top-4 right-4 text-accent-primary",

            mapBtnBase: "map-btn relative rounded-2xl overflow-hidden border-2 transition-all duration-300 group",
            mapBtnActive: "border-accent-primary shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-[1.02]",
            mapBtnInactive: "border-border-primary hover:border-text-secondary grayscale opacity-70 hover:grayscale-0 hover:opacity-100",
            mapImgWrapper: "aspect-video w-full",
            mapImg: "w-full h-full object-cover",
            mapOverlay: "absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent flex flex-col justify-end p-4",
            mapTitle: "text-text-primary font-bold text-lg",
            mapCheckWrap: "absolute top-3 right-3 bg-accent-primary text-text-primary rounded-full p-1 shadow-lg",

            container: "flex flex-col h-full bg-bg-primary-opaque relative",
            scrollContent: "flex-1 overflow-y-auto p-6 md:p-8 space-y-10 pb-32",
            sectionBase: "animate-fade-in",
            sectionHeader: "flex items-center gap-3 mb-6",
            sectionNum: "bg-accent-primary text-text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold",
            sectionTitle: "text-2xl font-bold text-text-primary tracking-tight",
            gridWrapper: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6",

            fabArea: "absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg-primary via-bg-primary to-transparent border-t border-border-primary/50 flex justify-end transform transition-transform duration-500",
            fabBtn: "bg-accent-primary hover:bg-accent-hover text-text-primary px-10 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-[1.02] transition-all flex items-center gap-3"
        };

        const modesHTML = modes.map(mode => `
            <button data-mode="${mode.id}" class="${styles.modeBtnBase} ${selectedMode === mode.id ? styles.modeBtnActive : styles.modeBtnInactive}">
                <div class="${styles.modeGlow} ${selectedMode === mode.id ? 'opacity-100' : 'opacity-0'}"></div>
                <div class="${selectedMode === mode.id ? styles.modeIconActive : styles.modeIconInactive}">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">${mode.icon}</svg>
                </div>
                <h3 class="${styles.modeTitle}">${mode.title}</h3>
                <p class="${styles.modeDesc}">${mode.desc}</p>
                
                ${selectedMode === mode.id ? `
                <div class="${styles.modeCheck}">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                ` : ''}
            </button>
        `).join('');

        const mapsHTML = maps.map(map => `
            <button data-map="${map.id}" class="${styles.mapBtnBase} ${selectedMap === map.id ? styles.mapBtnActive : styles.mapBtnInactive}">
                <div class="${styles.mapImgWrapper}">
                    <img src="${map.image}" alt="${map.title}" class="${styles.mapImg}">
                </div>
                <div class="${styles.mapOverlay}">
                    <h3 class="${styles.mapTitle}">${map.title}</h3>
                </div>
                ${selectedMap === map.id ? `
                <div class="${styles.mapCheckWrap}">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                ` : ''}
            </button>
        `).join('');

        const playContent = `
            <div class="${styles.container}">
                
                <!-- Scrollable Content -->
                <div class="${styles.scrollContent}">
                    
                    <!-- Sección de Modo de Juego -->
                    <section class="${styles.sectionBase}" style="animation-delay: 0.1s">
                        <div class="${styles.sectionHeader}">
                            <div class="${styles.sectionNum}">1</div>
                            <h2 class="${styles.sectionTitle}">Selecciona el Modo de Juego</h2>
                        </div>
                        <div class="${styles.gridWrapper}">
                            ${modesHTML}
                        </div>
                    </section>
                    
                    <!-- Sección de Mapa -->
                    <section class="${styles.sectionBase}" style="animation-delay: 0.2s">
                        <div class="${styles.sectionHeader}">
                            <div class="${styles.sectionNum}">2</div>
                            <h2 class="${styles.sectionTitle}">Elige tu Cancha</h2>
                        </div>
                        <div class="${styles.gridWrapper}">
                            ${mapsHTML}
                        </div>
                    </section>
                    
                </div>
                
                <!-- Floating Action Bar -->
                <div class="${styles.fabArea} ${canPlay ? 'translate-y-0' : 'translate-y-full opacity-0'}">
                    <button id="btn-play" class="${styles.fabBtn}">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                        ¡Jugar Ahora!
                    </button>
                </div>

            </div>
        `;

        return MainLayout(playContent, "Jugar");
    }

    mounted() {
        if (!this.element) return;

        // Eventos para elegir Modo
        const modeBtns = this.element.querySelectorAll('.mode-btn');
        modeBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const modeId = e.currentTarget.dataset.mode;
                this.setState({ selectedMode: modeId });
            });
        });

        // Eventos para elegir Mapa
        const mapBtns = this.element.querySelectorAll('.map-btn');
        mapBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const mapId = e.currentTarget.dataset.map;
                this.setState({ selectedMap: mapId });
            });
        });

        // Evento botón jugar
        const playBtn = this.element.querySelector('#btn-play');
        if (playBtn) {
            playBtn.addEventListener('click', () => {
                const { selectedMode, selectedMap } = this.state;
                console.log(`Iniciando partida... Modo: ${selectedMode}, Mapa: ${selectedMap}`);

                // Aquí iría la redirección al motor de juego The Threejs scene!
                // navigateTo('/game');
            });
        }
    }
}