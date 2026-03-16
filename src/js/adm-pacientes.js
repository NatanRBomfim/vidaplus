(() => {
  const input = document.querySelector(".inputPsq");

  input.removeEventListener("keyup", () => {});

  fetch("https://fakerapi.it/api/v1/persons?_quantity=5&_locale=pt_BR")
    .then((res) => res.json())
    .then((data) => tableData(data.data));

  function tableData(data) {
    const tbody = document.querySelector("tbody");

    data.forEach((p) => {
      const age = calcularIdade(p.birthday);
      tbody.innerHTML += `<tr>
    <td><input type="checkbox"></td>
    <td><button class="btn-paciente" onclick="navigate(this,'adm-dados-paciente')">${p.firstname} ${p.lastname}</button></td>
    <td>${p.email}</td>
    <td>${age}</td>
    <td>25/05/2021</td>
    </tr>
    `;
    });
    const rows = document.querySelectorAll(".table tbody tr");
    const span = document.querySelector(".limite span");

    span.textContent = rows.length;

    input.addEventListener("keyup", () => {
      const filter = input.value.toLowerCase();

      rows.forEach((row) => {
        const nome = row.textContent.toLowerCase();
        row.style.display = nome.includes(filter) ? "" : "none";
      });
    });
  }

  function calcularIdade(dataNascimento) {
    const today = new Date();
    const birth = new Date(dataNascimento);

    let age = today.getFullYear() - birth.getFullYear();
    const month = today.getMonth() - birth.getMonth();

    if (month < 0 || (month === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return age;
  }
})();
