import { Component } from '@/core';
import { AuthLayout } from '@/layouts';

export class ChangePswdView extends Component {
    constructor(params) {
        super(params);
        this.STEPS = {
            EMAIL: 1,
            TOKEN: 2,
            RESET: 3
        };
        this.state = {
            currentStep: this.STEPS.EMAIL,
            email: ''
        };
    }

    goToStep(step) {
        this.setState({ currentStep: step });
    }

    async render() {
        const layout = new AuthLayout();

        const styles = {
            container: "animate-fade-in",
            backBtn: "text-text-dark hover:text-text-base mb-4 flex items-center gap-2 transition-colors",
            title: "text-3xl font-bold text-text-base mb-2",
            subtitle: "text-text-dark mb-8",
            form: "space-y-4",
            input: "auth-input w-full",
            inputToken: "auth-input w-full text-center text-2xl tracking-[1em] font-bold",
            submitBtn: "w-full bg-accent1-base hover:bg-accent1-dark text-text-base font-bold py-3 rounded-lg mt-4 transition-all",
            submitBtnSuccess: "w-full bg-alert-success hover:opacity-90 text-text-base font-bold py-3 rounded-lg mt-4 transition-all shadow-lg",
            highlight: "text-accent1-base"
        };

        let stepContent = '';

        switch (this.state.currentStep) {
            case this.STEPS.EMAIL:
                stepContent = this._renderEmailStep(styles);
                break;
            case this.STEPS.TOKEN:
                stepContent = this._renderTokenStep(styles);
                break;
            case this.STEPS.RESET:
                stepContent = this._renderResetStep(styles);
                break;
        }

        return layout.render(`
            <div class="${styles.container}">
                <button id="btn-back-step" class="${styles.backBtn} ${this.state.currentStep === 1 ? 'invisible' : ''}">
                    ← Volver al paso anterior
                </button>
                ${stepContent}
            </div>
        `);
    }

    _renderEmailStep(styles) {
        return `
            <h2 class="${styles.title}">Recuperar acceso</h2>
            <p class="${styles.subtitle}">Ingresa tu correo y te enviaremos un código de seguridad.</p>
            <form id="form-email" class="${styles.form}">
                <input type="email" name="email" required class="${styles.input}" placeholder="tu-correo@ejemplo.com" value="${this.state.email}">
                <button type="submit" class="${styles.submitBtn}">
                    Enviar código
                </button>
            </form>
        `;
    }

    _renderTokenStep(styles) {
        return `
            <h2 class="${styles.title}">Verifica tu correo</h2>
            <p class="${styles.subtitle}">Hemos enviado un código a <span class="${styles.highlight}">${this.state.email}</span>. Ingrésalo a continuación.</p>
            <form id="form-token" class="${styles.form}">
                <div class="flex justify-center gap-2">
                    <input type="text" name="token" maxlength="6" required 
                        class="${styles.inputToken}" 
                        placeholder="000000">
                </div>
                <button type="submit" class="${styles.submitBtn}">
                    Verificar código
                </button>
            </form>
        `;
    }

    _renderResetStep(styles) {
        return `
            <h2 class="${styles.title}">Nueva contraseña</h2>
            <p class="${styles.subtitle}">Crea una contraseña segura que no uses en otros sitios.</p>
            <form id="form-reset" class="${styles.form}">
                <input type="password" name="password" required class="${styles.input}" placeholder="Nueva contraseña">
                <input type="password" name="password_confirmation" required class="${styles.input}" placeholder="Confirma contraseña">
                <button type="submit" class="${styles.submitBtnSuccess}">
                    Actualizar contraseña
                </button>
            </form>
        `;
    }

    mounted() {
        const btnBack = document.getElementById('btn-back-step');
        if (btnBack) {
            btnBack.addEventListener('click', () => {
                if (this.state.currentStep > 1) this.goToStep(this.state.currentStep - 1);
            });
        }

        const formEmail = document.getElementById('form-email');
        const formToken = document.getElementById('form-token');
        const formReset = document.getElementById('form-reset');

        if (formEmail) {
            formEmail.addEventListener('submit', (e) => {
                e.preventDefault();
                this.state.email = new FormData(formEmail).get('email');
                console.log("Enviando código a:", this.state.email);
                this.goToStep(this.STEPS.TOKEN);
            });
        }

        if (formToken) {
            formToken.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log("Verificando token...");
                this.goToStep(this.STEPS.RESET);
            });
        }

        if (formReset) {
            formReset.addEventListener('submit', (e) => {
                e.preventDefault();
                console.log("Contraseña actualizada con éxito.");
                window.history.pushState({}, "", "/auth/login");
                window.dispatchEvent(new PopStateEvent('popstate'));
            });
        }
    }
}