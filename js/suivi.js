const zoneS = document.getElementById("zoneSuivi");
const sess = JSON.parse(localStorage.getItem("sess") || "[]");
const fmt = d => {
  const dt = new Date(d);
  const j = String(dt.getDate()).padStart(2, "0");
  const m = String(dt.getMonth() + 1).padStart(2, "0");
  const a = dt.getFullYear();
  return `${j}/${m}/${a}`;
};
if (zoneS) {
  if (!sess.length) {
    zoneS.innerHTML = '<p class="info">Aucune session enregistrée pour le moment.</p>';
  } else {
    const nb = sess.length;
    const totPts = sess.reduce((s, x) => s + x.sc, 0);
    const totQs = sess.reduce((s, x) => s + x.tot, 0);
    const moy = totQs ? Math.round((totPts / totQs) * 100) : 0;
    const cats = {};
    sess.forEach(s => {
      const k = s.cat || "toutes";
      if (!cats[k]) cats[k] = { n: 0, sc: 0, tot: 0 };
      cats[k].n += 1;
      cats[k].sc += s.sc;
      cats[k].tot += s.tot;
    });
    const catHtml = Object.entries(cats).map(([k, v]) => {
      const pct = v.tot ? Math.round((v.sc / v.tot) * 100) : 0;
      return `<div class="ligne-suivi"><span>${k} • ${v.n} session(s)</span><strong>${pct}%</strong></div>`;
    }).join("");
    const detHtml = [...sess].reverse().map(s => {
      const pct = s.tot ? Math.round((s.sc / s.tot) * 100) : 0;
      const lab = s.cat === "toutes" ? "Mix" : s.cat;
      const nomTxt = s.nom ? ` • Nom : ${s.nom}` : "";
      return `<div class="ligne-suivi"><span>${fmt(s.d)}${nomTxt} • ${lab}</span><span>${s.sc}/${s.tot} (${pct}%)</span></div>`;
    }).join("");
    zoneS.innerHTML = `
      <div class="carte">
        <h3>Vue globale</h3>
        <p class="info">Nombre de sessions : ${nb}</p>
        <p class="info">Moyenne globale : ${moy}%</p>
        <div class="barre" style="margin-top:10px;"><div id="bGlob" class="barre-remplie"></div></div>
      </div>
      <div class="carte" style="margin-top:12px;">
        <h3>Par catégorie</h3>
        ${catHtml}
      </div>
      <div class="carte" style="margin-top:12px;">
        <h3>Détail des sessions</h3>
        ${detHtml}
      </div>
    `;
    const bar = document.getElementById("bGlob");
    if (bar) {
      requestAnimationFrame(() => {
        bar.style.width = moy + "%";
      });
    }
  }
}
