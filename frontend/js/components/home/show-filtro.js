export function configurarToggleFiltro() {
    const filtroIcon = document.getElementById("filtro-icon");
    const filterOptionsDiv = document.getElementById("opcoes-filtro");

    filtroIcon.addEventListener("click", () => {
        filterOptionsDiv.classList.toggle("show");
    });
}