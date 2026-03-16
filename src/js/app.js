import login from "./login.js";
import cadastro from "./cadastro.js";

document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector("#formLogin")) {
    login();
  }

  if (document.querySelector("#formCadastro")) {
    cadastro();
  }
});

