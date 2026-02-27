import { navigate } from '@/core';

export function LogInView(container) {
    container.innerHTML = `
        <div class:"auth-container">
            <h1>TILEKICK</h1>
            <form id="login-form">
                <input type="email" placeholder="Correo" required>
                <input type="password" placeholder="Contraseña" required>
                <p id="go-reset" class="link">Olvide mi contraseña</p>
                <button type="submit" class="btn-primary">Entrar</button>
            </form>
            <span>o</span>
            <!-- Botones de Google y Facebook -->
            <p>¿No tienes cuenta? <span id="go-signin" class="link">Registrate</span><p>
        </div>
    `;

    container.querySelector('login-form').addEventListeener('submit', (e) => {
        e.preventDefault();
        navigate('profile');
    });

    container.querySelector('#go-signin').addEventListeener('click', () => navigate('signin'));
    container.querySelector('#go-reset').addEventListeener('click', () => navigate('changePswd'));
}   