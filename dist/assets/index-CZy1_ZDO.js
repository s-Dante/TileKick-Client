(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();class v{constructor(t){this.routes=t,this.appContainer=document.querySelector("#app"),this._initLinks(),this.route()}_pathToRegex(t){return new RegExp("^"+t.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)")+"$")}_getParams(t){const e=t.result.slice(1),a=Array.from(t.route.path.matchAll(/:(\w+)/g)).map(s=>s[1]);return Object.fromEntries(a.map((s,o)=>[s,e[o]]))}async route(){let e=this.routes.map(s=>({route:s,result:location.pathname.match(this._pathToRegex(s.path))})).find(s=>s.result!==null);e||(e={route:this.routes[0],result:[location.pathname]});const a=new e.route.view(this._getParams(e));this.appContainer.innerHTML=await a.render(),a.mounted()}navigateTo(t){history.pushState(null,null,t),this.route()}_initLinks(){document.body.addEventListener("click",t=>{t.target.matches("[data-link]")&&(t.preventDefault(),this.navigateTo(t.target.href))}),window.addEventListener("popstate",()=>this.route())}}class l{constructor(t={},e=null){this.props=t,this.state={},this.containerId=e,this.element=null}render(){return""}mounted(){}setState(t){this.state={...this.state,...t},this.update()}update(){this.element&&(this.element.innerHTML=this.render(),this.mounted())}}class g extends l{render(){const t={aside:"flex flex-col w-64 h-screen bg-bg-secondary border-r border-border-primary text-text-primary p-6 shadow-2xl z-20 relative transition-transform duration-300",logoContainer:"flex items-center justify-center mb-10 mt-2",logoText:"text-4xl font-black text-text-primary tracking-tighter",logoHighlight:"text-accent-primary",nav:"flex-1 space-y-2",ul:"space-y-3",linkBox:"flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-bg-tertiary hover:text-accent-primary transition-all duration-200 group",iconBox:"bg-bg-tertiary p-2 rounded-lg group-hover:bg-accent-primary/20 group-hover:text-accent-primary transition-colors",iconSvg:"w-5 h-5",linkLabel:"font-medium",logoutContainer:"mt-auto pt-6 border-t border-border-primary",logoutBtn:"w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-danger/10 text-danger hover:bg-danger hover:text-white transition-all duration-300 group"};return`
            <aside class="${t.aside}">
                <!-- Logo Área -->
                <div class="${t.logoContainer}">
                    <h1 class="${t.logoText}">
                        TILE<span class="${t.logoHighlight}">KICK</span>
                    </h1>
                </div>

                <!-- Navegación -->
                <nav class="${t.nav}">
                    <ul class="${t.ul}">
                        <li>
                            <a href="/profile" data-link class="${t.linkBox}">
                                <span class="${t.iconBox}">
                                    <svg class="${t.iconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </span>
                                <span class="${t.linkLabel}">Perfil</span>
                            </a>
                        </li>
                        <li>
                            <a href="/config" data-link class="${t.linkBox}">
                                <span class="${t.iconBox}">
                                    <svg class="${t.iconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </span>
                                <span class="${t.linkLabel}">Configuración</span>
                            </a>
                        </li>
                        <li>
                            <a href="/play" data-link class="${t.linkBox}">
                                <span class="${t.iconBox}">
                                    <svg class="${t.iconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                </span>
                                <span class="${t.linkLabel}">Jugar</span>
                            </a>
                        </li>
                        <li>
                            <a href="/ranking" data-link class="${t.linkBox}">
                                <span class="${t.iconBox}">
                                    <svg class="${t.iconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>
                                </span>
                                <span class="${t.linkLabel}">Ranking</span>
                            </a>
                        </li>
                    </ul>
                </nav>

                <!-- Botón de Salir -->
                <div class="${t.logoutContainer}">
                    <button id="btn-logout" class="${t.logoutBtn}">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        <span class="font-medium">Salir</span>
                    </button>
                </div>
            </aside>
        `}mounted(){const t=this.element?this.element.querySelector("#btn-logout"):document.getElementById("btn-logout");t&&t.addEventListener("click",()=>{console.log("Cerrando sesión...")})}}class h extends l{constructor(t){super(t)}render(){const{position:t,player:e}=this.props,a=t<=3;let s="text-text-secondary",o="border-border-primary";t===1?(s="text-yellow-400",o="border-yellow-500/50 shadow-[0_0_15px_rgba(234,179,8,0.2)]"):t===2?(s="text-gray-300",o="border-gray-400/50 shadow-[0_0_15px_rgba(156,163,175,0.2)]"):t===3&&(s="text-amber-600",o="border-amber-700/50 shadow-[0_0_15px_rgba(180,83,9,0.2)]");const r={card:`group relative bg-bg-secondary-opaque rounded-2xl p-4 md:p-6 border ${o} hover:bg-bg-tertiary transition-all duration-300 flex flex-col md:flex-row items-center gap-4 md:gap-6 overflow-visible mb-4`,posToken:`text-3xl md:text-5xl font-black ${s} w-12 text-center flex-shrink-0`,imgWrapper:"relative flex-shrink-0",profileImg:`w-16 h-16 md:w-20 md:h-20 rounded-full border-2 ${a?"border-current "+s:"border-border-primary"} object-cover`,badge:"absolute -bottom-2 -right-2 bg-bg-primary text-xs font-bold px-2 py-1 rounded-md border border-border-primary shadow-sm flex items-center gap-1 z-10",infoBox:"flex-1 text-center md:text-left min-w-0",infoName:"text-xl font-bold text-text-primary truncate",infoUser:"text-accent-primary text-sm truncate",statsBox:"flex flex-row md:flex-col gap-4 md:gap-1 text-sm md:border-l border-border-primary md:pl-6",statRow:"flex items-center gap-2",statLabelW:"text-success font-bold uppercase tracking-wider text-xs",statLabelL:"text-danger font-bold uppercase tracking-wider text-xs",statValue:"text-text-primary font-medium",eloBox:"bg-bg-primary/80 px-4 py-3 rounded-xl border border-border-primary flex flex-col items-center justify-center min-w-[100px]",eloLabel:"text-text-secondary text-xs uppercase tracking-widest font-bold mb-1",eloValue:`text-2xl font-black text-text-primary ${a?s:""}`,hoverGlow:"absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] rounded-2xl pointer-events-none"};return`
            <div class="${r.card}">
                
                <!-- Número de Posición -->
                <div class="${r.posToken}">
                    #${t}
                </div>

                <!-- Foto y Badge -->
                <div class="${r.imgWrapper}">
                    <img src="${e.profilePic}" alt="${e.username}" class="${r.profileImg}">
                    <div class="${r.badge}">
                        ${e.badge}
                    </div>
                </div>

                <!-- Info Principal -->
                <div class="${r.infoBox}">
                    <h3 class="${r.infoName}">${e.fullName}</h3>
                    <p class="${r.infoUser}">${e.username}</p>
                </div>

                <!-- Estadísticas (Victorias/Derrotas) -->
                <div class="${r.statsBox}">
                    <div class="${r.statRow}">
                        <span class="${r.statLabelW}">V</span>
                        <span class="${r.statValue}">${e.wins}</span>
                    </div>
                    <div class="${r.statRow}">
                        <span class="${r.statLabelL}">D</span>
                        <span class="${r.statValue}">${e.losses}</span>
                    </div>
                </div>

                <!-- Puntaje ELO -->
                <div class="${r.eloBox}">
                    <span class="${r.eloLabel}">ELO</span>
                    <span class="${r.eloValue}">${e.elo}</span>
                </div>

                <!-- Decoración de fondo en hover -->
                <div class="${r.hoverGlow}"></div>
            </div>
        `}}class x extends l{render(){const{icon:t,title:e,description:a}=this.props,s={card:"bg-bg-secondary-opaque backdrop-blur-md p-6 rounded-xl border border-border-primary hover:border-accent-primary transition-all group shadow-xl",icon:"text-3xl mb-3 group-hover:scale-110 transition-transform",title:"text-xl font-bold text-text-primary mb-2",desc:"text-text-secondary text-sm"};return`
            <div class="${s.card}">
                <div class="${s.icon}">${t}</div>
                <h3 class="${s.title}">${e}</h3>
                <p class="${s.desc}">${a}</p>
            </div>
        `}}class c extends l{render(){const{provider:t,icon:e,colorClass:a}=this.props,s={btn:"w-full flex items-center justify-center gap-3 px-4 py-2 border border-border-primary rounded-lg text-text-primary hover:bg-bg-secondary transition-colors mb-3",iconWrap:"text-xl"};return`
            <button class="${s.btn}">
                <span class="${s.iconWrap}">${e}</span>
                <span>Continuar con ${t}</span>
            </button>
        `}}class f extends l{async render(){const t=[{icon:"",title:"Multijugador Online",description:"Compite contra jugadores de todo el mundo en tiempo real."},{icon:"",title:"Multijugador Local",description:"Disfruta de una partida clásica con amigos en el mismo lugar."},{icon:"",title:"Tú vs. IA",description:"Entrena tus tácticas contra nuestra inteligencia artificial avanzada."},{icon:"",title:"Ranking Mundial",description:"Sube en la tabla y demuestra que eres el mejor kicker."}],e={container:"relative min-h-screen w-full bg-bg-primary overflow-hidden font-sans",modelWrapper:"absolute inset-0 z-0",contentWrapper:"relative z-10 flex flex-col items-start justify-start min-h-screen px-10 md:px-20 pt-24 pb-16 bg-gradient-to-b from-bg-primary/20 via-bg-primary/60 to-bg-primary",header:"mb-10 animate-fade-in max-w-3/4",title:"text-6xl md:text-7xl font-black text-text-primary tracking-tight mb-3 drop-shadow-2xl text-left",subtitle:"block text-accent-hover font-light italic tracking-wide text-lg md:text-xl text-left",playBtnWrapper:"mb-16",playBtn:"inline-block px-10 py-4 bg-accent-primary hover:bg-accent-hover text-text-primary text-lg font-bold rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-105 active:scale-95",gridWrapper:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-3/4"};return`
            <div class="${e.container}">
                
                <div class="${e.modelWrapper}">
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

                <div class="${e.contentWrapper}">
                    
                    <header class="${e.header}">
                        <h1 class="${e.title}">
                            TILEKICK
                        </h1>
                        <span class="${e.subtitle}">
                            ¡¡Arma tu estrategia y gana el torneo!!
                        </span>
                    </header>

                    <div class="${e.playBtnWrapper}">
                        <a href="/auth/login" data-link class="${e.playBtn}">
                            ¡JUGAR AHORA!
                        </a>
                    </div>

                    <div class="${e.gridWrapper}">
                        ${t.map(a=>new x(a).render()).join("")}
                    </div>
                </div>
            </div>
        `}mounted(){console.log("LandingPage: Elementos inyectados y listos.")}}class u extends l{render(t){const e={container:"min-h-screen w-full flex flex-col md:flex-row bg-bg-primary font-sans",leftPane:"hidden md:flex md:w-1/2 items-center justify-center p-12 bg-gradient-to-br from-bg-tertiary to-bg-primary border-r border-border-primary",logoWrapper:"text-center animate-fade-in",title:"text-8xl font-black text-text-primary tracking-tighter mb-4",titleHighlight:"text-accent-primary",subtitle:"text-accent-hover text-xl italic font-light tracking-widest uppercase",rightPane:"flex-1 flex items-center justify-center p-6 md:p-16 bg-bg-primary",contentWrapper:"w-full max-w-md"};return`
            <div class="${e.container}">
                <div class="${e.leftPane}">
                    <div class="${e.logoWrapper}">
                        <h1 class="${e.title}">
                            TILE<span class="${e.titleHighlight}">KICK</span>
                        </h1>
                        <p class="${e.subtitle}">
                            La batalla comienza aquí
                        </p>
                    </div>
                </div>

                <div class="${e.rightPane}">
                    <div class="${e.contentWrapper}">
                        ${t}
                    </div>
                </div>
            </div>
        `}}class y extends l{async render(){const t=new u,e={container:"animate-slide-up",title:"text-3xl font-bold text-text-primary mb-2 text-center md:text-left",subtitle:"text-text-secondary mb-8 text-center md:text-left",form:"space-y-4",label:"block text-text-secondary text-sm mb-2",labelFlex:"text-text-secondary text-sm",input:"w-full bg-bg-secondary border border-border-primary rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-border-accent transition-colors",link:"text-accent-primary text-sm hover:text-accent-hover hover:underline",submitBtn:"w-full bg-accent-primary hover:bg-accent-hover text-text-primary font-bold py-3 rounded-lg mt-4 transition-all shadow-lg",dividerContainer:"relative my-8",dividerLineWrapper:"absolute inset-0 flex items-center",dividerLine:"w-full border-t border-border-primary",dividerTextWrapper:"relative flex justify-center text-sm uppercase",dividerText:"bg-bg-primary px-2 text-text-secondary font-bold tracking-tighter",socialContainer:"flex flex-col gap-3",footerText:"mt-8 text-center text-text-secondary",footerLink:"text-accent-primary font-bold hover:text-accent-hover transition-colors"},a=`
            <div class="${e.container}">
                <h2 class="${e.title}">Bienvenido de nuevo</h2>
                <p class="${e.subtitle}">Ingresa tus credenciales para acceder al tablero.</p>

                <form id="login-form" class="${e.form}">
                    <div>
                        <label class="${e.label}">Usuario o Email</label>
                        <input type="text" name="identity" required
                            class="${e.input}"
                            placeholder="nombre@ejemplo.com">
                    </div>

                    <div>
                        <div class="flex justify-between mb-2">
                            <label class="${e.labelFlex}">Contraseña</label>
                            <a href="/auth/recovery" data-link class="${e.link}">¿La olvidaste?</a>
                        </div>
                        <input type="password" name="password" required
                            class="${e.input}"
                            placeholder="••••••••">
                    </div>

                    <button type="submit" class="${e.submitBtn}">
                        Iniciar Sesión
                    </button>
                </form>

                <div class="${e.dividerContainer}">
                    <div class="${e.dividerLineWrapper}"><div class="${e.dividerLine}"></div></div>
                    <div class="${e.dividerTextWrapper}"><span class="${e.dividerText}">O continúa con</span></div>
                </div>

                <div class="${e.socialContainer}">
                    ${new c({provider:"Google",icon:"🌐"}).render()}
                    ${new c({provider:"GitHub",icon:"🐙"}).render()}
                </div>

                <p class="${e.footerText}">
                    ¿Aún no tienes cuenta? 
                    <a href="/auth/signin" data-link class="${e.footerLink}">Regístrate</a>
                </p>
            </div>
        `;return t.render(a)}mounted(){const t=document.getElementById("login-form");t.addEventListener("submit",e=>{e.preventDefault();const a=new FormData(t);console.log("Intentando login con:",Object.fromEntries(a))})}}class $ extends l{async render(){const t=new u,e={container:"animate-slide-up max-h-[90vh] overflow-y-auto pr-2 custom-scrollbar",title:"text-3xl font-bold text-text-primary mb-2 text-center md:text-left",subtitle:"text-text-secondary mb-6 text-center md:text-left",form:"space-y-4",avatarGroup:"flex flex-col items-center md:items-start mb-6",label:"text-text-secondary text-sm mb-2",labelBlock:"block text-text-secondary text-sm mb-1",avatarPreview:"w-20 h-20 rounded-full bg-bg-secondary border-2 border-dashed border-border-primary flex items-center justify-center overflow-hidden text-2xl text-text-secondary",avatarBtn:"bg-bg-secondary hover:bg-bg-tertiary text-text-primary text-xs py-2 px-4 border border-border-primary rounded-lg transition-colors",gridNames:"grid grid-cols-1 md:grid-cols-2 gap-4",gridColSpan2:"md:col-span-2",input:"auth-input w-full",submitBtn:"w-full bg-accent-primary hover:bg-accent-hover text-text-primary font-bold py-3 rounded-lg mt-6 transition-all shadow-lg",dividerContainer:"relative my-6",dividerLineWrapper:"absolute inset-0 flex items-center",dividerLine:"w-full border-t border-border-primary",dividerTextWrapper:"relative flex justify-center text-sm uppercase",dividerText:"bg-bg-primary px-2 text-text-secondary font-bold tracking-tighter",socialContainer:"flex flex-col gap-2",footerText:"mt-6 text-center text-text-secondary pb-4",footerLink:"text-accent-primary font-bold hover:text-accent-hover transition-colors"},a=`
            <div class="${e.container}">
                <h2 class="${e.title}">Crea tu cuenta</h2>
                <p class="${e.subtitle}">Únete a la arena de TileKick hoy mismo.</p>

                <form id="signin-form" class="${e.form}">
                    <div class="${e.avatarGroup}">
                        <label class="${e.label}">Foto de perfil</label>
                        <div class="flex items-center gap-4">
                            <div id="avatar-preview" class="${e.avatarPreview}">
                                👤
                            </div>
                            <input type="file" id="avatar-input" name="avatar" accept="image/*" class="hidden">
                            <button type="button" onclick="document.getElementById('avatar-input').click()" 
                                class="${e.avatarBtn}">
                                Seleccionar archivo
                            </button>
                        </div>
                    </div>

                    <div class="${e.gridNames}">
                        <div class="${e.gridColSpan2}">
                            <label class="${e.labelBlock}">Nombre(s)</label>
                            <input type="text" name="first_name" required class="${e.input}" placeholder="John">
                        </div>
                        <div>
                            <label class="${e.labelBlock}">Apellido Paterno</label>
                            <input type="text" name="last_name_1" required class="${e.input}" placeholder="Doe">
                        </div>
                        <div>
                            <label class="${e.labelBlock}">Apellido Materno</label>
                            <input type="text" name="last_name_2" class="${e.input}" placeholder="Smith">
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div>
                            <label class="${e.labelBlock}">Nombre de usuario</label>
                            <input type="text" name="username" required class="${e.input}" placeholder="johndoe123">
                        </div>
                        <div>
                            <label class="${e.labelBlock}">Correo Electrónico</label>
                            <input type="email" name="email" required class="${e.input}" placeholder="john@example.com">
                        </div>
                        <div>
                            <label class="${e.labelBlock}">Contraseña</label>
                            <input type="password" name="password" required class="${e.input}" placeholder="••••••••">
                        </div>
                    </div>

                    <button type="submit" class="${e.submitBtn}">
                        Crear Cuenta
                    </button>
                </form>

                <div class="${e.dividerContainer}">
                    <div class="${e.dividerLineWrapper}"><div class="${e.dividerLine}"></div></div>
                    <div class="${e.dividerTextWrapper}"><span class="${e.dividerText}">O regístrate con</span></div>
                </div>

                <div class="${e.socialContainer}">
                    ${new c({provider:"Google",icon:"🌐"}).render()}
                    ${new c({provider:"GitHub",icon:"🐙"}).render()}
                </div>

                <p class="${e.footerText}">
                    ¿Ya tienes cuenta? 
                    <a href="/auth/login" data-link class="${e.footerLink}">Inicia sesión</a>
                </p>
            </div>
        `;return t.render(a)}mounted(){const t=document.getElementById("signin-form"),e=document.getElementById("avatar-input"),a=document.getElementById("avatar-preview");e.addEventListener("change",s=>{const o=s.target.files[0];if(o){const r=new FileReader;r.onload=d=>{a.innerHTML=`<img src="${d.target.result}" class="w-full h-full object-cover">`,a.classList.remove("border-dashed")},r.readAsDataURL(o)}}),t.addEventListener("submit",s=>{s.preventDefault();const o=new FormData(t);console.log("Datos de registro listos para enviar:",Object.fromEntries(o))})}}class w extends l{constructor(t){super(t),this.STEPS={EMAIL:1,TOKEN:2,RESET:3},this.state={currentStep:this.STEPS.EMAIL,email:""}}goToStep(t){this.setState({currentStep:t})}async render(){const t=new u,e={container:"animate-fade-in",backBtn:"text-text-secondary hover:text-text-primary mb-4 flex items-center gap-2 transition-colors",title:"text-3xl font-bold text-text-primary mb-2",subtitle:"text-text-secondary mb-8",form:"space-y-4",input:"auth-input w-full",inputToken:"auth-input w-full text-center text-2xl tracking-[1em] font-bold",submitBtn:"w-full bg-accent-primary hover:bg-accent-hover text-text-primary font-bold py-3 rounded-lg mt-4 transition-all",submitBtnSuccess:"w-full bg-success hover:opacity-90 text-text-primary font-bold py-3 rounded-lg mt-4 transition-all shadow-lg",highlight:"text-accent-primary"};let a="";switch(this.state.currentStep){case this.STEPS.EMAIL:a=this._renderEmailStep(e);break;case this.STEPS.TOKEN:a=this._renderTokenStep(e);break;case this.STEPS.RESET:a=this._renderResetStep(e);break}return t.render(`
            <div class="${e.container}">
                <button id="btn-back-step" class="${e.backBtn} ${this.state.currentStep===1?"invisible":""}">
                    ← Volver al paso anterior
                </button>
                ${a}
            </div>
        `)}_renderEmailStep(t){return`
            <h2 class="${t.title}">Recuperar acceso</h2>
            <p class="${t.subtitle}">Ingresa tu correo y te enviaremos un código de seguridad.</p>
            <form id="form-email" class="${t.form}">
                <input type="email" name="email" required class="${t.input}" placeholder="tu-correo@ejemplo.com" value="${this.state.email}">
                <button type="submit" class="${t.submitBtn}">
                    Enviar código
                </button>
            </form>
        `}_renderTokenStep(t){return`
            <h2 class="${t.title}">Verifica tu correo</h2>
            <p class="${t.subtitle}">Hemos enviado un código a <span class="${t.highlight}">${this.state.email}</span>. Ingrésalo a continuación.</p>
            <form id="form-token" class="${t.form}">
                <div class="flex justify-center gap-2">
                    <input type="text" name="token" maxlength="6" required 
                        class="${t.inputToken}" 
                        placeholder="000000">
                </div>
                <button type="submit" class="${t.submitBtn}">
                    Verificar código
                </button>
            </form>
        `}_renderResetStep(t){return`
            <h2 class="${t.title}">Nueva contraseña</h2>
            <p class="${t.subtitle}">Crea una contraseña segura que no uses en otros sitios.</p>
            <form id="form-reset" class="${t.form}">
                <input type="password" name="password" required class="${t.input}" placeholder="Nueva contraseña">
                <input type="password" name="password_confirmation" required class="${t.input}" placeholder="Confirma contraseña">
                <button type="submit" class="${t.submitBtnSuccess}">
                    Actualizar contraseña
                </button>
            </form>
        `}mounted(){const t=document.getElementById("btn-back-step");t&&t.addEventListener("click",()=>{this.state.currentStep>1&&this.goToStep(this.state.currentStep-1)});const e=document.getElementById("form-email"),a=document.getElementById("form-token"),s=document.getElementById("form-reset");e&&e.addEventListener("submit",o=>{o.preventDefault(),this.state.email=new FormData(e).get("email"),console.log("Enviando código a:",this.state.email),this.goToStep(this.STEPS.TOKEN)}),a&&a.addEventListener("submit",o=>{o.preventDefault(),console.log("Verificando token..."),this.goToStep(this.STEPS.RESET)}),s&&s.addEventListener("submit",o=>{o.preventDefault(),console.log("Contraseña actualizada con éxito."),window.history.pushState({},"","/auth/login"),window.dispatchEvent(new PopStateEvent("popstate"))})}}function p(i,t=""){const e=new g,a={container:"flex h-screen bg-bg-primary font-sans overflow-hidden",main:"flex-1 p-4 md:p-8 overflow-y-auto",wrapper:"max-w-6xl mx-auto h-full flex flex-col",header:"mb-8",title:"text-3xl font-bold text-text-primary tracking-tight",cardContainer:"flex-1 bg-bg-secondary-opaque backdrop-blur-md border border-border-primary/50 rounded-3xl shadow-2xl overflow-hidden flex flex-col"};return`
    <div class="${a.container}">
        ${e.render()}
        
        <!-- Contenedor Principal Flotante -->
        <main class="${a.main}">
            <div class="${a.wrapper}">
                
                ${t?`
                <header class="${a.header}">
                    <h2 class="${a.title}">${t}</h2>
                </header>
                `:""}
                
                <!-- Tarjeta Flotante -->
                <div class="${a.cardContainer}">
                    ${i}
                </div>
                
            </div>
        </main>
    </div>
    `}class k extends l{constructor(t){super(t),this.state={user:{fullName:"Omar Fernández",username:"@omar_fernandez",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024d",elo:1850,badge:"Oro",stats:{gamesPlayed:142,wins:95,losses:47,goalsScored:312,goalsConceded:184}}}}render(){const{user:t}=this.state,e={container:"p-8 h-full flex flex-col gap-8 overflow-y-auto",heroSection:"bg-bg-secondary-opaque rounded-2xl p-6 border border-border-primary shadow-lg flex flex-col md:flex-row items-center md:items-start gap-6 relative overflow-hidden",heroGlow:"absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 rounded-full blur-3xl -mr-10 -mt-10",profilePicWrapper:"relative",profilePic:"w-32 h-32 rounded-full border-4 border-border-primary shadow-xl object-cover",badge:"absolute -bottom-2 -right-2 bg-yellow-500 text-bg-primary text-xs font-bold px-3 py-1 rounded-full border-2 border-bg-secondary shadow-sm flex items-center gap-1",badgeIcon:"w-3 h-3",heroData:"flex-1 text-center md:text-left z-10",fullName:"text-3xl font-bold text-text-primary mb-1",username:"text-accent-primary font-medium mb-4",eloBox:"inline-flex items-center gap-3 bg-bg-primary/50 px-4 py-2 rounded-xl border border-border-primary",eloLabel:"text-text-secondary text-sm uppercase tracking-wider font-semibold",eloValue:"text-2xl font-black text-text-primary",dashboardGrid:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4",statCard:"bg-bg-secondary-opaque rounded-xl p-5 border border-border-primary hover:bg-bg-tertiary transition-colors group",statIconBase:"mb-2",statIconSvg:"w-8 h-8 group-hover:scale-110 transition-transform",statLabel:"text-text-secondary text-sm font-medium",statValue:"text-3xl font-bold text-text-primary mt-1"},a=`
            <div class="${e.container}">
                
                <!-- Sección de Información del Usuario -->
                <div class="${e.heroSection}">
                    <div class="${e.heroGlow}"></div>
                    
                    <!-- Foto de Perfil -->
                    <div class="${e.profilePicWrapper}">
                        <img src="${t.profilePic}" alt="Foto de perfil" class="${e.profilePic}">
                        <div class="${e.badge}">
                            <svg class="${e.badgeIcon}" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                            ${t.badge}
                        </div>
                    </div>

                    <!-- Datos Principales -->
                    <div class="${e.heroData}">
                        <h2 class="${e.fullName}">${t.fullName}</h2>
                        <p class="${e.username}">${t.username}</p>
                        
                        <div class="${e.eloBox}">
                            <span class="${e.eloLabel}">Puntaje ELO</span>
                            <span class="${e.eloValue}">${t.elo}</span>
                        </div>
                    </div>
                </div>

                <!-- Dashboard de Estadísticas -->
                <div class="${e.dashboardGrid}">
                    
                    <!-- Partidas Jugadas -->
                    <div class="${e.statCard}">
                        <div class="${e.statIconBase} text-accent-primary">
                            <svg class="${e.statIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="${e.statLabel}">Partidas Jugadas</p>
                        <p class="${e.statValue}">${t.stats.gamesPlayed}</p>
                    </div>

                    <!-- Victorias -->
                    <div class="${e.statCard}">
                        <div class="${e.statIconBase} text-success">
                            <svg class="${e.statIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="${e.statLabel}">Victorias</p>
                        <p class="${e.statValue}">${t.stats.wins}</p>
                    </div>

                    <!-- Derrotas -->
                    <div class="${e.statCard}">
                        <div class="${e.statIconBase} text-danger">
                            <svg class="${e.statIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <p class="${e.statLabel}">Derrotas</p>
                        <p class="${e.statValue}">${t.stats.losses}</p>
                    </div>

                    <!-- Goles Anotados -->
                    <div class="${e.statCard}">
                        <div class="${e.statIconBase} text-accent-hover">
                            <svg class="${e.statIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <p class="${e.statLabel}">Goles Anotados</p>
                        <p class="${e.statValue}">${t.stats.goalsScored}</p>
                    </div>

                    <!-- Goles Recibidos -->
                    <div class="${e.statCard}">
                        <div class="${e.statIconBase} text-orange-400">
                            <svg class="${e.statIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"></path></svg>
                        </div>
                        <p class="${e.statLabel}">Goles Recibidos</p>
                        <p class="${e.statValue}">${t.stats.goalsConceded}</p>
                    </div>
                    
                </div>
            </div>
        `;return p(a,"Mi Perfil")}mounted(){}}class B extends l{constructor(t){super(t),this.state={activeTab:"general",settings:{language:"es",notifications:!0,musicVolume:75,sfxVolume:60,moveUp:"W",moveDown:"S",moveLeft:"A",moveRight:"D",kick:"Space"}}}render(){const{activeTab:t}=this.state,e={container:"h-full flex flex-col md:flex-row bg-bg-primary-opaque",sidebarMenu:"md:w-64 border-b md:border-b-0 md:border-r border-border-primary/50 p-6 flex flex-row md:flex-col gap-2 overflow-x-auto",tabBtnBase:"tab-btn flex-none md:w-full text-left px-4 py-3 rounded-xl transition-all duration-200 font-medium whitespace-nowrap",tabBtnActive:"bg-accent-primary/20 text-accent-primary",tabBtnInactive:"text-text-secondary hover:bg-bg-secondary hover:text-text-primary",tabBtnContent:"flex items-center gap-3",tabIconSvg:"w-5 h-5",contentArea:"flex-1 p-8 overflow-y-auto"},a=`
            <div class="${e.container}">
                
                <!-- Menú Lateral Interno -->
                <div class="${e.sidebarMenu}">
                    <button data-tab="general" class="${e.tabBtnBase} ${t==="general"?e.tabBtnActive:e.tabBtnInactive}">
                        <div class="${e.tabBtnContent}">
                            <svg class="${e.tabIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            General
                        </div>
                    </button>
                    <button data-tab="sonido" class="${e.tabBtnBase} ${t==="sonido"?e.tabBtnActive:e.tabBtnInactive}">
                        <div class="${e.tabBtnContent}">
                            <svg class="${e.tabIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"></path></svg>
                            Sonido
                        </div>
                    </button>
                    <button data-tab="controles" class="${e.tabBtnBase} ${t==="controles"?e.tabBtnActive:e.tabBtnInactive}">
                        <div class="${e.tabBtnContent}">
                            <svg class="${e.tabIconSvg}" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            Controles
                        </div>
                    </button>
                </div>

                <!-- Área de Contenido de la Configuración -->
                <div class="${e.contentArea}">
                    ${this.renderTabContent()}
                </div>
                
            </div>
        `;return p(a,"Configuración")}renderTabContent(){const t={wrapper:"space-y-8 animate-fade-in",header:"text-xl font-bold text-text-primary border-b border-border-primary pb-2",section:"space-y-6",card:"flex flex-col md:flex-row md:items-center justify-between gap-4 bg-bg-secondary-opaque p-4 rounded-xl border border-border-primary",cardCol:"bg-bg-secondary-opaque p-5 rounded-xl border border-border-primary",cardTitle:"text-text-primary font-medium",cardDesc:"text-sm text-text-secondary",select:"bg-bg-primary border border-border-primary text-text-primary rounded-lg px-4 py-2 outline-none focus:border-accent-primary transition-colors",checkboxBg:"w-11 h-6 bg-border-primary peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-border-primary after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-accent-primary",valText:"text-accent-primary font-bold",rangeInput:"w-full h-2 bg-bg-tertiary rounded-lg appearance-none cursor-pointer accent-accent-primary",controlsGrid:"grid grid-cols-1 md:grid-cols-2 gap-4",resetBtn:"px-6 py-2 bg-bg-tertiary hover:bg-border-primary text-text-primary rounded-lg transition-colors text-sm font-medium",bindCard:"flex items-center justify-between bg-bg-secondary-opaque p-4 rounded-xl border border-border-primary",bindLabel:"text-text-tertiary font-medium",bindBtn:"px-4 py-2 bg-bg-primary border border-border-primary hover:border-accent-primary text-text-primary rounded-lg transition-colors font-mono min-w-[60px] text-center"};switch(this.state.activeTab){case"general":return`
                    <div class="${t.wrapper}">
                        <h3 class="${t.header}">Ajustes Generales</h3>
                        
                        <div class="${t.section}">
                            <!-- Idioma -->
                            <div class="${t.card}">
                                <div>
                                    <h4 class="${t.cardTitle}">Idioma de la Interfaz</h4>
                                    <p class="${t.cardDesc}">Selecciona el idioma principal del juego.</p>
                                </div>
                                <select class="${t.select}">
                                    <option value="es" ${this.state.settings.language==="es"?"selected":""}>Español</option>
                                    <option value="en" ${this.state.settings.language==="en"?"selected":""}>Inglés</option>
                                    <option value="pt" ${this.state.settings.language==="pt"?"selected":""}>Portugués</option>
                                </select>
                            </div>

                            <!-- Notificaciones -->
                            <div class="${t.card}">
                                <div>
                                    <h4 class="${t.cardTitle}">Notificaciones en el juego</h4>
                                    <p class="${t.cardDesc}">Mostrar alertas y mensajes durante la partida.</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" class="sr-only peer" ${this.state.settings.notifications?"checked":""}>
                                    <div class="${t.checkboxBg}"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                `;case"sonido":return`
                    <div class="${t.wrapper}">
                        <h3 class="${t.header}">Ajustes de Sonido</h3>
                        
                        <div class="${t.section}">
                            <!-- Música -->
                            <div class="${t.cardCol}">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 class="${t.cardTitle}">Música</h4>
                                        <p class="${t.cardDesc}">Volumen de la música ambiental y de los menús.</p>
                                    </div>
                                    <span class="${t.valText}">${this.state.settings.musicVolume}%</span>
                                </div>
                                <input type="range" min="0" max="100" value="${this.state.settings.musicVolume}" class="${t.rangeInput}">
                            </div>

                            <!-- SFX -->
                            <div class="${t.cardCol}">
                                <div class="flex items-center justify-between mb-4">
                                    <div>
                                        <h4 class="${t.cardTitle}">Efectos de Sonido (SFX)</h4>
                                        <p class="${t.cardDesc}">Volumen de los golpes, la pelota y las habilidades.</p>
                                    </div>
                                    <span class="${t.valText}">${this.state.settings.sfxVolume}%</span>
                                </div>
                                <input type="range" min="0" max="100" value="${this.state.settings.sfxVolume}" class="${t.rangeInput}">
                            </div>
                        </div>
                    </div>
                `;case"controles":return`
                    <div class="${t.wrapper}">
                        <h3 class="${t.header}">Asignación de Controles</h3>
                        
                        <div class="${t.controlsGrid}">
                            ${this.renderControlBinding("Mover Arriba",this.state.settings.moveUp,t)}
                            ${this.renderControlBinding("Mover Abajo",this.state.settings.moveDown,t)}
                            ${this.renderControlBinding("Mover Izquierda",this.state.settings.moveLeft,t)}
                            ${this.renderControlBinding("Mover Derecha",this.state.settings.moveRight,t)}
                            ${this.renderControlBinding("Patear / Acción",this.state.settings.kick,t)}
                        </div>
                        
                        <div class="mt-6 flex justify-end">
                            <button class="${t.resetBtn}">Restablecer por defecto</button>
                        </div>
                    </div>
                `;default:return""}}renderControlBinding(t,e,a){return`
            <div class="${a.bindCard}">
                <span class="${a.bindLabel}">${t}</span>
                <button class="${a.bindBtn}">
                    ${e}
                </button>
            </div>
        `}mounted(){if(!this.element)return;this.element.querySelectorAll(".tab-btn").forEach(e=>{e.addEventListener("click",a=>{const s=a.currentTarget.dataset.tab;s&&s!==this.state.activeTab&&this.setState({activeTab:s})})})}}class C extends l{constructor(t){super(t),this.state={selectedMode:null,selectedMap:null,modes:[{id:"online",title:"Multijugador Online",desc:"Juega contra personas de todo el mundo",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>'},{id:"local",title:"Multijugador Local",desc:"Juega con un amigo en el mismo teclado",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>'},{id:"ai",title:"Contra la IA",desc:"Practica tus habilidades contra la máquina",icon:'<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>'}],maps:[{id:"stadium",title:"Estadio Principal",image:"https://images.unsplash.com/photo-1518605368461-1ee7e5b56574?auto=format&fit=crop&q=80&w=400&h=300"},{id:"street",title:"Cancha Callejera",image:"https://images.unsplash.com/photo-1560272564-c83b66b1ad12?auto=format&fit=crop&q=80&w=400&h=300"},{id:"beach",title:"Fútbol Playa",image:"https://images.unsplash.com/photo-1510051640316-cee39563ddcb?auto=format&fit=crop&q=80&w=400&h=300"}]}}render(){const{selectedMode:t,selectedMap:e,modes:a,maps:s}=this.state,o=t!==null&&e!==null,r={modeBtnBase:"mode-btn text-left p-6 rounded-2xl border-2 transition-all duration-300 relative overflow-hidden group",modeBtnActive:"bg-accent-primary/20 border-accent-primary shadow-[0_0_20px_rgba(59,130,246,0.3)]",modeBtnInactive:"bg-bg-secondary-opaque border-border-primary hover:border-text-secondary hover:bg-bg-tertiary",modeGlow:"absolute top-0 right-0 w-32 h-32 bg-accent-primary/10 rounded-full blur-[30px] -mr-10 -mt-10 transition-opacity",modeIconActive:"text-accent-primary mb-4",modeIconInactive:"text-text-secondary group-hover:text-text-primary mb-4",modeTitle:"text-xl font-bold text-text-primary mb-2",modeDesc:"text-text-tertiary text-sm leading-relaxed",modeCheck:"absolute top-4 right-4 text-accent-primary",mapBtnBase:"map-btn relative rounded-2xl overflow-hidden border-2 transition-all duration-300 group",mapBtnActive:"border-accent-primary shadow-[0_0_20px_rgba(59,130,246,0.3)] scale-[1.02]",mapBtnInactive:"border-border-primary hover:border-text-secondary grayscale opacity-70 hover:grayscale-0 hover:opacity-100",mapImgWrapper:"aspect-video w-full",mapImg:"w-full h-full object-cover",mapOverlay:"absolute inset-0 bg-gradient-to-t from-bg-primary via-bg-primary/40 to-transparent flex flex-col justify-end p-4",mapTitle:"text-text-primary font-bold text-lg",mapCheckWrap:"absolute top-3 right-3 bg-accent-primary text-text-primary rounded-full p-1 shadow-lg",container:"flex flex-col h-full bg-bg-primary-opaque relative",scrollContent:"flex-1 overflow-y-auto p-6 md:p-8 space-y-10 pb-32",sectionBase:"animate-fade-in",sectionHeader:"flex items-center gap-3 mb-6",sectionNum:"bg-accent-primary text-text-primary w-8 h-8 rounded-full flex items-center justify-center font-bold",sectionTitle:"text-2xl font-bold text-text-primary tracking-tight",gridWrapper:"grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6",fabArea:"absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-bg-primary via-bg-primary to-transparent border-t border-border-primary/50 flex justify-end transform transition-transform duration-500",fabBtn:"bg-accent-primary hover:bg-accent-hover text-text-primary px-10 py-4 rounded-xl font-bold text-lg shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:scale-[1.02] transition-all flex items-center gap-3"},d=a.map(n=>`
            <button data-mode="${n.id}" class="${r.modeBtnBase} ${t===n.id?r.modeBtnActive:r.modeBtnInactive}">
                <div class="${r.modeGlow} ${t===n.id?"opacity-100":"opacity-0"}"></div>
                <div class="${t===n.id?r.modeIconActive:r.modeIconInactive}">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">${n.icon}</svg>
                </div>
                <h3 class="${r.modeTitle}">${n.title}</h3>
                <p class="${r.modeDesc}">${n.desc}</p>
                
                ${t===n.id?`
                <div class="${r.modeCheck}">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                `:""}
            </button>
        `).join(""),m=s.map(n=>`
            <button data-map="${n.id}" class="${r.mapBtnBase} ${e===n.id?r.mapBtnActive:r.mapBtnInactive}">
                <div class="${r.mapImgWrapper}">
                    <img src="${n.image}" alt="${n.title}" class="${r.mapImg}">
                </div>
                <div class="${r.mapOverlay}">
                    <h3 class="${r.mapTitle}">${n.title}</h3>
                </div>
                ${e===n.id?`
                <div class="${r.mapCheckWrap}">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                `:""}
            </button>
        `).join(""),b=`
            <div class="${r.container}">
                
                <!-- Scrollable Content -->
                <div class="${r.scrollContent}">
                    
                    <!-- Sección de Modo de Juego -->
                    <section class="${r.sectionBase}" style="animation-delay: 0.1s">
                        <div class="${r.sectionHeader}">
                            <div class="${r.sectionNum}">1</div>
                            <h2 class="${r.sectionTitle}">Selecciona el Modo de Juego</h2>
                        </div>
                        <div class="${r.gridWrapper}">
                            ${d}
                        </div>
                    </section>
                    
                    <!-- Sección de Mapa -->
                    <section class="${r.sectionBase}" style="animation-delay: 0.2s">
                        <div class="${r.sectionHeader}">
                            <div class="${r.sectionNum}">2</div>
                            <h2 class="${r.sectionTitle}">Elige tu Cancha</h2>
                        </div>
                        <div class="${r.gridWrapper}">
                            ${m}
                        </div>
                    </section>
                    
                </div>
                
                <!-- Floating Action Bar -->
                <div class="${r.fabArea} ${o?"translate-y-0":"translate-y-full opacity-0"}">
                    <button id="btn-play" class="${r.fabBtn}">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
                        ¡Jugar Ahora!
                    </button>
                </div>

            </div>
        `;return p(b,"Jugar")}mounted(){if(!this.element)return;this.element.querySelectorAll(".mode-btn").forEach(s=>{s.addEventListener("click",o=>{const r=o.currentTarget.dataset.mode;this.setState({selectedMode:r})})}),this.element.querySelectorAll(".map-btn").forEach(s=>{s.addEventListener("click",o=>{const r=o.currentTarget.dataset.map;this.setState({selectedMap:r})})});const a=this.element.querySelector("#btn-play");a&&a.addEventListener("click",()=>{const{selectedMode:s,selectedMap:o}=this.state;console.log(`Iniciando partida... Modo: ${s}, Mapa: ${o}`)})}}class L extends l{constructor(t){super(t),this.state={players:[{id:1,fullName:"Omar Fernández",username:"@omar_fernandez",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024d",elo:1850,badge:"Oro",wins:95,losses:47},{id:2,fullName:"Valentina Rojas",username:"@vale_r",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024e",elo:2100,badge:"Diamante",wins:142,losses:20},{id:3,fullName:"Carlos Silva",username:"@carlos_s",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024f",elo:1980,badge:"Platino",wins:110,losses:35},{id:4,fullName:"Sofia Gómez",username:"@sofi_gomez",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024g",elo:1720,badge:"Plata",wins:80,losses:62},{id:5,fullName:"Mateo Pérez",username:"@mateo_perez",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024h",elo:1650,badge:"Bronce",wins:65,losses:50},{id:6,fullName:"Lucía Martínez",username:"@lucia_mtz",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024i",elo:1590,badge:"Bronce",wins:50,losses:40},{id:7,fullName:"Javier López",username:"@javi_lopez",profilePic:"https://i.pravatar.cc/150?u=a042581f4e29026024j",elo:1400,badge:"Hierro",wins:30,losses:80}]}}render(){const e=[...this.state.players].sort((o,r)=>r.elo-o.elo).map((o,r)=>new h({position:r+1,player:o}).render()).join(""),a={container:"h-full flex flex-col p-8 bg-bg-primary-opaque relative overflow-hidden",bgGlowRight:"absolute top-0 right-0 w-96 h-96 bg-accent-primary/10 rounded-full blur-[100px] pointer-events-none",bgGlowLeft:"absolute bottom-0 left-0 w-96 h-96 bg-warning/5 rounded-full blur-[100px] pointer-events-none",header:"flex items-center justify-between mb-8 z-10 border-b border-border-primary/50 pb-6",tabList:"flex gap-6 text-sm font-medium",tabActive:"text-accent-primary border-b-2 border-accent-primary pb-1",tabInactive:"text-text-secondary hover:text-text-primary transition-colors pb-1",statsBox:"hidden md:flex gap-4",statPill:"bg-bg-secondary-opaque px-4 py-2 rounded-lg border border-border-primary shadow-sm flex items-center gap-2",statLabel:"text-text-secondary text-xs",statValue:"text-text-primary font-bold",listWrapper:"flex-1 overflow-y-auto pr-2 custom-scrollbar z-10",listSpace:"space-y-4"},s=`
            <div class="${a.container}">
                <!-- Efectos de fondo -->
                <div class="${a.bgGlowRight}"></div>
                <div class="${a.bgGlowLeft}"></div>
                
                <!-- Encabezado del Ranking -->
                <div class="${a.header}">
                    <div>
                        <ul class="${a.tabList}">
                            <li><button class="${a.tabActive}">Global</button></li>
                            <li><button class="${a.tabInactive}">Amigos</button></li>
                        </ul>
                    </div>
                    <!-- Stats Resumen -->
                    <div class="${a.statsBox}">
                        <div class="${a.statPill}">
                            <span class="${a.statLabel}">Jugadores Activos</span>
                            <span class="${a.statValue}">12,458</span>
                        </div>
                    </div>
                </div>

                <!-- Lista de Jugadores -->
                <div class="${a.listWrapper}">
                    <div class="${a.listSpace}">
                        ${e}
                    </div>
                </div>
            </div>
        `;return p(s,"Ranking Global")}}const S=[{path:"/",view:f},{path:"/auth/login",view:y},{path:"/auth/signin",view:$},{path:"/auth/recovery",view:w},{path:"/profile",view:k},{path:"/config",view:B},{path:"/ranking",view:L},{path:"/play",view:C}];document.addEventListener("DOMContentLoaded",()=>{new v(S)});
