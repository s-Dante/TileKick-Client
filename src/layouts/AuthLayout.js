import { Component } from '@/core';

export class AuthLayout extends Component {
    render(childHTML) {
        const styles = {
            container: "min-h-screen w-full flex flex-col md:flex-row bg-bg-base font-sans",
            leftPane: "hidden md:flex md:w-2/4 items-center justify-end p-16 bg-gradient-to-br from-bg-tertiary via-bg-primary to-bg-base relative overflow-hidden",
            logoWrapper: "text-left max-w-lg animate-fade-in",
            title: "text-7xl lg:text-8xl font-black text-text-base tracking-tight leading-none mb-6",
            titleHighlight: "text-accent1-base",
            subtitle: "text-accent1-light text-lg font-light tracking-wide uppercase",
            rightPane: "flex-1 flex items-center justify-start p-8 md:p-20 bg-bg-base",
            contentWrapper: "w-full max-w-md bg-bg-secondary/40 backdrop-blur-xl border border-border-primary rounded-3xl shadow-2xl p-8"
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