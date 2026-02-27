import { Component } from '@/core';
import { MainLayout } from '@/layouts/MainLayout.js';

export class ProfileView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                fullName: "Omar Fernández",
                username: "@omar_fernandez",
                profilePic: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
                elo: 1850,
                badge: "Oro",
                stats: {
                    gamesPlayed: 142,
                    wins: 95,
                    losses: 47,
                    goalsScored: 312,
                    goalsConceded: 184
                }
            }
        };
    }

    render() {
        const { user } = this.state;

        const profileContent = `
            <div class="p-8 h-full flex flex-col gap-8 overflow-y-auto">
                
                <!-- Sección de Información del Usuario -->
                <div class="bg-gray-800/80 rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                    
                    <!-- Foto de Perfil -->
                    <div class="relative">
                        <img src="${user.profilePic}" alt="Foto de perfil" class="w-32 h-32 rounded-full border-4 border-gray-700 shadow-xl object-cover">
                        <div class="absolute -bottom-2 -right-2 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full border-2 border-gray-800 shadow-sm flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ${user.badge}
                        </div>
                    </div>

                    <!-- Datos Principales -->
                    <div class="flex-1 text-center md:text-left z-10">
                        <h2 class="text-3xl font-bold text-white mb-1">${user.fullName}</h2>
                        <p class="text-blue-400 font-medium mb-4">${user.username}</p>
                        
                        <div class="inline-flex items-center gap-3 bg-gray-900/50 px-4 py-2 rounded-xl border border-gray-700">
                            <span class="text-gray-400 text-sm uppercase tracking-wider font-semibold">Puntaje ELO</span>
                            <span class="text-2xl font-black text-white">${user.elo}</span>
                        </div>
                    </div>
                </div>

                <!-- Dashboard de Estadísticas -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    
                    <!-- Partidas Jugadas -->
                    <div class="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:bg-gray-700/60 transition-colors group">
                        <div class="text-blue-400 mb-2">
                            <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="text-gray-400 text-sm font-medium">Partidas Jugadas</p>
                        <p class="text-3xl font-bold text-white mt-1">${user.stats.gamesPlayed}</p>
                    </div>

                    <!-- Victorias -->
                    <div class="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:bg-gray-700/60 transition-colors group">
                        <div class="text-green-400 mb-2">
                            <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="text-gray-400 text-sm font-medium">Victorias</p>
                        <p class="text-3xl font-bold text-white mt-1">${user.stats.wins}</p>
                    </div>

                    <!-- Derrotas -->
                    <div class="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:bg-gray-700/60 transition-colors group">
                        <div class="text-red-400 mb-2">
                            <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="text-gray-400 text-sm font-medium">Derrotas</p>
                        <p class="text-3xl font-bold text-white mt-1">${user.stats.losses}</p>
                    </div>

                    <!-- Goles Anotados -->
                    <div class="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:bg-gray-700/60 transition-colors group">
                        <div class="text-blue-300 mb-2">
                            <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <p class="text-gray-400 text-sm font-medium">Goles Anotados</p>
                        <p class="text-3xl font-bold text-white mt-1">${user.stats.goalsScored}</p>
                    </div>

                    <!-- Goles Recibidos -->
                    <div class="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:bg-gray-700/60 transition-colors group">
                        <div class="text-orange-400 mb-2">
                            <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path></svg>
                        </div>
                        <p class="text-gray-400 text-sm font-medium">Goles Recibidos</p>
                        <p class="text-3xl font-bold text-white mt-1">${user.stats.goalsConceded}</p>
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