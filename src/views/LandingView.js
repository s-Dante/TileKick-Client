import { navigate } from '@core';
import { Button, LandingPageInfo } from '@/components';

export function LandingView(container) {
    container.innerHTML = `
        <h1>TILEKICK</h1>
        <p>Arma tu estrategia y gana el torneo.</p>
    `;
    const button = Button('Jugar', 'play-button', () => navigate('login'));
    container.appendChild(button);

    container.appendChild(`
        Hola
    `);

    const info = [
        LandingPageInfo('👥', 'Multijugador Online'),
        LandingPageInfo('🫂', 'Multijugador Local'),
        LandingPageInfo('🤖', 'Tu vs la IA'),
        LandingPageInfo('🏆', 'Ranking Global'),
    ];
};