export default function login() {
  const formLogin = document.querySelector("#formLogin");

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    obterDado();
  });

  function validarDados(dado) {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = dado.find(
      (users) => users.email === email && users.password === password,
    );

    if (user) {
      const nameHome = email.split("@")[0];
      window.location.href = `home-${nameHome}.html`;
    } else {
      alert("Login invalido!");
    }
  }

  async function obterDado() {
    try {
      const resposta = await fetch("src/js/dados.json");
      if (!resposta.ok) {
        throw Error("Não foi possivel carregar os dados");
      }
      const dados = await resposta.json();
      validarDados(dados);
    } catch (e) {
      console.error("Erro:", e);
      alert("Login invalido!");
    }
  }
}
