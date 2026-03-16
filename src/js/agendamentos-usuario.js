(() => {
  const dataAgenda = document.querySelector(".time");
  const ds = document.querySelector(".bagde");
  const agendas = document.querySelectorAll(".flexArticle")

  console.log(ds)

  function dateAgenda() {
    const data = new Date();
    return data.toLocaleString("pt-BR", {
      month: "long",
      year: "numeric",
      day: "numeric",
    });
  }

  dataAgenda.innerHTML = ` • ${dateAgenda()}`;
})();
