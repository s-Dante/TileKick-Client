import { Component } from '@/core';

export class AuthLayout extends Component {
    render(childHTML) {
        const styles = {
            container: "min-h-screen w-full flex flex-col md:flex-row bg-bg-primary font-sans",
            leftPane: "hidden md:flex md:w-1/2 items-center justify-center p-12 bg-gradient-to-br from-bg-tertiary to-bg-primary border-r border-border-primary",
            logoWrapper: "text-center animate-fade-in",
            title: "text-8xl font-black text-text-primary tracking-tighter mb-4",
            titleHighlight: "text-accent-primary",
            subtitle: "text-accent-hover text-xl italic font-light tracking-widest uppercase",
            rightPane: "flex-1 flex items-center justify-center p-6 md:p-16 bg-bg-primary",
            contentWrapper: "w-full max-w-md"
        };

        return `
            <div class="${styles.container}">
                <div class="${styles.leftPane}">
                    <div class="${styles.logoWrapper}">
                        <h1 class="${styles.title}">
                            TILE<span class="${styles.titleHighlight}">KICK</span>
                        </h1>
                        <!--
                        <p class="${styles.subtitle}">
                            La batalla comienza aquí
                        </p>
                        -->
                    </div>
                </div>

                <div class="${styles.rightPane}">
                    <div class="${styles.contentWrapper}">
                        ${childHTML}
                    </div>
                </div>
            </div>
        `;
    }
}