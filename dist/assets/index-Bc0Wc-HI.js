(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();class b{constructor(e){this.routes=e,this.appContainer=document.querySelector("#app"),this._initLinks(),this.route()}_pathToRegex(e){return new RegExp("^"+e.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)")+"$")}_getParams(e){const t=e.result.slice(1),s=Array.from(e.route.path.matchAll(/:(\w+)/g)).map(a=>a[1]);return Object.fromEntries(s.map((a,r)=>[a,t[r]]))}async route(){let t=this.routes.map(a=>({route:a,result:location.pathname.match(this._pathToRegex(a.path))})).find(a=>a.result!==null);t||(t={route:this.routes[0],result:[location.pathname]});const s=new t.route.view(this._getParams(t));this.appContainer.innerHTML=await s.render(),s.mounted()}navigateTo(e){history.pushState(null,null,e),this.route()}_initLinks(){document.body.addEventListener("click",e=>{e.target.matches("[data-link]")&&(e.preventDefault(),this.navigateTo(e.target.href))}),window.addEventListener("popstate",()=>this.route())}}class i{constructor(e={},t=null){this.props=e,this.state={},this.containerId=t,this.element=null}render(){return""}mounted(){}setState(e){this.state={...this.state,...e},this.update()}update(){this.element&&(this.element.innerHTML=this.render(),this.mounted())}}class m extends i{render(){return`
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
        `}mounted(){const e=this.element?this.element.querySelector("#btn-logout"):document.getElementById("btn-logout");e&&e.addEventListener("click",()=>{console.log("Cerrando sesión...")})}}class h extends i{constructor(e){super(e)}render(){const{position:e,player:t}=this.props,s=e<=3;let a="text-gray-500",r="border-gray-700/50";return e===1?(a="text-yellow-400",r="border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]"):e===2?(a="text-gray-300",r="border-gray-400/50 shadow-[0_0_15px_rgba(156,163,175,0.2)]"):e===3&&(a="text-amber-600",r="border-amber-700/50 shadow-[0_0_15px_rgba(180,83,9,0.2)]"),`
            <div class="group relative bg-gray-800/60 rounded-2xl p-4 md:p-6 border ${r} hover:bg-gray-750 transition-all duration-300 flex flex-col md:flex-row items-center gap-4 md:gap-6 overflow-visible mb-4">
                
                <!-- Número de Posición -->
                <div class="text-3xl md:text-5xl font-black ${a} w-12 text-center flex-shrink-0">
                    #${e}
                </div>

                <!-- Foto y Badge -->
                <div class="relative flex-shrink-0">
                    <img src="${t.profilePic}" alt="${t.username}" class="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 ${s?"border-current "+a:"border-gray-600"} object-cover">
                    <div class="absolute -bottom-2 -right-2 bg-gray-900 text-xs font-bold px-2 py-1 rounded-md border border-gray-700 shadow-sm flex items-center gap-1 z-10">
                        ${t.badge}
                    </div>
                </div>

                <!-- Info Principal -->
                <div class="flex-1 text-center md:text-left min-w-0">
                    <h3 class="text-xl font-bold text-white truncate">${t.fullName}</h3>
                    <p class="text-blue-400 text-sm truncate">${t.username}</p>
                </div>

                <!-- Estadísticas (Victorias/Derrotas) - "fuera pero dentro de la tarjeta" -->
                <div class="flex flex-row md:flex-col gap-4 md:gap-1 text-sm md:border-l border-gray-700 md:pl-6">
                    <div class="flex items-center gap-2">
                        <span class="text-green-400 font-bold uppercase tracking-wider text-xs">V</span>
                        <span class="text-white font-medium">${t.wins}</span>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="text-red-400 font-bold uppercase tracking-wider text-xs">D</span>
                        <span class="text-white font-medium">${t.losses}</span>
                    </div>
                </div>

                <!-- Puntaje ELO -->
                <div class="bg-gray-900/80 px-4 py-3 rounded-xl border border-gray-700 flex flex-col items-center justify-center min-w-[100px]">
                    <span class="text-gray-400 text-xs uppercase tracking-widest font-bold mb-1">ELO</span>
                    <span class="text-2xl font-black text-white ${s?a:""}">${t.elo}</span>
                </div>

                <!-- Decoración de fondo en hover -->
                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-shimmer rounded-2xl pointer-events-none"></div>
            </div>
        `}}class v extends i{render(){const{icon:e,title:t,description:s}=this.props;return`
            <div class="bg-gray-800/50 backdrop-blur-md p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all group shadow-xl">
                <div class="text-3xl mb-3 group-hover:scale-110 transition-transform">${e}</div>
                <h3 class="text-xl font-bold text-white mb-2">${t}</h3>
                <p class="text-gray-400 text-sm">${s}</p>
            </div>
        `}}class d extends i{render(){const{provider:e,icon:t,colorClass:s}=this.props;return`
            <button class="w-full flex items-center justify-center gap-3 px-4 py-2 border border-gray-700 rounded-lg text-white hover:bg-gray-800 transition-colors mb-3">
                <span class="text-xl">${t}</span>
                <span>Continuar con ${e}</span>
            </button>
        `}}class f extends i{async render(){return`
            <div class="relative min-h-screen w-full bg-gray-900 overflow-hidden font-sans">
                
                <div class="absolute inset-0 z-0">
                    <model-viewer 
                        src="" 
                        alt="TileKick 3D Preview"
                        auto-rotate 
                        camera-controls 
                        disable-zoom
                        style="width: 100%; height: 100%; --poster-color: transparent;"
                        shadow-intensity="1"
                        exposure="1">
                    </model-viewer>
                </div>

                <div class="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20 bg-gradient-to-b from-gray-900/20 via-gray-900/60 to-gray-900">
                    
                    <header class="text-center mb-16 animate-fade-in">
                        <h1 class="text-7xl md:text-8xl font-black text-white tracking-tighter mb-4 drop-shadow-2xl">
                            TILE<span class="text-blue-500">KICK</span>
                        </h1>
                        <span class="text-xl md:text-2xl text-blue-300 font-light italic tracking-wide">
                            ¡¡Arma tu estrategia y gana el torneo!!
                        </span>
                    </header>

                    <div class="mb-20">
                        <a href="/auth/login" data-link class="px-10 py-4 bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105 active:scale-95">
                            ¡JUGAR AHORA!
                        </a>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
                        ${[{icon:"👥",title:"Multijugador Online",description:"Compite contra jugadores de todo el mundo en tiempo real."},{icon:"🫂",title:"Multijugador Local",description:"Disfruta de una partida clásica con amigos en el mismo lugar."},{icon:"🤖",title:"Tú vs. IA",description:"Entrena tus tácticas contra nuestra inteligencia artificial avanzada."},{icon:"🏆",title:"Ranking Mundial",description:"Sube en la tabla y demuestra que eres el mejor kicker."}].map(t=>new v(t).render()).join("")}
                    </div>
                </div>
            </div>
        `}mounted(){console.log("LandingPage: Elementos inyectados y listos.")}}class p extends i{render(e){return`
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
                        ${e}
                    </div>
                </div>
            </div>
        `}}class x extends i{async render(){const e=new p,t=`
            <div class="animate-slide-up">
                <h2 class="text-3xl font-bold text-white mb-2 text-center md:text-left">Bienvenido de nuevo</h2>
                <p class="text-gray-400 mb-8 text-center md:text-left">Ingresa tus credenciales para acceder al tablero.</p>

                <form id="login-form" class="space-y-4">
                    <div>
                        <label class="block text-gray-400 text-sm mb-2">Usuario o Email</label>
                        <input type="text" name="identity" required
                            class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="nombre@ejemplo.com">
                    </div>

                    <div>
                        <div class="flex justify-between mb-2">
                            <label class="text-gray-400 text-sm">Contraseña</label>
                            <a href="/auth/recovery" data-link class="text-blue-500 text-sm hover:underline">¿La olvidaste?</a>
                        </div>
                        <input type="password" name="password" required
                            class="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                            placeholder="••••••••">
                    </div>

                    <button type="submit" 
                        class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 transition-all shadow-lg shadow-blue-900/20">
                        Iniciar Sesión
                    </button>
                </form>

                <div class="relative my-8">
                    <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-800"></div></div>
                    <div class="relative flex justify-center text-sm uppercase"><span class="bg-gray-900 px-2 text-gray-500 font-bold tracking-tighter">O continúa con</span></div>
                </div>

                <div class="social-container">
                    ${new d({provider:"Google",icon:"🌐"}).render()}
                    ${new d({provider:"GitHub",icon:"🐙"}).render()}
                </div>

                <p class="mt-8 text-center text-gray-500">
                    ¿Aún no tienes cuenta? 
                    <a href="/auth/signin" data-link class="text-blue-400 font-bold hover:text-blue-300 transition-colors">Regístrate</a>
                </p>
            </div>
        `;return e.render(t)}mounted(){const e=document.getElementById("login-form");e.addEventListener("submit",t=>{t.preventDefault();const s=new FormData(e);console.log("Intentando login con:",Object.fromEntries(s))})}}class y extends i{async render(){const e=new p,t=`
            <div class="animate-slide-up max-h-[90vh] overflow-y-auto pr-2 custom-scrollbar">
                <h2 class="text-3xl font-bold text-white mb-2 text-center md:text-left">Crea tu cuenta</h2>
                <p class="text-gray-400 mb-6 text-center md:text-left">Únete a la arena de TileKick hoy mismo.</p>

                <form id="signin-form" class="space-y-4">
                    <div class="flex flex-col items-center md:items-start mb-6">
                        <label class="text-gray-400 text-sm mb-2">Foto de perfil</label>
                        <div class="flex items-center gap-4">
                            <div id="avatar-preview" class="w-20 h-20 rounded-full bg-gray-800 border-2 border-dashed border-gray-600 flex items-center justify-center overflow-hidden text-2xl text-gray-500">
                                👤
                            </div>
                            <input type="file" id="avatar-input" name="avatar" accept="image/*" class="hidden">
                            <button type="button" onclick="document.getElementById('avatar-input').click()" 
                                class="bg-gray-700 hover:bg-gray-600 text-white text-xs py-2 px-4 rounded-lg transition-colors">
                                Seleccionar archivo
                            </button>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="md:col-span-2">
                            <label class="block text-gray-400 text-sm mb-1">Nombre(s)</label>
                            <input type="text" name="first_name" required class="auth-input w-full" placeholder="John">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-1">Apellido Paterno</label>
                            <input type="text" name="last_name_1" required class="auth-input w-full" placeholder="Doe">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-1">Apellido Materno</label>
                            <input type="text" name="last_name_2" class="auth-input w-full" placeholder="Smith">
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div>
                            <label class="block text-gray-400 text-sm mb-1">Nombre de usuario</label>
                            <input type="text" name="username" required class="auth-input w-full" placeholder="johndoe123">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-1">Correo Electrónico</label>
                            <input type="email" name="email" required class="auth-input w-full" placeholder="john@example.com">
                        </div>
                        <div>
                            <label class="block text-gray-400 text-sm mb-1">Contraseña</label>
                            <input type="password" name="password" required class="auth-input w-full" placeholder="••••••••">
                        </div>
                    </div>

                    <button type="submit" 
                        class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg mt-6 transition-all shadow-lg">
                        Crear Cuenta
                    </button>
                </form>

                <div class="relative my-6">
                    <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-gray-800"></div></div>
                    <div class="relative flex justify-center text-sm uppercase"><span class="bg-gray-900 px-2 text-gray-500 font-bold tracking-tighter">O regístrate con</span></div>
                </div>

                <div class="flex flex-col gap-2">
                    ${new d({provider:"Google",icon:"🌐"}).render()}
                    ${new d({provider:"GitHub",icon:"🐙"}).render()}
                </div>

                <p class="mt-6 text-center text-gray-500 pb-4">
                    ¿Ya tienes cuenta? 
                    <a href="/auth/login" data-link class="text-blue-400 font-bold hover:text-blue-300 transition-colors">Inicia sesión</a>
                </p>
            </div>
        `;return e.render(t)}mounted(){const e=document.getElementById("signin-form"),t=document.getElementById("avatar-input"),s=document.getElementById("avatar-preview");t.addEventListener("change",a=>{const r=a.target.files[0];if(r){const n=new FileReader;n.onload=u=>{s.innerHTML=`<img src="${u.target.result}" class="w-full h-full object-cover">`,s.classList.remove("border-dashed")},n.readAsDataURL(r)}}),e.addEventListener("submit",a=>{a.preventDefault();const r=new FormData(e);console.log("Datos de registro listos para enviar:",Object.fromEntries(r))})}}class w extends i{constructor(e){super(e),this.STEPS={EMAIL:1,TOKEN:2,RESET:3},this.state={currentStep:this.STEPS.EMAIL,email:""}}goToStep(e){this.setState({currentStep:e})}async render(){const e=new p;let t="";switch(this.state.currentStep){case this.STEPS.EMAIL:t=this._renderEmailStep();break;case this.STEPS.TOKEN:t=this._renderTokenStep();break;case this.STEPS.RESET:t=this._renderResetStep();break}return e.render(`
            <div class="animate-fade-in">
                <button id="btn-back-step" class="text-gray-500 hover:text-white mb-4 flex items-center gap-2 transition-colors ${this.state.currentStep===1?"invisible":""}">
                    ← Volver al paso anterior
                </button>
                ${t}
            </div>
        `)}_renderEmailStep(){return`
            <h2 class="text-3xl font-bold text-white mb-2">Recuperar acceso</h2>
            <p class="text-gray-400 mb-8">Ingresa tu correo y te enviaremos un código de seguridad.</p>
            <form id="form-email" class="space-y-4">
                <input type="email" name="email" required class="auth-input w-full" placeholder="tu-correo@ejemplo.com" value="${this.state.email}">
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 transition-all">
                    Enviar código
                </button>
            </form>
        `}_renderTokenStep(){return`
            <h2 class="text-3xl font-bold text-white mb-2">Verifica tu correo</h2>
            <p class="text-gray-400 mb-8">Hemos enviado un código a <span class="text-blue-400">${this.state.email}</span>. Ingrésalo a continuación.</p>
            <form id="form-token" class="space-y-4">
                <div class="flex justify-center gap-2">
                    <input type="text" name="token" maxlength="6" required 
                        class="auth-input w-full text-center text-2xl tracking-[1em] font-bold" 
                        placeholder="000000">
                </div>
                <button type="submit" class="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg mt-4 transition-all">
                    Verificar código
                </button>
            </form>
        `}_renderResetStep(){return`
            <h2 class="text-3xl font-bold text-white mb-2">Nueva contraseña</h2>
            <p class="text-gray-400 mb-8">Crea una contraseña segura que no uses en otros sitios.</p>
            <form id="form-reset" class="space-y-4">
                <input type="password" name="password" required class="auth-input w-full" placeholder="Nueva contraseña">
                <input type="password" name="password_confirmation" required class="auth-input w-full" placeholder="Confirma contraseña">
                <button type="submit" class="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-3 rounded-lg mt-4 transition-all shadow-lg shadow-green-900/20">
                    Actualizar contraseña
                </button>
            </form>
        `}mounted(){const e=document.getElementById("btn-back-step");e&&e.addEventListener("click",()=>{this.state.currentStep>1&&this.goToStep(this.state.currentStep-1)});const t=document.getElementById("form-email"),s=document.getElementById("form-token"),a=document.getElementById("form-reset");t&&t.addEventListener("submit",r=>{r.preventDefault(),this.state.email=new FormData(t).get("email"),console.log("Enviando código a:",this.state.email),this.goToStep(this.STEPS.TOKEN)}),s&&s.addEventListener("submit",r=>{r.preventDefault(),console.log("Verificando token..."),this.goToStep(this.STEPS.RESET)}),a&&a.addEventListener("submit",r=>{r.preventDefault(),console.log("Contraseña actualizada con éxito."),window.history.pushState({},"","/auth/login"),window.dispatchEvent(new PopStateEvent("popstate"))})}}function c(o,e=""){return`
    <div class="flex h-screen bg-gray-900 font-sans overflow-hidden">
        ${new m().render()}
        
        <!-- Contenedor Principal Flotante -->
        <main class="flex-1 p-4 md:p-8 overflow-y-auto">
            <div class="max-w-6xl mx-auto h-full flex flex-col">
                
                ${e?`
                <header class="mb-8">
                    <h2 class="text-3xl font-bold text-white tracking-tight">${e}</h2>
                </header>
                `:""}
                
                <!-- Tarjeta Flotante -->
                <div class="flex-1 bg-gray-800/50 backdrop-blur-md border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
                    ${o}
                </div>
                
            </div>
        </main>
    </div>
    `}class k extends i{constructor(e){super(e),this.state={user:{fullName:"Omar Fernández",username:"@omar_fernandez",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024d",elo:1850,badge:"Oro",stats:{gamesPlayed:142,wins:95,losses:47,goalsScored:312,goalsConceded:184}}}}render(){const{user:e}=this.state,t=`
            <div class="p-8 h-full flex flex-col gap-8 overflow-y-auto">
                
                <!-- Sección de Información del Usuario -->
                <div class="bg-gray-800/80 rounded-2xl p-6 border border-gray-700 shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                    
                    <!-- Foto de Perfil -->
                    <div class="relative">
                        <img src="${e.profilePic}" alt="Foto de perfil" class="w-32 h-32 rounded-full border-4 border-gray-700 shadow-xl object-cover">
                        <div class="absolute -bottom-2 -right-2 bg-yellow-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full border-2 border-gray-800 shadow-sm flex items-center gap-1">
                            <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ${e.badge}
                        </div>
                    </div>

                    <!-- Datos Principales -->
                    <div class="flex-1 text-center md:text-left z-10">
                        <h2 class="text-3xl font-bold text-white mb-1">${e.fullName}</h2>
                        <p class="text-blue-400 font-medium mb-4">${e.username}</p>
                        
                        <div class="inline-flex items-center gap-3 bg-gray-900/50 px-4 py-2 rounded-xl border border-gray-700">
                            <span class="text-gray-400 text-sm uppercase tracking-wider font-semibold">Puntaje ELO</span>
                            <span class="text-2xl font-black text-white">${e.elo}</span>
                        </div>
                    </div>
                </div>

                <!-- Dashboard de Estadísticas -->
                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    
                    <!-- Partidas Jugadas -->
                    <div class="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:bg-gray-700/60 transition-colors group">
                        <div class="text-blue-400 mb-2">
                            <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="text-gray-400 text-sm font-medium">Partidas Jugadas</p>
                        <p class="text-3xl font-bold text-white mt-1">${e.stats.gamesPlayed}</p>
                    </div>

                    <!-- Victorias -->
                    <div class="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:bg-gray-700/60 transition-colors group">
                        <div class="text-green-400 mb-2">
                            <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="text-gray-400 text-sm font-medium">Victorias</p>
                        <p class="text-3xl font-bold text-white mt-1">${e.stats.wins}</p>
                    </div>

                    <!-- Derrotas -->
                    <div class="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:bg-gray-700/60 transition-colors group">
                        <div class="text-red-400 mb-2">
                            <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="text-gray-400 text-sm font-medium">Derrotas</p>
                        <p class="text-3xl font-bold text-white mt-1">${e.stats.losses}</p>
                    </div>

                    <!-- Goles Anotados -->
                    <div class="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:bg-gray-700/60 transition-colors group">
                        <div class="text-blue-300 mb-2">
                            <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <p class="text-gray-400 text-sm font-medium">Goles Anotados</p>
                        <p class="text-3xl font-bold text-white mt-1">${e.stats.goalsScored}</p>
                    </div>

                    <!-- Goles Recibidos -->
                    <div class="bg-gray-800/60 rounded-xl p-5 border border-gray-700 hover:bg-gray-700/60 transition-colors group">
                        <div class="text-orange-400 mb-2">
                            <svg class="w-8 h-8 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path></svg>
                        </div>
                        <p class="text-gray-400 text-sm font-medium">Goles Recibidos</p>
                        <p class="text-3xl font-bold text-white mt-1">${e.stats.goalsConceded}</p>
                    </div>
                    
                </div>
            </div>
        `;return c(t,"Mi Perfil")}mounted(){}}class M extends i{constructor(e){super(e),this.state={activeTab:"general",settings:{language:"es",notifications:!0,musicVolume:75,sfxVolume:60,moveUp:"W",moveDown:"S",moveLeft:"A",moveRight:"D",kick:"Space"}}}render(){const{activeTab:e}=this.state,t=`
            <div class="h-full flex flex-col md:flex-row bg-gray-900/40">
                
                <!-- Menú Lateral Interno -->
                <div class="md:w-64 border-b md:border-b-0 md:border-r border-gray-700/50 p-6 flex flex-row md:flex-col gap-2 overflow-x-auto">
                    <button data-tab="general" class="tab-btn flex-none md:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium whitespace-nowrap ${e==="general"?"bg-blue-500/20 text-blue-400":"text-gray-400 hover:bg-gray-800 hover:text-white"}">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            General
                        </div>
                    </button>
                    <button data-tab="sonido" class="tab-btn flex-none md:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium whitespace-nowrap ${e==="sonido"?"bg-blue-500/20 text-blue-400":"text-gray-400 hover:bg-gray-800 hover:text-white"}">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                            Sonido
                        </div>
                    </button>
                    <button data-tab="controles" class="tab-btn flex-none md:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium whitespace-nowrap ${e==="controles"?"bg-blue-500/20 text-blue-400":"text-gray-400 hover:bg-gray-800 hover:text-white"}">
                        <div class="flex items-center gap-3">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Controles
                        </div>
                    </button>
                </div>

                <!-- Área de Contenido de la Configuración -->
                <div class="flex-1 p-8 overflow-y-auto">
                    ${this.renderTabContent()}
                </div>
                
            </div>
        `;return c(t,"Configuración")}renderTabContent(){switch(this.state.activeTab){case"general":return`
                    <div class="space-y-8 animate-fade-in">
                        <h3 class="text-xl font-bold text-white border-b border-gray-700 pb-2">Ajustes Generales</h3>
                        
                        <div class="space-y-6">
                            <!-- Idioma -->
                            <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                <div>
                                    <h4 class="text-white font-medium">Idioma de la Interfaz</h4>
                                    <p class="text-sm text-gray-400">Selecciona el idioma principal del juego.</p>
                                </div>
                                <select class="bg-gray-900 border border-gray-600 text-white rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition-colors">
                                    <option value="es" ${this.state.settings.language==="es"?"selected":""}>Español</option>
                                    <option value="en" ${this.state.settings.language==="en"?"selected":""}>Inglés</option>
                                    <option value="pt" ${this.state.settings.language==="pt"?"selected":""}>Portugués</option>
                                </select>
                            </div>

                            <!-- Notificaciones -->
                            <div class="flex items-center justify-between gap-4 bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                                <div>
                                    <h4 class="text-white font-medium">Notificaciones en el juego</h4>
                                    <p class="text-sm text-gray-400">Mostrar alertas y mensajes durante la partida.</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${this.state.settings.notifications?"checked":""}>
                                    <div class="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                `;case"sonido":return`
                    <div class="space-y-8 animate-fade-in">
                        <h3 class="text-xl font-bold text-white border-b border-gray-700 pb-2">Ajustes de Sonido</h3>
                        
                        <div class="space-y-6">
                            <!-- Música -->
                            <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 class="text-white font-medium">Música</h4>
                                        <p class="text-sm text-gray-400">Volumen de la música ambiental y de los menús.</p>
                                    </div>
                                    <span class="text-blue-400 font-bold">${this.state.settings.musicVolume}%</span>
                                </div>
                                <input type="range" min="0" max="100" value="${this.state.settings.musicVolume}" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500">
                            </div>

                            <!-- SFX -->
                            <div class="bg-gray-800/50 p-5 rounded-xl border border-gray-700">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 class="text-white font-medium">Efectos de Sonido (SFX)</h4>
                                        <p class="text-sm text-gray-400">Volumen de los golpes, la pelota y las habilidades.</p>
                                    </div>
                                    <span class="text-blue-400 font-bold">${this.state.settings.sfxVolume}%</span>
                                </div>
                                <input type="range" min="0" max="100" value="${this.state.settings.sfxVolume}" class="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-blue-500">
                            </div>
                        </div>
                    </div>
                `;case"controles":return`
                    <div class="space-y-8 animate-fade-in">
                        <h3 class="text-xl font-bold text-white border-b border-gray-700 pb-2">Asignación de Controles</h3>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            ${this.renderControlBinding("Mover Arriba",this.state.settings.moveUp)}
                            ${this.renderControlBinding("Mover Abajo",this.state.settings.moveDown)}
                            ${this.renderControlBinding("Mover Izquierda",this.state.settings.moveLeft)}
                            ${this.renderControlBinding("Mover Derecha",this.state.settings.moveRight)}
                            ${this.renderControlBinding("Patear / Acción",this.state.settings.kick)}
                        </div>
                        
                        <div class="mt-6 flex justify-end">
                            <button class="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors text-sm font-medium">Restablecer por defecto</button>
                        </div>
                    </div>
                `;default:return""}}renderControlBinding(e,t){return`
            <div class="flex items-center justify-between bg-gray-800/50 p-4 rounded-xl border border-gray-700">
                <span class="text-gray-300 font-medium">${e}</span>
                <button class="px-4 py-2 bg-gray-900 border border-gray-600 hover:border-blue-500 text-white rounded-lg transition-colors font-mono min-w-[60px] text-center">
                    ${t}
                </button>
            </div>
        `}mounted(){if(!this.element)return;this.element.querySelectorAll(".tab-btn").forEach(t=>{t.addEventListener("click",s=>{const a=s.currentTarget.dataset.tab;a&&a!==this.state.activeTab&&this.setState({activeTab:a})})})}}class $ extends i{constructor(e){super(e),this.state={selectedMode:null,selectedMap:null,modes:[{id:"online",title:"Multijugador Online",desc:"Juega contra personas de todo el mundo",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>'},{id:"local",title:"Multijugador Local",desc:"Juega con un amigo en el mismo teclado",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>'},{id:"ai",title:"Contra la IA",desc:"Practica tus habilidades contra la máquina",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>'}],maps:[{id:"stadium",title:"Estadio Principal",image:"https://images.unsplash.com/photo-1518605368461-1ee7e5b56574?auto=format&fit=crop&q=80&w=400&h=300"},{id:"street",title:"Cancha Callejera",image:"https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=400&h=300"},{id:"beach",title:"Fútbol Playa",image:"https://images.unsplash.com/photo-1510051640316-cee39563ddcb?auto=format&fit=crop&q=80&w=400&h=300"}]}}render(){const{selectedMode:e,selectedMap:t,modes:s,maps:a}=this.state,r=e!==null&&t!==null,n=s.map(l=>`
            <button data-mode="${l.id}" class="mode-btn text-left p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group ${e===l.id?"bg-blue-600/20 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]":"bg-gray-800/60 border-gray-700 hover:border-gray-500 hover:bg-gray-750"}">
                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl -mr-10 -mt-10 transition-opacity ${e===l.id?"opacity-100":"opacity-0"}"></div>
                <div class="${e===l.id?"text-blue-400":"text-gray-400 group-hover:text-gray-300"} mb-4">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">${l.icon}</svg>
                </div>
                <h3 class="text-xl font-bold text-white mb-2">${l.title}</h3>
                <p class="text-gray-400 text-sm leading-relaxed">${l.desc}</p>
                
                ${e===l.id?`
                <div class="absolute top-4 right-4 text-blue-500">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                `:""}
            </button>
        `).join(""),u=a.map(l=>`
            <button data-map="${l.id}" class="map-btn relative rounded-2xl overflow-hidden border-2 transition-all duration-300 group ${t===l.id?"border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-[1.02]":"border-gray-700 hover:border-gray-500 grayscale opacity-70 hover:grayscale-0 hover:opacity-100"}">
                <div class="aspect-video w-full">
                    <img src="${l.image}" alt="${l.title}" class="w-full h-full object-cover">
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent flex flex-col justify-end p-4">
                    <h3 class="text-white font-bold text-lg">${l.title}</h3>
                </div>
                ${t===l.id?`
                <div class="absolute top-3 right-3 bg-blue-500 text-white rounded-full p-1 shadow-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                `:""}
            </button>
        `).join(""),g=`
            <div class="flex flex-col h-full bg-gray-900/40 relative">
                
                <!-- Scrollable Content -->
                <div class="flex-1 overflow-y-auto p-6 md:p-8 space-y-10 pb-32">
                    
                    <!-- Sección de Modo de Juego -->
                    <section class="animate-fade-in" style="animation-delay: 0.1s">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                            <h2 class="text-2xl font-bold text-white tracking-tight">Selecciona el Modo de Juego</h2>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                            ${n}
                        </div>
                    </section>
                    
                    <!-- Sección de Mapa -->
                    <section class="animate-fade-in" style="animation-delay: 0.2s">
                        <div class="flex items-center gap-3 mb-6">
                            <div class="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                            <h2 class="text-2xl font-bold text-white tracking-tight">Elige tu Cancha</h2>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                            ${u}
                        </div>
                    </section>
                    
                </div>
                
                <!-- Floating Action Bar -->
                <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-gray-900 via-gray-900 to-transparent border-t border-gray-800/50 flex justify-end transform transition-transform duration-500 ${r?"translate-y-0":"translate-y-full opacity-0"}">
                    <button id="btn-play" class="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-[1.02] transition-all flex items-center gap-3">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                        ¡Jugar Ahora!
                    </button>
                </div>

            </div>
        `;return c(g,"Jugar")}mounted(){if(!this.element)return;this.element.querySelectorAll(".mode-btn").forEach(a=>{a.addEventListener("click",r=>{const n=r.currentTarget.dataset.mode;this.setState({selectedMode:n})})}),this.element.querySelectorAll(".map-btn").forEach(a=>{a.addEventListener("click",r=>{const n=r.currentTarget.dataset.map;this.setState({selectedMap:n})})});const s=this.element.querySelector("#btn-play");s&&s.addEventListener("click",()=>{const{selectedMode:a,selectedMap:r}=this.state;console.log(`Iniciando partida... Modo: ${a}, Mapa: ${r}`)})}}class j extends i{constructor(e){super(e),this.state={players:[{id:1,fullName:"Omar Fernández",username:"@omar_fernandez",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024d",elo:1850,badge:"Oro",wins:95,losses:47},{id:2,fullName:"Valentina Rojas",username:"@vale_r",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024e",elo:2100,badge:"Diamante",wins:142,losses:20},{id:3,fullName:"Carlos Silva",username:"@carlos_s",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024f",elo:1980,badge:"Platino",wins:110,losses:35},{id:4,fullName:"Sofia Gómez",username:"@sofi_gomez",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024g",elo:1720,badge:"Plata",wins:80,losses:62},{id:5,fullName:"Mateo Pérez",username:"@mateo_perez",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024h",elo:1650,badge:"Bronce",wins:65,losses:50},{id:6,fullName:"Lucía Martínez",username:"@lucia_mtz",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024i",elo:1590,badge:"Bronce",wins:50,losses:40},{id:7,fullName:"Javier López",username:"@javi_lopez",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024j",elo:1400,badge:"Hierro",wins:30,losses:80}]}}render(){const s=`
            <div class="h-full flex flex-col p-8 bg-gray-900/40 relative overflow-hidden">
                <!-- Efectos de fondo -->
                <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none"></div>
                
                <!-- Encabezado del Ranking -->
                <div class="flex items-center justify-between mb-8 z-10 border-b border-gray-700/50 pb-6">
                    <div>
                        <ul class="flex gap-6 text-sm font-medium">
                            <li><button class="text-blue-400 border-b-2 border-blue-400 pb-1">Global</button></li>
                            <li><button class="text-gray-400 hover:text-white transition-colors pb-1">Amigos</button></li>
                        </ul>
                    </div>
                    <!-- Stats Resumen -->
                    <div class="hidden md:flex gap-4">
                        <div class="bg-gray-800/80 px-4 py-2 rounded-lg border border-gray-700 shadow-sm flex items-center gap-2">
                            <span class="text-gray-400 text-xs">Jugadores Activos</span>
                            <span class="text-white font-bold">12,458</span>
                        </div>
                    </div>
                </div>

                <!-- Lista de Jugadores -->
                <div class="flex-1 overflow-y-auto pr-2 custom-scrollbar z-10">
                    <div class="space-y-4">
                        ${[...this.state.players].sort((a,r)=>r.elo-a.elo).map((a,r)=>new h({position:r+1,player:a}).render()).join("")}
                    </div>
                </div>
            </div>
            
            <style>
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(31, 41, 55, 0.5);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(75, 85, 99, 0.8);
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(107, 114, 128, 1);
                }
            </style>
        `;return c(s,"Ranking Global")}}const E=[{path:"/",view:f},{path:"/auth/login",view:x},{path:"/auth/signin",view:y},{path:"/auth/recovery",view:w},{path:"/profile",view:k},{path:"/config",view:M},{path:"/ranking",view:j},{path:"/play",view:$}];document.addEventListener("DOMContentLoaded",()=>{new b(E)});
