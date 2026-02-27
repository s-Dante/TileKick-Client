import { Component } from '@/core';
import { MainLayout } from '@/layouts/MainLayout.js';
import { PlayerRankCard } from '@/components';

export class RankingView extends Component {
    constructor(props) {
        super(props);

        // Datos de prueba (Mock)
        this.state = {
            players: [
                { id: 1, fullName: "Omar Fernández", username: "@omar_fernandez", profilePic: "https://i.pravatar.cc/150?u=a042581f4e29026024d", elo: 1850, badge: "Oro", wins: 95, losses: 47 },
                { id: 2, fullName: "Valentina Rojas", username: "@vale_r", profilePic: "https://i.pravatar.cc/150?u=a042581f4e29026024e", elo: 2100, badge: "Diamante", wins: 142, losses: 20 },
                { id: 3, fullName: "Carlos Silva", username: "@carlos_s", profilePic: "https://i.pravatar.cc/150?u=a042581f4e29026024f", elo: 1980, badge: "Platino", wins: 110, losses: 35 },
                { id: 4, fullName: "Sofia Gómez", username: "@sofi_gomez", profilePic: "https://i.pravatar.cc/150?u=a042581f4e29026024g", elo: 1720, badge: "Plata", wins: 80, losses: 62 },
                { id: 5, fullName: "Mateo Pérez", username: "@mateo_perez", profilePic: "https://i.pravatar.cc/150?u=a042581f4e29026024h", elo: 1650, badge: "Bronce", wins: 65, losses: 50 },
                { id: 6, fullName: "Lucía Martínez", username: "@lucia_mtz", profilePic: "https://i.pravatar.cc/150?u=a042581f4e29026024i", elo: 1590, badge: "Bronce", wins: 50, losses: 40 },
                { id: 7, fullName: "Javier López", username: "@javi_lopez", profilePic: "https://i.pravatar.cc/150?u=a042581f4e29026024j", elo: 1400, badge: "Hierro", wins: 30, losses: 80 },
            ]
        };
    }

    render() {
        // Ordenar jugadores por ELO de mayor a menor
        const sortedPlayers = [...this.state.players].sort((a, b) => b.elo - a.elo);

        // Generar las cards de ranking
        const rankingCardsHTML = sortedPlayers.map((player, index) => {
            const card = new PlayerRankCard({ position: index + 1, player });
            return card.render();
        }).join('');

        const styles = {
            container: "h-full flex flex-col p-8 bg-bg-primary-opaque relative overflow-hidden",
            bgGlowRight: "absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none",
            bgGlowLeft: "absolute bottom-0 left-0 w-96 h-96 bg-warning/5 rounded-full blur-[100px] pointer-events-none",
            header: "flex items-center justify-between mb-8 z-10 border-b border-border-primary/50 pb-6",
            tabList: "flex gap-6 text-sm font-medium",
            tabActive: "text-accent-primary border-b-2 border-accent-primary pb-1",
            tabInactive: "text-text-secondary hover:text-text-primary transition-colors pb-1",
            statsBox: "hidden md:flex gap-4",
            statPill: "bg-bg-secondary-opaque px-4 py-2 rounded-lg border border-border-primary shadow-sm flex items-center gap-2",
            statLabel: "text-text-secondary text-xs",
            statValue: "text-text-primary font-bold",
            listWrapper: "flex-1 overflow-y-auto pr-2 custom-scrollbar z-10",
            listSpace: "space-y-4"
        };

        const rankingContent = `
            <div class="${styles.container}">
                <!-- Efectos de fondo -->
                <div class="${styles.bgGlowRight}"></div>
                <div class="${styles.bgGlowLeft}"></div>
                
                <!-- Encabezado del Ranking -->
                <div class="${styles.header}">
                    <div>
                        <ul class="${styles.tabList}">
                            <li><button class="${styles.tabActive}">Global</button></li>
                            <li><button class="${styles.tabInactive}">Amigos</button></li>
                        </ul>
                    </div>
                    <!-- Stats Resumen -->
                    <div class="${styles.statsBox}">
                        <div class="${styles.statPill}">
                            <span class="${styles.statLabel}">Jugadores Activos</span>
                            <span class="${styles.statValue}">12,458</span>
                        </div>
                    </div>
                </div>

                <!-- Lista de Jugadores -->
                <div class="${styles.listWrapper}">
                    <div class="${styles.listSpace}">
                        ${rankingCardsHTML}
                    </div>
                </div>
            </div>
        `;

        return MainLayout(rankingContent, "Ranking Global");
    }
}