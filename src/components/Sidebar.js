import { Component } from '@/core';

export class Sidebar extends Component {
    render() {
        return `
            <aside class="flex flex-col w-64 h-screen bg-gray-900 border-r border-gray-800 text-white p-6 shadow-2xl z-20 relative transition-transform duration-300">
                <!-- Logo Área -->
                <div class="flex items-center justify-center mb-10 mt-2">
                    <h1 class="text-4xl font-black text-white tracking-tighter">
                        TILE<span class="text-blue-500">KICK</span>
                    </h1>
                </div>

                <!-- Navegación -->
                <nav class="flex-1 space-y-2">
                    <ul class="space-y-3">
                        <li>
                            <a href="/profile" data-link class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-blue-400 transition-all duration-200 group">
                                <span class="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </span>
                                <span class="font-medium">Perfil</span>
                            </a>
                        </li>
                        <li>
                            <a href="/config" data-link class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-blue-400 transition-all duration-200 group">
                                <span class="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </span>
                                <span class="font-medium">Configuración</span>
                            </a>
                        </li>
                        <li>
                            <a href="/play" data-link class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-blue-400 transition-all duration-200 group">
                                <span class="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </span>
                                <span class="font-medium">Jugar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ranking" data-link class="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-800 hover:text-blue-400 transition-all duration-200 group">
                                <span class="bg-gray-800 p-2 rounded-lg group-hover:bg-blue-500/20 group-hover:text-blue-400 transition-colors">
                                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                </span>
                                <span class="font-medium">Ranking</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- Botón de Salir -->
                <div class="mt-auto pt-6 border-t border-gray-800">
                    <button id="btn-logout" class="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300 group">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        <span class="font-medium">Salir</span>
                    </button>
                </div>
            </aside>
        `;
    }

    mounted() {
        const btn = this.element ? this.element.querySelector('#btn-logout') : document.getElementById('btn-logout');
        if (btn) {
            btn.addEventListener('click', () => {
                console.log('Cerrando sesión...');
                // Aquí iría la lógica de logout, y luego redirigir a login
                // window.location.href = '/auth/login';
            });
        }
    }
}