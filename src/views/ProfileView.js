import { Component } from '@/core';
import { MainLayout } from '@/layouts/MainLayout.js';

export class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                fullName: "Nombre de Usuario",
                username: "@username",
                profilePic: "",
                elo: 1850,
                badge: "Oro",
                stats: {
                    gamesPlayed: 10,
                    wins: 5,
                    losses: 5,
                    goalsScored: 15,
                    goalsConceded: 5
                }
            }
        };
    }

    render() {
        const { user } = this.state;

        const styles = {
            container: "p-8 h-full flex flex-col gap-8 overflow-y-auto",
            heroSection: "bg-primary-base/80 rounded-2xl p-6 border border-secondary-base shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden",
            heroGlow: "absolute top-0 right-0 w-32 h-32 bg-accent1-base/10 rounded-full blur-3xl -mr-10 -mt-10",
            profilePicWrapper: "relative",
            profilePic: "w-32 h-32 rounded-full border-4 border-secondary-base shadow-xl object-cover",
            badge: "absolute -bottom-2 -right-2 bg-yellow-500 text-bg-primary text-xs font-bold px-3 py-1 rounded-full border-2 border-bg-secondary shadow-sm flex items-center gap-1",
            badgeIcon: "w-3 h-3",
            heroData: "flex-1 text-center md:text-left z-10",
            fullName: "text-3xl font-bold text-text-base mb-1",
            username: "text-accent1-base font-medium mb-4",
            eloBox: "inline-flex items-center gap-3 bg-bg-base/50 px-4 py-2 rounded-xl border border-secondary-base",
            eloLabel: "text-text-dark text-sm uppercase tracking-wider font-semibold",
            eloValue: "text-2xl font-black text-text-base",
            dashboardGrid: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",
            statCard: "bg-primary-base/80 rounded-xl p-5 border border-secondary-base hover:bg-secondary-base transition-colors group",
            statIconBase: "mb-2",
            statIconSvg: "w-8 h-8 group-hover:scale-110 transition-transform",
            statLabel: "text-text-dark text-sm font-medium",
            statValue: "text-3xl font-bold text-text-base mt-1"
        };

        const profileContent = `
            <div class="${styles.container}">
                
                <!-- Sección de Información del Usuario -->
                <div class="${styles.heroSection}">
                    <div class="${styles.heroGlow}"></div>
                    
                    <!-- Foto de Perfil -->
                    <div class="${styles.profilePicWrapper}">
                        <img src="${user.profilePic}" alt="Foto de perfil" class="${styles.profilePic}">
                        <div class="${styles.badge}">
                            <svg class="${styles.badgeIcon}" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ${user.badge}
                        </div>
                    </div>

                    <!-- Datos Principales -->
                    <div class="${styles.heroData}">
                        <h2 class="${styles.fullName}">${user.fullName}</h2>
                        <p class="${styles.username}">${user.username}</p>
                        
                        <div class="${styles.eloBox}">
                            <span class="${styles.eloLabel}">Puntaje</span>
                            <span class="${styles.eloValue}">${user.elo}</span>
                        </div>
                    </div>
                </div>

                <!-- Dashboard de Estadísticas -->
                <div class="${styles.dashboardGrid}">
                    
                    <!-- Partidas Jugadas -->
                    <div class="${styles.statCard}">
                        <div class="${styles.statIconBase} text-accent1-base">
                            <svg class="${styles.statIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="${styles.statLabel}">Partidas Jugadas</p>
                        <p class="${styles.statValue}">${user.stats.gamesPlayed}</p>
                    </div>

                    <!-- Victorias -->
                    <div class="${styles.statCard}">
                        <div class="${styles.statIconBase} text-alert-success">
                            <svg class="${styles.statIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="${styles.statLabel}">Victorias</p>
                        <p class="${styles.statValue}">${user.stats.wins}</p>
                    </div>

                    <!-- Derrotas -->
                    <div class="${styles.statCard}">
                        <div class="${styles.statIconBase} text-alert-error">
                            <svg class="${styles.statIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="${styles.statLabel}">Derrotas</p>
                        <p class="${styles.statValue}">${user.stats.losses}</p>
                    </div>

                    <!-- Goles Anotados -->
                    <div class="${styles.statCard}">
                        <div class="${styles.statIconBase} text-accent1-light">
                            <svg class="${styles.statIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <p class="${styles.statLabel}">Goles Anotados</p>
                        <p class="${styles.statValue}">${user.stats.goalsScored}</p>
                    </div>

                    <!-- Goles Recibidos -->
                    <div class="${styles.statCard}">
                        <div class="${styles.statIconBase} text-orange-400">
                            <svg class="${styles.statIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path></svg>
                        </div>
                        <p class="${styles.statLabel}">Goles Recibidos</p>
                        <p class="${styles.statValue}">${user.stats.goalsConceded}</p>
                    </div>
                    
                </div>
            </div>
        `;

        // Renderizamos el MainLayout y le pasamos el HTML de esta vista
        return MainLayout(profileContent, "Mi Perfil");
    }

    mounted() {
        // Inicializar interactividad específica del perfil si es necesaria
    }
}