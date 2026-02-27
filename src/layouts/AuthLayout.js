import { Component } from '@/core';

export class AuthLayout extends Component {
    render(childHTML) {
        return `
            <div class="min-h-screen w-full flex flex-col md:flex-row bg-gray-900 font-sans">
                <div class="hidden md:flex md:w-1/2 items-center justify-center p-12 bg-gradient-to-br from-blue-900 to-gray-900 border-r border-gray-800">
                    <div class="text-center animate-fade-in">
                        <h1 class="text-8xl font-black text-white tracking-tighter mb-4">
                            TILE<span class="text-blue-500">KICK</span>
                        </h1>
                        <p class="text-blue-300 text-xl italic italic font-light tracking-widest uppercase">
                            La batalla comienza aquí
                        </p>
                    </div>
                </div>

                <div class="flex-1 flex items-center justify-center p-6 md:p-16 bg-gray-900">
                    <div class="w-full max-w-md">
                        ${childHTML}
                    </div>
                </div>
            </div>
        `;
    }
}