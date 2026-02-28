import { Component } from '@/core';

export class SocialButton extends Component {
    render() {
        const { provider, icon, colorClass } = this.props;

        const styles = {
            btn: "w-full flex items-center justify-center gap-3 px-4 py-2 border border-secondary-base rounded-lg text-text-base hover:bg-primary-base transition-colors mb-3",
            iconWrap: "text-xl"
        };

        return `
            <button class="${styles.btn}">
                <span class="${styles.iconWrap}">${icon}</span>
                <span>Continuar con ${provider}</span>
            </button>
        `;
    }
}