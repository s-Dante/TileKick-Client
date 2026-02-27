import { Component } from '../core/Component.js';

export class Sidebar extends Component {
    render() {
        return `
            <aside class="w-64 h-screen bg-gray-800 text-white p-4">
                <nav>
                    <ul>
                        <li><a href="/" data-link class="block p-2 hover:bg-gray-700">Inicio</a></li>
                        <li><a href="/profile" data-link class="block p-2 hover:bg-gray-700">Perfil</a></li>
                    </ul>
                </nav>
                <button id="btn-logout" class="mt-4 bg-red-500 px-4 py-2 rounded">Salir</button>
            </aside>
        `;
    }

    mounted() {
        const btn = document.getElementById('btn-logout');
        if (btn) {
            btn.addEventListener('click', () => console.log('Cerrando sesión...'));
        }
    }
}