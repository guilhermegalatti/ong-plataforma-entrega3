const KEY_PROJECTS='ong/projects';const KEY_SUBMISSIONS='ong/submissions';
const seedProjects=[
{id:'p1',title:'Saúde na Comunidade',category:'Saúde',status:'Arrecadação',goal:50000,img:'assets/img/projects.png'},
{id:'p2',title:'Educação para Todos',category:'Educação',status:'Execução',goal:80000,img:'assets/img/volunteer.png'},
{id:'p3',title:'Verde Urbano',category:'Meio Ambiente',status:'Planejamento',goal:30000,img:'assets/img/donations.png'}
];
export const Store={
  init(){if(!localStorage.getItem(KEY_PROJECTS))localStorage.setItem(KEY_PROJECTS,JSON.stringify(seedProjects));
        if(!localStorage.getItem(KEY_SUBMISSIONS))localStorage.setItem(KEY_SUBMISSIONS,JSON.stringify([]));},
  projects(){const items=JSON.parse(localStorage.getItem(KEY_PROJECTS)||'[]');return items.map(p=>({...p,goalFmt:new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(p.goal),statusClass:p.status==='Arrecadação'?'success':p.status==='Execução'?'warning':''}))},
  filterProjects(cat){if(!cat||cat==='Todos')return this.projects();return this.projects().filter(p=>p.category===cat)},
  addSubmission(data){const all=JSON.parse(localStorage.getItem(KEY_SUBMISSIONS)||'[]');all.push({...data,id:crypto.randomUUID(),createdAt:new Date().toISOString()});localStorage.setItem(KEY_SUBMISSIONS,JSON.stringify(all));return all},
  submissions(){return JSON.parse(localStorage.getItem(KEY_SUBMISSIONS)||'[]');}
};