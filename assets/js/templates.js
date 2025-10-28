export const HomeView=()=>`
<section class="hero"><h1>Missão, visão e transparência</h1>
<p>Presença digital profissional para <strong>organizações do terceiro setor</strong>, com gestão de projetos, voluntariado e doações.</p>
<div class="badges mt-2"><span class="badge brand">SPA</span><span class="badge success">LocalStorage</span><span class="badge warning">Validação avançada</span></div></section>
<section class="cards">
<article class="card"><img src="assets/img/mission.png" alt="Missão" loading="lazy"><h3>Missão</h3><p>Impacto social medido e transparente.</p><button class="btn btn-outline" data-open-modal>Saiba mais</button></article>
<article class="card"><img src="assets/img/projects.png" alt="Projetos" loading="lazy"><h3>Projetos</h3><p>Iniciativas com metas e resultados.</p><a href="#/projetos" class="btn btn-primary">Ver projetos</a></article>
<article class="card"><img src="assets/img/volunteer.png" alt="Voluntariado" loading="lazy"><h3>Voluntariado</h3><p>Oportunidades e certificados digitais.</p><a href="#/cadastro" class="btn btn-outline">Inscrever-se</a></article>
</section>
<section id="relatorios"><h2>Relatórios e Conquistas</h2><div class="alert info">Em breve: indicadores públicos.</div></section>`;

export const ProjetosView = (projects=[]) => `
<section class="hero"><h1>Projetos sociais</h1><p>Conheça iniciativas e apoie causas.</p></section>
<section class="grid">
  <div class="col-8 md-col-12">
    <div class="cards">
      ${projects.map(p=>`
        <article class="card">
          <img src="${p.img}" alt="${p.title}" loading="lazy">
          <h3>${p.title}</h3>
          <div class="badges">
            <span class="badge brand">${p.category}</span>
            <span class="badge ${p.statusClass}">${p.status}</span>
          </div>
          <p class="text-muted">Meta: ${p.goalFmt}</p>
          <button class="btn btn-primary" data-support="${p.id}">Apoiar</button>
        </article>`).join('')}
    </div>
  </div>
  <aside class="col-4 md-col-12">
    <div class="card">
      <h3>Filtros</h3>
      <div class="badges">
        <button class="badge" data-filter="Todos">Todos</button>
        <button class="badge brand" data-filter="Saúde">Saúde</button>
        <button class="badge brand" data-filter="Educação">Educação</button>
        <button class="badge brand" data-filter="Meio Ambiente">Meio Ambiente</button>
      </div>
      <p class="mt-2 text-muted">* Filtragem cliente (SPA).</p>
    </div>
  </aside>
</section>`;

export const CadastroView = () => `
<section class="hero"><h1>Cadastro de voluntário / apoiador</h1><p>Campos marcados com * são obrigatórios.</p></section>
<form id="cadastro-form" action="#" method="post" novalidate>
  <fieldset><legend>Informações pessoais</legend>
    <div class="input-row">
      <div><label class="required" for="name">Nome completo</label>
        <input id="name" name="name" type="text" required minlength="3" autocomplete="name" placeholder="Seu nome completo">
        <p class="helper">Ex.: Maria Silva</p></div>
      <div><label class="required" for="email">E-mail</label>
        <input id="email" name="email" type="email" required autocomplete="email" placeholder="voce@exemplo.com"></div>
    </div>
    <div class="input-row">
      <div><label class="required" for="cpf">CPF</label>
        <input id="cpf" name="cpf" inputmode="numeric" required placeholder="000.000.000-00">
        <p class="helper">Formato: 000.000.000-00</p></div>
      <div><label class="required" for="phone">Telefone</label>
        <input id="phone" name="phone" inputmode="tel" required placeholder="(11) 90000-0000">
        <p class="helper">Formato: (11) 90000-0000</p></div>
    </div>
    <div class="input-row">
      <div><label class="required" for="birthdate">Data de nascimento</label>
        <input id="birthdate" name="birthdate" type="date" required></div>
      <div><label for="role">Perfil</label>
        <select id="role" name="role"><option value="voluntario">Voluntário</option><option value="doador">Doador/Apoiador</option><option value="outro">Outro</option></select>
      </div>
    </div>
  </fieldset>
  <fieldset><legend>Endereço</legend>
    <div class="input-row">
      <div><label class="required" for="cep">CEP</label>
        <input id="cep" name="cep" inputmode="numeric" required placeholder="00000-000"></div>
      <div><label class="required" for="street">Endereço</label>
        <input id="street" name="street" type="text" required placeholder="Rua, número, complemento"></div>
    </div>
    <div class="input-row">
      <div><label class="required" for="city">Cidade</label>
        <input id="city" name="city" type="text" required></div>
      <div><label class="required" for="state">Estado</label>
        <select id="state" name="state" required>
          <option value="" disabled selected>Selecione...</option>
          <option>AC</option><option>AL</option><option>AP</option><option>AM</option><option>BA</option>
          <option>CE</option><option>DF</option><option>ES</option><option>GO</option><option>MA</option>
          <option>MT</option><option>MS</option><option>MG</option><option>PA</option><option>PB</option>
          <option>PR</option><option>PE</option><option>PI</option><option>RJ</option><option>RN</option>
          <option>RS</option><option>RO</option><option>RR</option><option>SC</option><option>SP</option>
          <option>SE</option><option>TO</option>
        </select></div>
    </div>
  </fieldset>
  <fieldset><legend>Interesse</legend>
    <label for="message">Conte um pouco sobre seu interesse (opcional)</label>
    <textarea id="message" name="message" rows="4" placeholder="Quais áreas deseja apoiar? Disponibilidade de horários, habilidades..."></textarea>
  </fieldset>
  <div class="mt-2">
    <button type="submit" class="btn btn-primary">Enviar inscrição</button>
    <button type="reset" class="btn btn-outline">Limpar</button>
    <p class="helper">Validação inclui checagens de consistência e mensagens ao usuário.</p>
  </div>
</form>
<section class="mt-3"><h2>Inscrições salvas (local)</h2><div id="submissions" class="cards"></div></section>`;