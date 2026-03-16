export default function cadastro() {
  const formCadastro = document.querySelector("#formCadastro");

  formCadastro.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameCompleted = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const passwordRpt = document.getElementById("passwordRpt").value;

    if (/\d/.test(nameCompleted)) {
      alert("Não é permitido numeros no nome");
      return;
    }

    if (password !== passwordRpt) {
      alert("As senhas precisam ser iguais!")
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Cadastro realizado com sucesso",
      text: "Seu cadastro foi feito com sucesso!",
      confirmButtonText: "OK",
    });

    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  });
}
