// exercise.js  (DETALLE)
(function () {
  const $root = document.querySelector('#exercise-root');
  if (!$root) return;

  const params = new URLSearchParams(location.search);
  const slug = params.get('slug');

  const pill = (t) => `<span class="pill">${t}</span>`;
  const escapeHtml = (s) => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

  function notFound() {
    $root.innerHTML = `
      <h2>Ejercicio no encontrado</h2>
      <p class="lead">Revisa el enlace o vuelve al listado.</p>
      <div class="actions"><a class="btn btn-ghost" href="ejercicios.html">← Volver a ejercicios</a></div>
    `;
  }

  if (!slug || !window.DATA) { notFound(); return; }

  const ex = window.DATA.find(e => e.slug === slug);
  if (!ex) { notFound(); return; }

  const meta = `
    <div class="meta">
      ${ex.level ? pill(ex.level) : ""}
      ${(ex.languages || []).map(pill).join('')}
      ${(ex.topics || []).map(pill).join('')}
    </div>
  `;

  const stepsHTML = (ex.steps && ex.steps.length)
    ? `<ol>${ex.steps.map(s => `<li>${s}</li>`).join('')}</ol>`
    : `<p>Guía disponible próximamente.</p>`;

  const hasSolutions = ex.solutions && Object.keys(ex.solutions).length;
  const langs = hasSolutions ? Object.keys(ex.solutions) : [];
  const tabs = hasSolutions ? `
    <div class="code-tabs" role="tablist" aria-label="Lenguajes">
      ${langs.map((l,i)=>`<button class="tab ${i===0?'active':''}" role="tab" aria-selected="${i===0}" data-lang="${l}">${l}</button>`).join('')}
    </div>
    <div class="code-panels">
      ${langs.map((l,i)=>`
        <pre class="code-panel ${i===0?'active':''}" data-lang="${l}"><code>${escapeHtml(ex.solutions[l])}</code></pre>
      `).join('')}
    </div>
  ` : `<div class="muted">Las soluciones estarán disponibles próximamente.</div>`;

  $root.innerHTML = `
    <a class="btn btn-ghost" href="ejercicios.html">← Volver</a>

    <h2 style="margin-top:6px">${ex.title}</h2>
    ${meta}

    <p class="lead">${ex.summary || ""}</p>
    ${ex.learn ? `<p><strong>¿Qué vas a aprender?</strong> ${ex.learn}</p>` : ""}

    <section class="exercise-steps" style="margin-top:12px">
      <summary style="font-weight:700; cursor:default">Guía paso a paso</summary>
      ${stepsHTML}
    </section>

    <div class="actions" style="margin-top:14px">
      <a class="btn-pdf" href="${ex.pdf || '#'}" target="_blank" rel="noopener">Descargar PDF</a>
    </div>

    <h3 style="margin-top:20px">Soluciones</h3>
    ${tabs}
  `;

  if (hasSolutions) {
    const tabBtns = Array.from($root.querySelectorAll('.tab'));
    const panels = Array.from($root.querySelectorAll('.code-panel'));
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        tabBtns.forEach(b => { b.classList.toggle('active', b===btn); b.setAttribute('aria-selected', b===btn ? 'true' : 'false'); });
        panels.forEach(p => p.classList.toggle('active', p.dataset.lang === lang));
      });
    });
  }
})();
