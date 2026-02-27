import { registerRoute, navigate } from '@/core';

import {
    LandingView,
    LogInView,
    SignInView,
    ChangePswdView,
    ProfileView,
    ConfigurationView,
    MainMenuView,
    RankingView,
    GameView
} from '@/views';

// Register routes
registerRoute('landing', LandingView);

registerRoute('login', LogInView);
registerRoute('signin', SignInView);
registerRoute('changePswd', ChangePswdView);

registerRoute('profile', ProfileView);
registerRoute('configuration', ConfigurationView);
registerRoute('mainMenu', MainMenuView);
registerRoute('ranking', RankingView);

registerRoute('game', GameView);

// Initialize the app
navigate('landing');