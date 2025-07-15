const inputItem = document.getElementById('input-item')

const botaoAdicionar = documento.getElementById('adicionar-item')

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    console.log(inputItem.value);
})