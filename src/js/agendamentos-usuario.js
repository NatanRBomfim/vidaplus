(() => {
  const dataAgenda = document.querySelector(".time");
 
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
