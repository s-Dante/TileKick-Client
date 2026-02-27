import { Component } from '@/core';
import { FeatureCard } from '@/components';

export class LandingView extends Component {
    async render() {
        // Datos para las tarjetas informativas
        const features = [
            { icon: '', title: 'Multijugador Online', description: 'Compite contra jugadores de todo el mundo en tiempo real.' },
            { icon: '', title: 'Multijugador Local', description: 'Disfruta de una partida clásica con amigos en el mismo lugar.' },
            { icon: '', title: 'Tú vs. IA', description: 'Juega contra la IA para mejorar tus habilidades.' },
            { icon: '', title: 'Ranking Mundial', description: 'Sube en la tabla y demuestra que eres el mejor kicker.' }
        ];

        const styles = {
            container: "relative min-h-screen w-full bg-bg-primary overflow-hidden font-sans",
            modelWrapper: "absolute inset-0 z-0",
            // Ahora el contenido se alinea arriba y a la izquierda
            contentWrapper: "relative z-10 flex flex-col items-start justify-start min-h-screen px-10 md:px-20 pt-24 pb-16 bg-gradient-to-b from-bg-primary/20 via-bg-primary/60 to-bg-primary",
            // Quitamos centrado
            header: "mb-10 animate-fade-in max-w-3/4",
            // Texto alineado a la izquierda
            title: "text-6xl md:text-7xl font-black text-text-primary tracking-tight mb-3 drop-shadow-2xl text-left",
            titleHighlight: "text-accent-primary",
            subtitle: "block text-accent-hover font-light italic tracking-wide text-lg md:text-xl text-left",
            playBtnWrapper: "mb-16",
            playBtn: "inline-block px-10 py-4 bg-accent-primary hover:bg-accent-hover text-text-primary text-lg font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105 active:scale-95",
            // Grid alineado a la izquierda y ocupando 3/4 del ancho
            gridWrapper: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-3/4"
        };

        return `
            <div class="${styles.container}">
                
                <div class="${styles.modelWrapper}">
                    <model-viewer 
                        src="" 
                        alt="TileKick 3D Preview"
                        auto-rotate 
                        camera-controls 
                        disable-zoom
                        style="width: 100%; height: 100%; --poster-color: transparent;"
                        shadow-intensity="1"
                        exposure="1">
                    </model-viewer>
                </div>

                <div class="${styles.contentWrapper}">
                    
                    <header class="${styles.header}">
                        <h1 class="${styles.title}">
                           TILE<span class="${styles.titleHighlight}">KICK</span>
                        </h1>
                        <span class="${styles.subtitle}">
                            ¡¡Arma tu estrategia y gana el torneo!!
                        </span>
                    </header>

                    <div class="${styles.playBtnWrapper}">
                        <a href="/auth/login" data-link class="${styles.playBtn}">
                            ¡JUGAR AHORA!
                        </a>
                    </div>

                    <div class="${styles.gridWrapper}">
                        ${features.map(f => new FeatureCard(f).render()).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    mounted() {
        console.log("LandingPage: Elementos inyectados y listos.");
    }
}