import { btnEsperto } from "../../components/global/rolagem-topo.js";
import { formatDate } from "./format-data.js";

btnEsperto()

function receberDados() {
    const dados = localStorage.getItem("postagens");
    if(dados) {
        const postagens = JSON.parse(dados);
        console.log("Dados recebidos do localStorage")
        return postagens
    } else {
        console.error("Erro: Dados não encontrados.");
        return [];
    }

}

function parametrosURl(){
    let params = new URLSearchParams(window.location.search);
    let id = params.get('id');
    
    if (id) {
        console.log("parametro id capturado da url")   
        return id
    } else {
        console.error("Erro: Parâmetro 'id' não encontrado.");
        return null;
    }
}

const pegarId = parametrosURl()
const pegarDados = receberDados()


function filtarPostAtual(dados, id) {
    const post_atual = dados.find(dado => dado.id_postagem == id);
    console.log("Postagem filtrada")
        if (!post_atual) {
        console.error("Postagem não encontrada.");
    }
    return post_atual;
}

if(pegarId && pegarDados) {
    const post_filtrado = filtarPostAtual(pegarDados, pegarId)
    if(post_filtrado) {
        PreencherHTML(post_filtrado)
    } else {
        console.error("Postagem não foi filtrada ou encontrada corretamente.");
    }
} else {
    console.error("Id da URL ou dados não foram capturados ou encontrados.");
}

function PreencherHTML(post_filtrado) {

    document.title = post_filtrado.nome_produto

    const h1 = document.querySelector("h1")
    h1.textContent = `${post_filtrado.nome_produto} :  Tudo que você precisa saber para uma limpeza segura.`

    const data = document.querySelector(".data")
    const banner = document.querySelector(".img_produto")
    const box_banner = document.querySelector(".banner")

    const dataformatada = formatDate(post_filtrado.data_publicacao)
    data.textContent = dataformatada
    banner.src = post_filtrado.banner


    const divPericulosidade = document.createElement('div');
    const icon = document.createElement('img');
    const badge = document.createElement('span');

    divPericulosidade.className = 'box-badge';
    icon.className = 'icon-badge';
    badge.className = 'card-badge';

    badge.textContent = post_filtrado.periculosidade
    const nivel = post_filtrado.periculosidade.trim().toLowerCase();

    switch (nivel) {
        case "perigo":
        
            icon.src = "/frontend/assets/images/icons/periculosidade/perigo.svg"
            divPericulosidade.style.backgroundColor = 'red';

        break;
        case "atenção":

            icon.src = "/frontend/assets/images/icons/periculosidade/atencao.svg"
            divPericulosidade.style.backgroundColor = 'yellow'
            badge.style.color = 'black'

        break;
        case "seguro":

            icon.src = "/frontend/assets/images/icons/periculosidade/seguro.svg"
            divPericulosidade.style.backgroundColor = 'green'
        
        break;
        default:

            console.log("Erro na separação de cor dos badges")
        break;
    }



    divPericulosidade.appendChild(icon)
    divPericulosidade.appendChild(badge)
    box_banner.appendChild(divPericulosidade)

    let indice = [
        `O que é o ${post_filtrado.nome_produto}?`, 
        `Do que é feito o ${post_filtrado.nome_produto}?`, 
        `Como usar o ${post_filtrado.nome_produto}?`,
        `Pode misturar quais produtos com o ${post_filtrado.nome_produto}?`, 
        `Como guardar o ${post_filtrado.nome_produto}?`
    ]

    const nomeInfoDb = [
        "introducao", 
        "composicao", 
        "manipulacao", 
        "combinacoes_perigosas", 
        "armazenamento"
    ]

    let li = document.querySelectorAll(".indice nav ul li a")

    let lis = document.querySelectorAll(".indice nav ul li")

    lis.forEach(indice => {
        indice.onclick = ()=> indiceSelecionado(indice)
    })

    function indiceSelecionado(indice) {
        lis.forEach(item => item.classList.remove("indiceat"));
        indice.classList.add("indiceat")
    }

    if (li.length === indice.length && indice.length === nomeInfoDb.length) {
    
        indice.forEach((indiceAtual, index) => {
    
            li[index].href = `#art${index}`;
            li[index].textContent = indiceAtual
            

            criarTagsEClass(post_filtrado, indiceAtual, nomeInfoDb, index)

        })

    }  else {
        console.error("Erro operacional. Verifique os dados ou reporte aos desenvolvedores.");
        console.log("Quantidade de tag <li> ! de quantidade de indice.length e nomeInfoDb.length")
}



}

function criarTagsEClass(post_filtrado, indiceAtual, nomeInfoDb, index) {
    
    const container = document.querySelector('.conteudo')

    

    let art = document.createElement("div")
    let h3 = document.createElement("h3")
    let p = document.createElement("p")

    art.classList.add("art")
    art.id = `art${index}`
    
    const larguraTela = window.innerWidth;
    const divIndice = document.querySelector(".indice");

    if (larguraTela < 768) {
        if(index == 0) 
        container.appendChild(divIndice);
        console.log("Div movida para dentro da container-principal");
    }




    h3.textContent = indiceAtual
    const topicoAtual = nomeInfoDb[index]
    p.textContent = post_filtrado[topicoAtual]

    art.appendChild(h3)
    art.appendChild(p)

    if(index == 3){
            
        const divVideo = document.createElement("div");
        divVideo.classList.add("video")
            
            
        let img = document.createElement("img");
        img.src = "/frontend/assets/images/skeletion/cover-temp.png"
        img.classList.add("video_experiencia")

        divVideo.appendChild(img)
        art.appendChild(divVideo)

    }

    container.appendChild(art)


}