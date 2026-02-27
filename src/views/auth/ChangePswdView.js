import { navigate } from '@/core';

export function ChangePswdView(container) {
    container.innerHTML = `
        <div class:"auth-container">
            <h1>TILEKICK</h1>
            <form id="changePswd-form">
                <input type="email" placeholder="Correo" required>
                <button type="submit" class="btn-primary">Enviar Token</button>
            </form>
            <!-- Los otros apartados de, escribir token enviado al correo y el de resetear la contraseña -->
        </div>
    `;

    container.querySelector('login-form').addEventListeener('submit', (e) => {
        e.preventDefault();
        navigate('login');
    });

    container.querySelector('#go-signin').addEventListeener('click', () => navigate('signin'));
    container.querySelector('#go-reset').addEventListeener('click', () => navigate('changePswd'));
}   