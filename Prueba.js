//server.js
const express = require("express");
const path = require("path");

const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static"))); //<- Aqui supongo que debe de ser la ruta a donde esta nuesro main.js

app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html")) //<- Aqui obviamente deberia de cambiarse segun la estructura de tilekick

});

app.listen(process.env.PORT || 5060, () => {
    console.log("Server running...");
});


//indexe.js (supongo seria como nuestro main.js o routes no se)
//import Algo from "vista" //<- el hace los imports con la ruta pero como usamos vite podriamos hacer lo de los barrels y usar el imporador corto


console.log("JS is loaded");

const router = async() => {


    const routes = [
        { path: "/", view: () => console.log("Viewing LandingPage")},
        { path: "/auth/login", view: () => console.log("Viewing Login")},
    ];

    //testing routes
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };
    }

    const view = new match.route.view(getParams(match));

    document.querySelector("#app").innerHTML = await view.getHTML(); //getHML es algo que agrego en sus classes de vista y es donde pone el html que se inyecta por lo que entiendo, ademas en los constructores de sus clases usa super();
}

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) =>  {
        if (e.target.matches("[data-link]")) {
            // NOTA el data-link es algo que puso en html como esto:
            //      <a href="/" class="clase" data-link>Login</a>
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
});

window.addEventListener("popstate", router);


// Esto de aqui lo hizo en una parte 2 del tutorial, en la que agrega parametros a las rutas:
const pathToRegex = path => RegExp("^" + path.replace(/\//g, "\\/").replace( /:\w+/g, "(.+") + "$");

const getParams = match => {
    const values = match.result.slice(1);
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    console.log(Array.from(match.route.path.matchAll(/:(\w+)/g)));


    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
}

// Y ya con lo de los params permite hacer que en el constructor de sus componentes/vistas pueda pasar parametros