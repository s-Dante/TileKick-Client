import { navigate } from '../core/router.js';
import { Button } from '../components/Button.js';

export function LandingView(container) {
    container.innerHTML = `
        <h1>TILEKICK</h1>
        <p>Arma tu estrategia y gana el torneo.</p>
    `;
    const button = Button('Jugar', 'play-button', () => navigate('login'));
    container.appendChild(button);
};