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
        let positionColor = 'text-gray-500';
        let borderColor = 'border-gray-700/50';

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

        return `
            <div class="group relative bg-gray-800/60 rounded-2xl p-4 md:p-6 border ${borderColor} hover:bg-gray-750 transition-all duration-300 flex flex-col md:flex-row items-center gap-4 md:gap-6 overflow-visible mb-4">
                
                <!-- Número de Posición -->
                <div class="text-3xl md:text-5xl font-black ${positionColor} w-12 text-center flex-shrink-0">
                    #${position}
                </div>

                <!-- Foto y Badge -->
                <div class="relative flex-shrink-0">
                    <img src="${player.profilePic}" alt="${player.username}" class="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 ${isTop3 ? 'border-current ' + positionColor : 'border-gray-600'} object-cover">
                    <div class="absolute -bottom-2 -right-2 bg-gray-900 text-xs font-bold px-2 py-1 rounded-md border border-gray-700 shadow-sm flex items-center gap-1 z-10">
                        ${player.badge}
                    </div>
                </div>

                <!-- Info Principal -->
                <div class="flex-1 text-center md:text-left min-w-0">
                    <h3 class="text-xl font-bold text-white truncate">${player.fullName}</h3>
                    <p class="text-blue-400 text-sm truncate">${player.username}</p>
                </div>

                <!-- Estadísticas (Victorias/Derrotas) - "fuera pero dentro de la tarjeta" -->
                <div class="flex flex-row md:flex-col gap-4 md:gap-1 text-sm md:border-l border-gray-700 md:pl-6">
                    <div class="flex items-center gap-2">
                        <span class="text-green-400 font-bold uppercase tracking-wider text-xs">V</span>
                        <span class="text-white font-medium">${player.wins}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-red-400 font-bold uppercase tracking-wider text-xs">D</span>
                        <span class="text-white font-medium">${player.losses}</span>
                    </div>
                </div>

                <!-- Puntaje ELO -->
                <div class="bg-gray-900/80 px-4 py-3 rounded-xl border border-gray-700 flex flex-col items-center justify-center min-w-[100px]">
                    <span class="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">ELO</span>
                    <span class="text-2xl font-black text-white ${isTop3 ? positionColor : ''}">${player.elo}</span>
                </div>

                <!-- Decoración de fondo en hover -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer rounded-2xl pointer-events-none"></div>
            </div>
        `;
    }
}
