let artigos = document.querySelectorAll('article');

artigos.forEach((artigo) => {
    artigo.addEventListener("click", () => {
        alert("artigo clicado")
    })
})