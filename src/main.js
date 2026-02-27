import './style.css';
import { Router } from '@/core';

import { LandingView } from '@/views';

import { LogInView } from '@/views';
import { SignInView } from '@/views';
import { ChangePswdView } from '@/views';

// Definición de rutas con sus respectivas clases de vista
const routes = [
    { path: "/", view: LandingView },
    { path: "/auth/login", view: LogInView },
    { path: "/auth/signin", view: SignInView },
    { path: "/auth/recovery", view: ChangePswdView },
];

// Inicializar el router
document.addEventListener("DOMContentLoaded", () => {
    new Router(routes);
});