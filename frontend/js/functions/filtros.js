import { postagens } from './api.js';

export let postagensFiltradas = [];
let valorFiltro = [];
let PostagensBuscada =[];

function TirarAcento(texto) {
    return texto
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export function configuracaoFiltro(atualizarPagina) {
    
    const botoes = document.querySelectorAll(".room");
    botoes.forEach((btn) => {
        btn.addEventListener("click", () => {
            const botaoId = parseInt(btn.id);
            const botaoAtiv = btn.classList.contains("active");
            const p = document.querySelector('.titulo-filtro')
            const text = btn.querySelector("h3").textContent
            
            botoes.forEach((b) => b.classList.remove("active"));
            valorFiltro = [];
            p.textContent = ""

            if (!botaoAtiv) {
                btn.classList.add("active");
                valorFiltro.push(botaoId);
                p.textContent = `Filtrando por: ${text}`
            }



            atualizarPagina();
        });
    });



    const input = document.querySelector('.search-input')
    let temporizador;
    input.addEventListener('input', () => {
        clearTimeout(temporizador);

        temporizador = setTimeout(() => {
            const busca = TirarAcento(input.value.trim().toLowerCase());

            if (busca !== "") {
                PostagensBuscada = busca;
            } else {
                PostagensBuscada = [];
            }

            console.log("atualizado");
            atualizarPagina();
            
        }, 200);
    });

}

export function aplicarFiltro() {
    const buscaAtiva = PostagensBuscada.length > 0;
    const filtroAtivo = valorFiltro.length > 0;

    // Começa com todas as postagens
    let resultado = [...postagens];

    // Aplica busca textual se houver
    if (buscaAtiva) {
        resultado = resultado.filter(item => {
            const nomeNormalizado = TirarAcento(item.nome_produto.trim().toLowerCase()).split(" ");
            return nomeNormalizado.some(palavra => palavra.startsWith(PostagensBuscada));
        });
    }

    // Aplica filtro por cômodo se houver
    if (filtroAtivo) {
        resultado = resultado.filter(item => valorFiltro.includes(item.id_comodo));
    }

    // Atualiza o array final
    postagensFiltradas = resultado;
}
