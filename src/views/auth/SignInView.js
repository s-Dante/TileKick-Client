import { Component } from '@/core';
import { AuthLayout } from '@/layouts';
import { SocialButton } from '@/components';

export class SignInView extends Component {
    async render() {
        const layout = new AuthLayout();

        const styles = {
            container: "animate-slide-up max-h-[90vh] overflow-y-auto pr-2 custom-scrollbar",
            title: "text-3xl font-bold text-text-primary mb-2 text-center md:text-left",
            subtitle: "text-text-secondary mb-6 text-center md:text-left",
            form: "space-y-4",
            avatarGroup: "flex flex-col items-center md:items-start mb-6",
            label: "text-text-secondary text-sm mb-2",
            labelBlock: "block text-text-secondary text-sm mb-1",
            avatarPreview: "w-20 h-20 rounded-[20px] bg-bg-secondary border-2 border-dashed border-border-primary flex items-center justify-center overflow-hidden text-2xl text-text-secondary",
            avatarBtn: "bg-bg-secondary hover:bg-bg-tertiary text-text-primary text-xs py-2 px-4 border border-border-primary rounded-lg transition-colors",
            gridNames: "grid grid-cols-1 md:grid-cols-2 gap-4",
            gridColSpan2: "md:col-span-2",
            input: "auth-input w-full",
            submitBtn: "w-full bg-accent-primary hover:bg-accent-hover text-text-primary font-bold py-3 rounded-lg mt-6 transition-all shadow-lg",
            dividerContainer: "relative my-6",
            dividerLineWrapper: "absolute inset-0 flex items-center",
            dividerLine: "w-full border-t border-border-primary",
            dividerTextWrapper: "relative flex justify-center text-sm uppercase",
            dividerText: "bg-bg-primary px-2 text-text-secondary font-bold tracking-tighter",
            socialContainer: "flex flex-col gap-2",
            footerText: "mt-6 text-center text-text-secondary pb-4",
            footerLink: "text-accent-primary font-bold hover:text-accent-hover transition-colors"
        };

        const signInFormHTML = `
            <div class="${styles.container}">
                <h2 class="${styles.title}">Crea tu cuenta</h2>
                <p class="${styles.subtitle}">Únete a la arena de TileKick hoy mismo.</p>

                <form id="signin-form" class="${styles.form}">
                    <div class="${styles.avatarGroup}">
                        <label class="${styles.label}">Foto de perfil</label>
                        <div class="flex items-center gap-4">
                            <div id="avatar-preview" class="${styles.avatarPreview}">
                                <!--👤-->
                            </div>
                            <input type="file" id="avatar-input" name="avatar" accept="image/*" class="hidden">
                            <button type="button" onclick="document.getElementById('avatar-input').click()" 
                                class="${styles.avatarBtn}">
                                Seleccionar archivo
                            </button>
                        </div>
                    </div>

                    <div class="${styles.gridNames}">
                        <div class="${styles.gridColSpan2}">
                            <label class="${styles.labelBlock}">Nombre(s)</label>
                            <input type="text" name="first_name" required class="${styles.input}" placeholder="John">
                        </div>
                        <div>
                            <label class="${styles.labelBlock}">Apellido Paterno</label>
                            <input type="text" name="last_name_1" required class="${styles.input}" placeholder="Doe">
                        </div>
                        <div>
                            <label class="${styles.labelBlock}">Apellido Materno</label>
                            <input type="text" name="last_name_2" class="${styles.input}" placeholder="Smith">
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div>
                            <label class="${styles.labelBlock}">Nombre de usuario</label>
                            <input type="text" name="username" required class="${styles.input}" placeholder="johndoe123">
                        </div>
                        <div>
                            <label class="${styles.labelBlock}">Correo Electrónico</label>
                            <input type="email" name="email" required class="${styles.input}" placeholder="john@example.com">
                        </div>
                        <div>
                            <label class="${styles.labelBlock}">Contraseña</label>
                            <input type="password" name="password" required class="${styles.input}" placeholder="••••••••">
                        </div>
                    </div>

                    <button type="submit" class="${styles.submitBtn}">
                        Crear Cuenta
                    </button>
                </form>

                <!-- Social Buttons 
                <div class="${styles.dividerContainer}">
                    <div class="${styles.dividerLineWrapper}"><div class="${styles.dividerLine}"></div></div>
                    <div class="${styles.dividerTextWrapper}"><span class="${styles.dividerText}">O regístrate con</span></div>
                </div>

                <div class="${styles.socialContainer}">
                    ${new SocialButton({ provider: 'Google', icon: '🌐' }).render()}
                    ${new SocialButton({ provider: 'GitHub', icon: '🐙' }).render()}
                </div>
                -->

                <p class="${styles.footerText}">
                    ¿Ya tienes cuenta? 
                    <a href="/auth/login" data-link class="${styles.footerLink}">Inicia sesión</a>
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