const routes = {};
let currentCleanup = null;

export function registerRoute(name, viewFunction) {
    routes[name] = viewFunction;
}

export function navigate(routeName) {
    const app = document.getElementById('app');

    if (!routes[routeName]) {
        // Hacer un componente de error para renderiarlo aqui
        app.innerHTML = `<h1>404 - Page Not Found</h1><p>The route "${routeName}" does not exist.</p>`;
        return;
    }

    if (currentCleanup) {
        currentCleanup();
        currentCleanup = null;
    }

    app.innerHTML = '';
    currentCleanup = routes[routeName](app);
}