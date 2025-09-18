import { btnEsperto } from "./components/global/rolagem-topo.js";
import { configurarToggleFiltro } from "./components/home/show-filtro.js";
import { carregarDados } from "./functions/api.js";
import { configuracaoFiltro } from "./functions/filtros.js";
import { atualizarPagina } from "./functions/render.js";
import { renderizarSecaoDestaque } from "./functions/render.js";
document.addEventListener("DOMContentLoaded", async ()=> {
    await carregarDados()
    btnEsperto();
    renderizarSecaoDestaque()
    configurarToggleFiltro()
    configuracaoFiltro(atualizarPagina)
    atualizarPagina()
})
