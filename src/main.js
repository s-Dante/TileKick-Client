import './style.css';
import '@google/model-viewer';
import { Router } from '@/core';

import { LandingView } from '@/views';

import { LogInView } from '@/views';
import { SignInView } from '@/views';
import { ChangePswdView } from '@/views';
import { ProfileView } from '@/views';
import { ConfigurationView } from '@/views';
import { RankingView } from '@/views';
import { PlaySelectionView } from '@/views';

// Definición de rutas con sus respectivas clases de vista
const routes = [
    { path: "/", view: LandingView },
    { path: "/auth/login", view: LogInView },
    { path: "/auth/signin", view: SignInView },
    { path: "/auth/recovery", view: ChangePswdView },
    { path: "/profile", view: ProfileView },
    { path: "/config", view: ConfigurationView },
    { path: "/ranking", view: RankingView },
    { path: "/play", view: PlaySelectionView },
];

// Inicializar el router
document.addEventListener("DOMContentLoaded", () => {
    new Router(routes);
});