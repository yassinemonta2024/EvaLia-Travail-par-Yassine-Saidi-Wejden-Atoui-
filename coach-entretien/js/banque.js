const rech = document.getElementById("recherche");
const cat = document.getElementById("filtreCat");
const dif = document.getElementById("filtreDif");
const liste = document.getElementById("liste");
const affQs = arr => {
  liste.innerHTML = "";
  arr.forEach(q => {
    const art = document.createElement("article");
    art.className = "carte";
    const h = document.createElement("h3");
    h.textContent = q.t;
    const tg = document.createElement("div");
    tg.className = "tags";
    const tc = document.createElement("span");
    tc.className = "tag tag-cat";
    tc.textContent = q.c;
    const td = document.createElement("span");
    td.className = "tag tag-dif";
    td.textContent = q.d;
    tg.append(tc, td);
    const btn = document.createElement("button");
    btn.className = "btn-rep";
    btn.dataset.id = q.id;
    btn.textContent = "Afficher la réponse";
    const repBox = document.createElement("div");
    repBox.className = "zone-rep";
    repBox.style.display = "none";
    const lab = document.createElement("p");
    lab.style.fontWeight = "600";
    if (q.type === "qcm" && q.opt && q.bon !== undefined) {
      lab.textContent = "Bonne réponse :";
      const bon = document.createElement("p");
      bon.textContent = q.opt[q.bon] || "";
      repBox.append(lab, bon);
      if (q.exp) {
        const ex = document.createElement("p");
        ex.textContent = "Explication : " + q.exp;
        repBox.appendChild(ex);
      }
    } else if (q.type === "ouvert" && q.rep) {
      lab.textContent = "Idée de réponse :";
      const rp = document.createElement("p");
      rp.textContent = q.rep;
      repBox.append(lab, rp);
    }
    const ta = document.createElement("textarea");
    ta.className = "champ-texte";
    ta.dataset.id = q.id;
    ta.placeholder = "Vos notes ici";
    ta.value = localStorage.getItem("note_" + q.id) || "";
    art.append(h, tg, btn, repBox, ta);
    liste.appendChild(art);
  });
};
const filt = () => {
  const txt = rech.value.toLowerCase();
  const catVal = cat.value;
  const difVal = dif.value;
  const res = qs.filter(q => {
    const okTxt = q.t.toLowerCase().includes(txt);
    const okCat = catVal === "toutes" ? true : q.c === catVal;
    const okDif = difVal === "tous" ? true : q.d === difVal;
    return okTxt && okCat && okDif;
  });
  affQs(res);
};
if (rech && cat && dif && liste) {
  affQs(qs);
  rech.addEventListener("input", filt);
  cat.addEventListener("change", filt);
  dif.addEventListener("change", filt);
  liste.addEventListener("input", e => {
    if (e.target.tagName.toLowerCase() === "textarea") {
      const id = e.target.dataset.id;
      localStorage.setItem("note_" + id, e.target.value);
    }
  });
  liste.addEventListener("click", e => {
    if (e.target.classList.contains("btn-rep")) {
      const box = e.target.nextElementSibling;
      if (!box) return;
      const isOpen = box.style.display === "block";
      box.style.display = isOpen ? "none" : "block";
      e.target.textContent = isOpen ? "Afficher la réponse" : "Masquer la réponse";
    }
  });
}
