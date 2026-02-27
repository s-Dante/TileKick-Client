import { Component } from '@/core';
import { AuthLayout } from '@/layouts';
import { SocialButton } from '@/components';

export class LogInView extends Component {
    async render() {
        const layout = new AuthLayout();

        const styles = {
            container: "animate-slide-up",
            title: "text-3xl font-bold text-text-primary mb-2 text-center md:text-left",
            subtitle: "text-text-secondary mb-8 text-center md:text-left",
            form: "space-y-4",
            label: "block text-text-secondary text-sm mb-2",
            labelFlex: "text-text-secondary text-sm",
            input: "w-full bg-bg-secondary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-border-accent transition-colors",
            link: "text-accent-primary text-sm hover:text-accent-hover hover:underline",
            submitBtn: "w-full bg-accent-primary hover:bg-accent-hover text-text-primary font-bold py-3 rounded-lg mt-4 transition-all shadow-lg",
            dividerContainer: "relative my-8",
            dividerLineWrapper: "absolute inset-0 flex items-center",
            dividerLine: "w-full border-t border-border-primary",
            dividerTextWrapper: "relative flex justify-center text-sm uppercase",
            dividerText: "bg-bg-primary px-2 text-text-secondary font-bold tracking-tighter",
            socialContainer: "flex flex-col gap-3",
            footerText: "mt-8 text-center text-text-secondary",
            footerLink: "text-accent-primary font-bold hover:text-accent-hover transition-colors"
        };

        const loginFormHTML = `
            <div class="${styles.container}">
                <h2 class="${styles.title}">Bienvenido de nuevo</h2>
                <p class="${styles.subtitle}">Ingresa tus datos para iniciar sesión.</p>

                <form id="login-form" class="${styles.form}">
                    <div>
                        <label class="${styles.label}">Usuario o Email</label>
                        <input type="text" name="identity" required
                            class="${styles.input}"
                            placeholder="nombre@ejemplo.com">
                    </div>

                    <div>
                        <div class="flex justify-between mb-2">
                            <label class="${styles.labelFlex}">Contraseña</label>
                            <a href="/auth/recovery" data-link class="${styles.link}">¿La olvidaste?</a>
                        </div>
                        <input type="password" name="password" required
                            class="${styles.input}"
                            placeholder="••••••••">
                    </div>

                    <button type="submit" class="${styles.submitBtn}">
                        Iniciar Sesión
                    </button>
                </form>

                <!-- Social Buttons 
                <div class="${styles.dividerContainer}">
                    <div class="${styles.dividerLineWrapper}"><div class="${styles.dividerLine}"></div></div>
                    <div class="${styles.dividerTextWrapper}"><span class="${styles.dividerText}">O continúa con</span></div>
                </div>

                <div class="${styles.socialContainer}">
                    ${new SocialButton({ provider: 'Google', icon: '🌐' }).render()}
                    ${new SocialButton({ provider: 'GitHub', icon: '🐙' }).render()}
                </div>
                -->
                <p class="${styles.footerText}">
                    ¿Aún no tienes cuenta? 
                    <a href="/auth/signin" data-link class="${styles.footerLink}">Regístrate</a>
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