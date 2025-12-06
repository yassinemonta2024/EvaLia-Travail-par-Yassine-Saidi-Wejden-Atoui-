const nomInp = document.getElementById("nomSess");
const catSel = document.getElementById("catSess");
const nbSel = document.getElementById("nbSess");
const tmSel = document.getElementById("tmSess");
const btnGo = document.getElementById("btnGo");
const zone = document.getElementById("zoneSess");
let li = [];
let iAct = 0;
let ok = 0;
let tt = 60;
let tRest = 0;
let idInt;
let idDel;
let nomVal = "";
let vus = [];
const mel = l => {
  const a = [...l];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const fmt = s => {
  const m = Math.floor(s / 60).toString().padStart(2, "0");
  const sec = Math.floor(s % 60).toString().padStart(2, "0");
  return `${m}:${sec}`;
};
const clearT = () => {
  if (idInt) {
    clearInterval(idInt);
    idInt = null;
  }
};
const clearD = () => {
  if (idDel) {
    clearTimeout(idDel);
    idDel = null;
  }
};
const saveVu = ids => {
  const cur = JSON.parse(localStorage.getItem("qsVu") || "[]");
  const mix = Array.from(new Set([...cur, ...ids]));
  const pool = catSel.value === "toutes" ? qs : qs.filter(q => q.c === catSel.value);
  const lim = pool.length - 3;
  const fin = mix.length > lim ? [] : mix;
  localStorage.setItem("qsVu", JSON.stringify(fin));
};
const affFin = () => {
  clearT();
  clearD();
  saveVu(li.map(q => q.id));
  const tot = li.length;
  const pct = tot ? Math.round((ok / tot) * 100) : 0;
  zone.innerHTML = `
    <div class="carte carte-sess">
      <h3>Session terminée</h3>
      <p class="info">${ok}/${tot} réponses justes (${pct}%)</p>
      <div class="barre" style="margin:12px 0;"><div class="barre-remplie" style="width:${pct}%;"></div></div>
      <button id="btnSave" class="btn">Enregistrer cette session</button>
    </div>
  `;
  const b = document.getElementById("btnSave");
  if (b) {
    b.addEventListener("click", () => {
      const st = JSON.parse(localStorage.getItem("sess") || "[]");
      const obj = { id: Date.now(), d: new Date().toISOString(), sc: ok, tot, cat: catSel.value, nom: nomVal };
      st.push(obj);
      localStorage.setItem("sess", JSON.stringify(st));
      b.disabled = true;
      b.textContent = "Session enregistrée";
    });
  }
};
const setTimerText = el => {
  if (!el) return;
  el.textContent = "Temps restant : " + fmt(tRest);
  el.classList.remove("tps-alerte", "tps-danger");
  if (tRest <= 3) {
    el.classList.add("tps-danger");
  } else if (tRest <= 10) {
    el.classList.add("tps-alerte");
  }
};
const tick = () => {
  const el = document.getElementById("tps");
  const msg = document.getElementById("msgFin");
  if (!el) return;
  setTimerText(el);
  clearT();
  idInt = setInterval(() => {
    tRest -= 1;
    if (tRest <= 0) {
      tRest = 0;
      el.textContent = "Temps fini, question suivante...";
      el.classList.remove("tps-alerte");
      el.classList.add("tps-danger");
      if (msg) msg.textContent = "Temps fini, passage à la question suivante...";
      clearD();
      idDel = setTimeout(() => {
        nextQ();
      }, 700);
    } else {
      setTimerText(el);
    }
  }, 1000);
};
const barProg = () => {
  const p = (iAct / li.length) * 100;
  return `<div class="barre" style="margin:10px 0 6px;"><div class="barre-remplie" style="width:${p}%;"></div></div>`;
};
const evalOuv = (q, txt) => {
  if (!txt || txt.length < 10) return { ok: false, msg: "Réponse trop courte." };
  const base = (q.rep || "").toLowerCase().split(/\W+/).filter(w => w.length > 3);
  const mots = Array.from(new Set(base));
  if (!mots.length) return { ok: false, msg: "Pas d'indices pour évaluer." };
  const ans = txt.toLowerCase();
  let hit = 0;
  mots.forEach(m => {
    if (ans.includes(m)) hit += 1;
  });
  const taux = hit / mots.length;
  return taux >= 0.4 ? { ok: true, msg: "Réponse cohérente ✅" } : { ok: false, msg: "Réponse partielle, pensez aux points clés." };
};
const affQ = () => {
  clearT();
  clearD();
  if (!li.length) {
    zone.innerHTML = '<div class="info">Aucune question pour cette sélection.</div>';
    return;
  }
  if (iAct >= li.length) {
    affFin();
    return;
  }
  const q = li[iAct];
  const optHtml = q.type === "qcm" && q.opt && q.bon !== undefined ? `
    <div class="qcm">
      ${q.opt.map((o, idx) => `<label class="qcm-item"><input type="radio" name="qcm" value="${idx}"><span>${o}</span></label>`).join("")}
    </div>
  ` : "";
  zone.innerHTML = `
    <div class="carte carte-sess">
      <div class="ligne"><span>Question ${iAct + 1} / ${li.length}</span><span class="tags"><span class="tag tag-cat">${q.c}</span><span class="tag tag-dif">${q.d}</span></span></div>
      ${barProg()}
      <h3 style="margin:10px 0;">${q.t}</h3>
      ${optHtml}
      <p style="margin-top:10px;">Votre réponse :</p>
      <textarea id="repAct" class="champ-texte champ-rep" placeholder="Notez ici vos idées..."></textarea>
      <p id="tps" class="info" style="margin-top:10px;"></p>
      <p id="msgFin" class="info"></p>
      <p id="msgRes" class="info"></p>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:12px;">
        <button id="btnOk" class="btn"><i class="fa-solid fa-thumbs-up"></i> J'ai bien répondu</button>
        <button id="btnSkip" class="btn-second">Passer</button>
      </div>
    </div>
  `;
  tRest = tt;
  tick();
  const bOk = document.getElementById("btnOk");
  const bSk = document.getElementById("btnSkip");
  const msgRes = document.getElementById("msgRes");
  if (bOk) bOk.addEventListener("click", () => {
    clearT();
    let inc = false;
    if (q.type === "qcm" && q.opt && q.bon !== undefined) {
      const sel = document.querySelector('input[name="qcm"]:checked');
      if (sel && parseInt(sel.value, 10) === q.bon) {
        inc = true;
        if (msgRes) msgRes.textContent = "Bonne réponse ✅";
      } else {
        const bonTxt = q.opt && q.opt[q.bon] ? q.opt[q.bon] : "";
        const plus = q.exp ? ` (${q.exp})` : q.rep ? ` (${q.rep})` : "";
        if (msgRes) msgRes.textContent = `Réponse incorrecte. Bonne réponse : ${bonTxt}${plus}`;
      }
    } else if (q.type === "ouvert" && q.rep) {
      const ta = document.getElementById("repAct");
      const res = evalOuv(q, ta ? ta.value.trim() : "");
      if (msgRes) msgRes.textContent = res.msg;
      inc = res.ok;
    } else {
      inc = true;
    }
    if (inc) ok += 1;
    clearD();
    idDel = setTimeout(() => {
      nextQ();
    }, 600);
  });
  if (bSk) bSk.addEventListener("click", () => {
    nextQ();
  });
};
const nextQ = () => {
  clearT();
  clearD();
  iAct += 1;
  affQ();
};
const prepLi = () => {
  const catVal = catSel.value;
  const nb = parseInt(nbSel.value, 10);
  tt = parseInt(tmSel.value, 10);
  const src = catVal === "toutes" ? qs : qs.filter(q => q.c === catVal);
  const vusStock = JSON.parse(localStorage.getItem("qsVu") || "[]");
  vus = vusStock;
  if (vus.length >= src.length - 3) {
    vus = [];
  }
  const dispo = src.filter(q => !vus.includes(q.id));
  const base = dispo.length >= nb ? dispo : src;
  li = mel(base).slice(0, nb);
};
if (btnGo && catSel && nbSel && tmSel && zone) {
  btnGo.addEventListener("click", () => {
    nomVal = nomInp ? nomInp.value.trim() : "";
    if (!nomVal) {
      zone.innerHTML = '<p class="info">Veuillez saisir votre nom avant de lancer la session.</p>';
      return;
    }
    prepLi();
    iAct = 0;
    ok = 0;
    affQ();
  });
}
