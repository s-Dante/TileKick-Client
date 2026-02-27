import { Component } from '@/core';
import { AuthLayout } from '@/layouts';
import { SocialButton } from '@/components';

export class LogInView extends Component {
    async render() {
        const layout = new AuthLayout();
        
        const loginFormHTML = `
            <div class="animate-slide-up">
                <h2 class="text-3xl font-bold text-white mb-2 text-center md:text-left">Bienvenido de nuevo</h2>
                <p class="text-gray-400 mb-8 text-center md:text-left">Ingresa tus credenciales para acceder al tablero.</p>

                <form id="login-form" class="space-y-4">
                    <div>
                        <label class="block text-gray-400 text-sm mb-2">Usuario o Email</label>
                        <input type="text" name="identity" required
                            class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="nombre@ejemplo.com">
                    </div>

                    <div>
                        <div class="flex justify-between mb-2">
                            <label class="text-gray-400 text-sm">Contraseña</label>
                            <a href="/auth/recovery" data-link class="text-blue-500 text-sm hover:underline">¿La olvidaste?</a>
                        </div>
                        <input type="password" name="password" required
                            class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="••••••••">
                    </div>

                    <button type="submit" 
                        class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 transition-all shadow-lg shadow-blue-900/20">
                        Iniciar Sesión
                    </button>
                </form>

                <div class="relative my-8">
                    <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-800"></div></div>
                    <div class="relative flex justify-center text-sm uppercase"><span class="bg-gray-900 px-2 text-gray-500 font-bold tracking-tighter">O continúa con</span></div>
                </div>

                <div class="social-container">
                    ${new SocialButton({ provider: 'Google', icon: '🌐' }).render()}
                    ${new SocialButton({ provider: 'GitHub', icon: '🐙' }).render()}
                </div>

                <p class="mt-8 text-center text-gray-500">
                    ¿Aún no tienes cuenta? 
                    <a href="/auth/signin" data-link class="text-blue-400 font-bold hover:text-blue-300 transition-colors">Regístrate</a>
                </p>
            </div>
        `;

        return layout.render(loginFormHTML);
    }

    mounted() {
        const form = document.getElementById('login-form');
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            console.log("Intentando login con:", Object.fromEntries(formData));
        });
    }
}