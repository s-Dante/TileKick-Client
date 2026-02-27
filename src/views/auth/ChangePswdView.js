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
        let stepContent = '';

        switch (this.state.currentStep) {
            case this.STEPS.EMAIL:
                stepContent = this._renderEmailStep();
                break;
            case this.STEPS.TOKEN:
                stepContent = this._renderTokenStep();
                break;
            case this.STEPS.RESET:
                stepContent = this._renderResetStep();
                break;
        }

        return layout.render(`
            <div class="animate-fade-in">
                <button id="btn-back-step" class="text-gray-500 hover:text-white mb-4 flex items-center gap-2 transition-colors ${this.state.currentStep === 1 ? 'invisible' : ''}">
                    ← Volver al paso anterior
                </button>
                ${stepContent}
            </div>
        `);
    }

    _renderEmailStep() {
        return `
            <h2 class="text-3xl font-bold text-white mb-2">Recuperar acceso</h2>
            <p class="text-gray-400 mb-8">Ingresa tu correo y te enviaremos un código de seguridad.</p>
            <form id="form-email" class="space-y-4">
                <input type="email" name="email" required class="auth-input w-full" placeholder="tu-correo@ejemplo.com" value="${this.state.email}">
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 transition-all">
                    Enviar código
                </button>
            </form>
        `;
    }

    _renderTokenStep() {
        return `
            <h2 class="text-3xl font-bold text-white mb-2">Verifica tu correo</h2>
            <p class="text-gray-400 mb-8">Hemos enviado un código a <span class="text-blue-400">${this.state.email}</span>. Ingrésalo a continuación.</p>
            <form id="form-token" class="space-y-4">
                <div class="flex justify-center gap-2">
                    <input type="text" name="token" maxlength="6" required 
                        class="auth-input w-full text-center text-2xl tracking-[1em] font-bold" 
                        placeholder="000000">
                </div>
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 transition-all">
                    Verificar código
                </button>
            </form>
        `;
    }

    _renderResetStep() {
        return `
            <h2 class="text-3xl font-bold text-white mb-2">Nueva contraseña</h2>
            <p class="text-gray-400 mb-8">Crea una contraseña segura que no uses en otros sitios.</p>
            <form id="form-reset" class="space-y-4">
                <input type="password" name="password" required class="auth-input w-full" placeholder="Nueva contraseña">
                <input type="password" name="password_confirmation" required class="auth-input w-full" placeholder="Confirma contraseña">
                <button type="submit" class="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg mt-4 transition-all shadow-lg shadow-green-900/20">
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