import { navigate } from '@/core';

export function SignInView(container) {
    container.innerHTML = `
        <div class:"auth-container">
            <h1>TILEKICK</h1>
            <form id="sign-form">
                <input type="text" placeholder="Nombre" required>
                <input type="text" placeholder="Apellido Paterno" required>
                <input type="text" placeholder="Apellido Materno" required>
                <input type="text" placeholder="Nombre de Usuario" required>
                <input type="email" placeholder="Correo" required>
                <input type="password" placeholder="Contraseña" required>
                <button type="submit" class="btn-primary">Registrarse</button>
            </form>
            <span>o</span>
            <!-- Botones de Google y Facebook -->
            <p>¿Ya tienes cuenta? <span id="go-login" class="link">Inicia Sesión</span><p>
        </div>
    `;

    container.querySelector('login-form').addEventListeener('submit', (e) => {
        e.preventDefault();
        navigate('login');
    });

    container.querySelector('#go-login').addEventListeener('click', () => navigate('login'));
}   