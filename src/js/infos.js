(() => {
  const nameUser = document.querySelector(".infoPersona .name").textContent;

  const welcome = document.querySelector(".welcome .user");

  const dataToday = document.querySelector(".dataToday");

  welcome.textContent = `, ${nameUser}`;

  function dateAgenda() {
    const data = new Date();
    return data.toLocaleString("pt-BR", {
      month: "short",
      weekday: "long",
      day: "numeric",
    });
  }

  dataFormated = dateAgenda().charAt(0).toUpperCase() + dateAgenda().slice(1);
  dataFormated = dataFormated.split("-feira").join("");

  dataToday.textContent = `📅 Hoje - ${dataFormated}`;
})();
