// ejercicios.js  (LISTADO)
(function () {
  if (!window.DATA || !Array.isArray(window.DATA)) {
    console.warn("No hay DATA cargado. Asegúrate de incluir data/exercise.js antes.");
    return;
  }

  const list = document.querySelector('#list');
  if (!list) return;

  const pill = (t) => `<span class="pill">${t}</span>`;

  function card(e){
    const stepsHTML = (e.steps && e.steps.length)
      ? e.steps.map(s => `<li>${s}</li>`).join('')
      : `<li>Guía disponible próximamente.</li>`;

    const metaHTML = `
      <div class="meta">
        ${e.level ? pill(e.level) : ""}
        ${(e.languages||[]).map(pill).join('')}
        ${(e.topics||[]).map(pill).join('')}
      </div>
    `;

    const el = document.createElement('article');
    el.className = 'exercise';
    el.innerHTML = `
      <h4>${e.title}</h4>
      ${metaHTML}
      <p>${e.summary||""}</p>
      <p><strong>¿Qué vas a aprender?</strong> ${e.learn||""}</p>

      <details class="exercise-steps">
        <summary>Ver guía paso a paso</summary>
        <ol>${stepsHTML}</ol>
      </details>

      <div class="actions">
        <a class="btn btn-ghost" href="exercise.html?slug=${e.slug}">Ver ejercicio</a>
        <a class="btn-pdf" href="${e.pdf||'#'}" target="_blank" rel="noopener">Descargar PDF</a>
      </div>
    `;
    return el;
  }

  list.innerHTML = "";
  window.DATA.forEach(e => list.appendChild(card(e)));
})();
