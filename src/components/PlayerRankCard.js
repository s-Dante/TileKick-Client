import { Component } from '@/core';

export class PlayerRankCard extends Component {
    constructor(props) {
        super(props);
        // props: { position, player: { fullName, username, profilePic, elo, badge, wins, losses } }
    }

    render() {
        const { position, player } = this.props;

        // Estilos especiales para el top 3
        const isTop3 = position <= 3;
        let positionColor = 'text-text-secondary';
        let borderColor = 'border-border-primary';

        if (position === 1) {
            positionColor = 'text-yellow-400';
            borderColor = 'border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]';
        } else if (position === 2) {
            positionColor = 'text-gray-300';
            borderColor = 'border-gray-400/50 shadow-[0_0_15px_rgba(156,163,175,0.2)]';
        } else if (position === 3) {
            positionColor = 'text-amber-600';
            borderColor = 'border-amber-700/50 shadow-[0_0_15px_rgba(180,83,9,0.2)]';
        }

        const styles = {
            card: `group relative bg-bg-secondary-opaque rounded-2xl p-4 md:p-6 border ${borderColor} hover:bg-bg-tertiary transition-all duration-300 flex flex-col md:flex-row items-center gap-4 md:gap-6 overflow-visible mb-4`,
            posToken: `text-3xl md:text-5xl font-black ${positionColor} w-12 text-center flex-shrink-0`,
            imgWrapper: "relative flex-shrink-0",
            profileImg: `w-16 h-16 md:w-20 md:h-20 rounded-full border-2 ${isTop3 ? 'border-current ' + positionColor : 'border-border-primary'} object-cover`,
            badge: "absolute -bottom-2 -right-2 bg-bg-primary text-xs font-bold px-2 py-1 rounded-md border border-border-primary shadow-sm flex items-center gap-1 z-10",
            infoBox: "flex-1 text-center md:text-left min-w-0",
            infoName: "text-xl font-bold text-text-primary truncate",
            infoUser: "text-accent-primary text-sm truncate",
            statsBox: "flex flex-row md:flex-col gap-4 md:gap-1 text-sm md:border-l border-border-primary md:pl-6",
            statRow: "flex items-center gap-2",
            statLabelW: "text-success font-bold uppercase tracking-wider text-xs",
            statLabelL: "text-danger font-bold uppercase tracking-wider text-xs",
            statValue: "text-text-primary font-medium",
            eloBox: "bg-bg-primary/80 px-4 py-3 rounded-xl border border-border-primary flex flex-col items-center justify-center min-w-[100px]",
            eloLabel: "text-text-secondary text-xs uppercase tracking-widest font-bold mb-1",
            eloValue: `text-2xl font-black text-text-primary ${isTop3 ? positionColor : ''}`,
            hoverGlow: "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] rounded-2xl pointer-events-none"
        };

        return `
            <div class="${styles.card}">
                
                <!-- Número de Posición -->
                <div class="${styles.posToken}">
                    #${position}
                </div>

                <!-- Foto y Badge -->
                <div class="${styles.imgWrapper}">
                    <img src="${player.profilePic}" alt="${player.username}" class="${styles.profileImg}">
                    <div class="${styles.badge}">
                        ${player.badge}
                    </div>
                </div>

                <!-- Info Principal -->
                <div class="${styles.infoBox}">
                    <h3 class="${styles.infoName}">${player.fullName}</h3>
                    <p class="${styles.infoUser}">${player.username}</p>
                </div>

                <!-- Estadísticas (Victorias/Derrotas) -->
                <div class="${styles.statsBox}">
                    <div class="${styles.statRow}">
                        <span class="${styles.statLabelW}">V</span>
                        <span class="${styles.statValue}">${player.wins}</span>
                    </div>
                    <div class="${styles.statRow}">
                        <span class="${styles.statLabelL}">D</span>
                        <span class="${styles.statValue}">${player.losses}</span>
                    </div>
                </div>

                <!-- Puntaje ELO -->
                <div class="${styles.eloBox}">
                    <span class="${styles.eloLabel}">ELO</span>
                    <span class="${styles.eloValue}">${player.elo}</span>
                </div>

                <!-- Decoración de fondo en hover -->
                <div class="${styles.hoverGlow}"></div>
            </div>
        `;
    }
}
