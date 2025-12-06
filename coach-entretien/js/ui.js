const corps = document.body;
const btnTh = document.getElementById("btnTheme");
if (btnTh) {
  btnTh.addEventListener("click", () => {
    corps.classList.toggle("clair");
  });
}
const faq = document.querySelectorAll(".faq-item");
faq.forEach(f => {
  const t = f.querySelector(".faq-titre");
  if (t) {
    t.addEventListener("click", () => {
      f.classList.toggle("ouvert");
    });
  }
});
