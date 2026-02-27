import { Component } from '@/core';

export class FeatureCard extends Component {
    render() {
        const { icon, title, description } = this.props;
        return `
            <div class="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group shadow-xl">
                <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">${icon}</div>
                <h3 class="text-xl font-bold text-white mb-2">${title}</h3>
                <p class="text-gray-400 text-sm">${description}</p>
            </div>
        `;
    }
}