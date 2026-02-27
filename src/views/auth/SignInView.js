import { Component } from '@/core';
import { AuthLayout } from '@/layouts';
import { SocialButton } from '@/components';

export class SignInView extends Component {
    async render() {
        const layout = new AuthLayout();
        
        const signInFormHTML = `
            <div class="animate-slide-up max-h-[90vh] overflow-y-auto pr-2 custom-scrollbar">
                <h2 class="text-3xl font-bold text-white mb-2 text-center md:text-left">Crea tu cuenta</h2>
                <p class="text-gray-400 mb-6 text-center md:text-left">Únete a la arena de TileKick hoy mismo.</p>

                <form id="signin-form" class="space-y-4">
                    <div class="flex flex-col items-center md:items-start mb-6">
                        <label class="text-gray-400 text-sm mb-2">Foto de perfil</label>
                        <div class="flex items-center gap-4">
                            <div id="avatar-preview" class="w-20 h-20 rounded-full bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center overflow-hidden text-2xl text-gray-500">
                                👤
                            </div>
                            <input type="file" id="avatar-input" name="avatar" accept="image/*" class="hidden">
                            <button type="button" onclick="document.getElementById('avatar-input').click()" 
                                class="bg-gray-700 hover:bg-gray-600 text-white text-xs py-2 px-4 rounded-lg transition-colors">
                                Seleccionar archivo
                            </button>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="md:col-span-2">
                            <label class="block text-gray-400 text-sm mb-1">Nombre(s)</label>
                            <input type="text" name="first_name" required class="auth-input w-full" placeholder="John">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-1">Apellido Paterno</label>
                            <input type="text" name="last_name_1" required class="auth-input w-full" placeholder="Doe">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-1">Apellido Materno</label>
                            <input type="text" name="last_name_2" class="auth-input w-full" placeholder="Smith">
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div>
                            <label class="block text-gray-400 text-sm mb-1">Nombre de usuario</label>
                            <input type="text" name="username" required class="auth-input w-full" placeholder="johndoe123">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-1">Correo Electrónico</label>
                            <input type="email" name="email" required class="auth-input w-full" placeholder="john@example.com">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-1">Contraseña</label>
                            <input type="password" name="password" required class="auth-input w-full" placeholder="••••••••">
                        </div>
                    </div>

                    <button type="submit" 
                        class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg mt-6 transition-all shadow-lg">
                        Crear Cuenta
                    </button>
                </form>

                <div class="relative my-6">
                    <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-800"></div></div>
                    <div class="relative flex justify-center text-sm uppercase"><span class="bg-gray-900 px-2 text-gray-500 font-bold tracking-tighter">O regístrate con</span></div>
                </div>

                <div class="flex flex-col gap-2">
                    ${new SocialButton({ provider: 'Google', icon: '🌐' }).render()}
                    ${new SocialButton({ provider: 'GitHub', icon: '🐙' }).render()}
                </div>

                <p class="mt-6 text-center text-gray-500 pb-4">
                    ¿Ya tienes cuenta? 
                    <a href="/auth/login" data-link class="text-blue-400 font-bold hover:text-blue-300 transition-colors">Inicia sesión</a>
                </p>
            </div>
        `;

        return layout.render(signInFormHTML);
    }

    mounted() {
        const form = document.getElementById('signin-form');
        const avatarInput = document.getElementById('avatar-input');
        const avatarPreview = document.getElementById('avatar-preview');

        // Lógica de Previsualización de Imagen
        avatarInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    avatarPreview.innerHTML = `<img src="${e.target.result}" class="w-full h-full object-cover">`;
                    avatarPreview.classList.remove('border-dashed');
                };
                reader.readAsDataURL(file);
            }
        });

        // Manejo del Submit
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            console.log("Datos de registro listos para enviar:", Object.fromEntries(formData));
        });
    }
}