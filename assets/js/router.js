export class Router{constructor(o){this.routes=o.routes||{};this.fallback=o.fallback||(()=>{});window.addEventListener('hashchange',()=>this.resolve());window.addEventListener('load',()=>this.resolve())}
current(){return location.hash.replace(/^#/,'')||'/'} navigate(p){location.hash=p}
resolve(){const p=this.current();const r=this.routes[p]||this.routes['/404']||this.fallback;r();}}