import { postagensFiltradas, aplicarFiltro } from "./filtros.js";
import { cardGeral } from "../template/home/card-geral.js";
import { postagens } from "./api.js";

export function atualizarPagina() {
    aplicarFiltro();
    renderizarSecaoGeral();
}

export function renderizarSecaoDestaque() {
        const container = document.querySelector(".cards-home-destaque");
        const destaque = [...postagens]
            .sort((a,b) => b.acessos - a.acessos).slice(0,6)
        destaque.forEach(card => {
            let cardfei = criarCardComListener(cardGeral(card), card.id_postagem)
            container.appendChild(cardfei)
        })
        
}
export function renderizarSecaoGeral() {
    const container = document.querySelector(".cards-home-geral");
    const prevBtn = document.getElementById("prev-page");
    const nextBtn = document.getElementById("next-page");
    const pageNumber = document.querySelector(".number");

    container.innerHTML = "";

    const gerais = [...postagensFiltradas]
        .sort((a, b) => a.nome_produto.localeCompare(b.nome_produto))
    const itemPerPage = 6;
    let currentIndex = 0;
    
    function renderPagina() {
        container.innerHTML = "";

        const pagina = gerais.slice(currentIndex, currentIndex + itemPerPage)
        if (pagina.length === 0) {
            container.innerHTML = "<p>Nenhuma postagem encontrada.</p>";
        } else {
            pagina.forEach((item) => {
                const card = criarCardComListener(cardGeral(item), item.id_postagem)
                container.appendChild(card);
            })
        }

        pageNumber.textContent = Math.ceil(currentIndex / itemPerPage ) + 1
        prevBtn.style.color = currentIndex > 0 ? "black" : "white";
        nextBtn.style.color = currentIndex + itemPerPage < gerais.length ? "black" : "white";

    }

    prevBtn.onclick = () => {
        if (currentIndex > 0) {
            currentIndex -= itemPerPage;
            renderPagina();
        }
    }

    nextBtn.onclick = () => {
        if (currentIndex + itemPerPage < gerais.length) {
            currentIndex += itemPerPage;
            renderPagina();
        }
    }

    renderPagina();
}

function criarCardComListener(card, id) {
    card.addEventListener("click", () => {
        window.location.href = `/frontend/conteudo.html?id=${id}`;
    });
    return card;
}