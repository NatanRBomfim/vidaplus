function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      document.getElementById("app").innerHTML = html;

      loadScript(page)
    });
}

function loadScript(page) {
  const script = document.createElement("script");
  script.src = `src/js/${page}.js`;
  script.defer = true;

  script.onerror = () => {
    console.warn(`Script ${page}.js não encontrado.`)
  }
  document.body.appendChild(script);
}