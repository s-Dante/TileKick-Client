import { Component } from '@/core';
import { FeatureCard } from '@/components';

export class LandingView extends Component {
    async render() {
        // Datos para las tarjetas informativas
        const features = [
            { icon: '👥', title: 'Multijugador Online', description: 'Compite contra jugadores de todo el mundo en tiempo real.' },
            { icon: '🫂', title: 'Multijugador Local', description: 'Disfruta de una partida clásica con amigos en el mismo lugar.' },
            { icon: '🤖', title: 'Tú vs. IA', description: 'Entrena tus tácticas contra nuestra inteligencia artificial avanzada.' },
            { icon: '🏆', title: 'Ranking Mundial', description: 'Sube en la tabla y demuestra que eres el mejor kicker.' }
        ];

        return `
            <div class="relative min-h-screen w-full bg-gray-900 overflow-hidden font-sans">
                
                <div class="absolute inset-0 z-0">
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

                <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 bg-gradient-to-b from-gray-900/20 via-gray-900/60 to-gray-900">
                    
                    <header class="text-center mb-16 animate-fade-in">
                        <h1 class="text-7xl md:text-8xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
                            TILE<span class="text-blue-500">KICK</span>
                        </h1>
                        <span class="text-xl md:text-2xl text-blue-300 font-light italic tracking-wide">
                            ¡¡Arma tu estrategia y gana el torneo!!
                        </span>
                    </header>

                    <div class="mb-20">
                        <a href="/auth/login" data-link class="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105 active:scale-95">
                            ¡JUGAR AHORA!
                        </a>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
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