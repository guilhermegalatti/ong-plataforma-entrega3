# ONG Platform — Entrega III (JavaScript Avançado)

**Objetivo:** SPA com manipulação do DOM, eventos, armazenamento local e validação/consistência de formulários.

## Implementado
- **SPA (hash router)**: `assets/js/router.js` + `assets/js/app.js` + `index.html`
- **Templates JS**: `assets/js/templates.js` (Home, Projetos, Cadastro)
- **LocalStorage**: `assets/js/store.js` (projetos + inscrições)
- **Validação/Consistência**: `assets/js/validation.js`
  - Máscaras (CPF/CEP/Telefone)
  - **CPF com checksum**
  - **Idade mínima 16**
  - Formatos e DDD simples
- **DOM/Interações**: filtros de projetos, “Apoiar” (toast), modal de transparência, formulário com feedback
- **Componentes**: `assets/js/components/Toast.js`, `assets/js/components/Modal.js`
- **Helpers**: `assets/js/ui.js`
- **Modular**: código por funcionalidade

## Rodar
Abra `index.html` no navegador. Navegue por `#/`, `#/projetos`, `#/cadastro`.

> Dica: verifique o Local Storage no DevTools para acompanhar dados persistidos.
