import { Component } from '@/core';
import { FeatureCard } from '@/components';

export class LandingView extends Component {
    async render() {
        const features = [
            { icon: '', title: 'Multijugador Online', description: 'Compite contra jugadores de todo el mundo en tiempo real.' },
            { icon: '', title: 'Multijugador Local', description: 'Disfruta de una partida clásica con amigos en el mismo lugar.' },
            { icon: '', title: 'Tú vs. IA', description: 'Juega contra la IA para mejorar tus habilidades.' },
            { icon: '', title: 'Ranking Mundial', description: 'Sube en la tabla y demuestra que eres el mejor kicker.' }
        ];

        const styles = {
            container: "relative min-h-screen w-full bg-bg-base overflow-hidden font-sans",
            modelWrapper: "absolute inset-0 z-0",
            contentWrapper: "relative z-10 flex flex-col items-start justify-start min-h-screen px-10 md:px-20 pt-24 pb-16 bg-gradient-to-b from-bg-base/20 via-bg-base/60 to-bg-base",
            header: "mb-25 animate-fade-in max-w-3/4",
            title: "text-6xl md:text-9xl font-black text-text-base tracking-tight mb-3 drop-shadow-2xl text-left",
            titleHighlight: "text-accent1-base",
            subtitle: "block text-7xl text-text-base font-light italic tracking-wide text-lg md:text-xl text-left",
            playBtnWrapper: "mb-16 mt-5",
            playBtn: "inline-block px-10 py-4 bg-primary-base hover:bg-primary-light text-text-base text-lg font-bold rounded-full transition-all hover:scale-105 active:scale-95",
            gridWrapper: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-3/4"
        };

        return `
            <div class="${styles.container}">
                
                <div class="${styles.modelWrapper}">
                    <model-viewer 
                        src="/modelos/LandingPage/chess.glb" 
                        alt="TileKick 3D Preview"
                        auto-rotate
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