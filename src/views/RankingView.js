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

        const rankingContent = `
            <div class="h-full flex flex-col p-8 bg-gray-900/40 relative overflow-hidden">
                <!-- Efectos de fondo -->
                <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                
                <!-- Encabezado del Ranking -->
                <div class="flex items-center justify-between mb-8 z-10 border-b border-gray-700/50 pb-6">
                    <div>
                        <ul class="flex gap-6 text-sm font-medium">
                            <li><button class="text-blue-400 border-b-2 border-blue-400 pb-1">Global</button></li>
                            <li><button class="text-gray-400 hover:text-white transition-colors pb-1">Amigos</button></li>
                        </ul>
                    </div>
                    <!-- Stats Resumen -->
                    <div class="hidden md:flex gap-4">
                        <div class="bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700 shadow-sm flex items-center gap-2">
                            <span class="text-gray-400 text-xs">Jugadores Activos</span>
                            <span class="text-white font-bold">12,458</span>
                        </div>
                    </div>
                </div>

                <!-- Lista de Jugadores -->
                <div class="flex-1 overflow-y-auto pr-2 custom-scrollbar z-10">
                    <div class="space-y-4">
                        ${rankingCardsHTML}
                    </div>
                </div>
            </div>
            
            <style>
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(31, 41, 55, 0.5);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(75, 85, 99, 0.8);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(107, 114, 128, 1);
                }
            </style>
        `;

        return MainLayout(rankingContent, "Ranking Global");
    }
}