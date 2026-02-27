import { Component } from '@/core';

export class SocialButton extends Component {
    render() {
        const { provider, icon, colorClass } = this.props;
        return `
            <button class="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-700 rounded-lg text-white hover:bg-gray-800 transition-colors mb-3">
                <span class="text-xl">${icon}</span>
                <span>Continuar con ${provider}</span>
            </button>
        `;
    }
}