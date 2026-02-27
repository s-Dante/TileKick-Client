import { Component } from '@/core';

export class FeatureCard extends Component {
    render() {
        const { icon, title, description } = this.props;

        const styles = {
            card: "bg-bg-secondary-opaque backdrop-blur-md p-6 rounded-xl border border-border-primary hover:border-accent-primary transition-all group shadow-xl",
            icon: "text-3xl mb-3 group-hover:scale-110 transition-transform",
            title: "text-xl font-bold text-text-primary mb-2",
            desc: "text-text-secondary text-sm"
        };

        return `
            <div class="${styles.card}">
                <div class="${styles.icon}">${icon}</div>
                <h3 class="${styles.title}">${title}</h3>
                <p class="${styles.desc}">${description}</p>
            </div>
        `;
    }
}