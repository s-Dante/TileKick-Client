export class Router {
    constructor(routes) {
        this.routes = routes;
        this.appContainer = document.querySelector("#app");
        
        this._initLinks();

        this.route();
    }

    _pathToRegex(path) {
        return new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");
    }

    _getParams(match) {
        const values = match.result.slice(1);
        const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);
        return Object.fromEntries(keys.map((key, i) => [key, values[i]]));
    }

    async route() {
        const potentialMatches = this.routes.map(route => ({
            route: route,
            result: location.pathname.match(this._pathToRegex(route.path))
        }));

        let match = potentialMatches.find(m => m.result !== null);

        if (!match) {
            match = { route: this.routes[0], result: [location.pathname] };
        }

        const view = new match.route.view(this._getParams(match));
        
        this.appContainer.innerHTML = await view.render();
        
        view.mounted();
    }

    navigateTo(url) {
        history.pushState(null, null, url);
        this.route();
    }

    _initLinks() {
        document.body.addEventListener("click", e => {
            if (e.target.matches("[data-link]")) {
                e.preventDefault();
                this.navigateTo(e.target.href);
            }
        });
        window.addEventListener("popstate", () => this.route());
    }
}