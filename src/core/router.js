const routes = {};

export function registerRoute(name, viewFunction) {
    routes[name] = viewFunction;
}

export function navigate(routeName) {
    const app = document.getElementById('app');

    if (!routes[routeName]) {
        app.innerHTML = `<h1>404 - Page Not Found</h1><p>The route "${routeName}" does not exist.</p>`;
        return;
    }

    app.innerHTML = '';
    routes[routeName](app);
}