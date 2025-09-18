export function cardGeral(data) {
    // Criar elemento card
    const card = document.createElement('div');
    card.className = 'card';
    
    // Criar badge de periculosidade
    const divPericulosidade = document.createElement('div');
    const icon = document.createElement('img');
    const badge = document.createElement('span');

    divPericulosidade.className = 'box-badge';
    icon.className = 'icon-badge';
    badge.className = 'card-badge';

    badge.textContent = data.periculosidade
    
    const nivel = data.periculosidade.trim().toLowerCase();

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


    
    // Criar imagem do banner

    const img = document.createElement('img');
    img.className = 'card-image';
    img.src = data.banner; // Usa o banner padrão para outros casos

    



    img.alt = data.nome_produto;
    
    // Criar conteúdo do card
    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';
    
    // Criar título
    const title = document.createElement('h2');
    title.className = 'card-title';
    title.textContent = data.nome_produto;
    
    // Criar introdução (com limite de 200 caracteres)
    const intro = document.createElement('p');
    intro.className = 'card-intro';
    const maxLength = 200;
    intro.textContent = data.introducao.length > maxLength 
        ? `${data.introducao.substring(0, maxLength)}...` 
        : data.introducao;
    
    // Criar link "Saiba Mais"
    const link = document.createElement('a');
    link.className = 'card-link';
    link.textContent = 'Continuar lendo';
    link.href = `/frontend/conteudo.html?id=${data.id_postagem}`;
    
    // Montar a estrutura do card
    card.appendChild(divPericulosidade);
    card.appendChild(img);
    
    cardContent.appendChild(title);
    cardContent.appendChild(intro);
    cardContent.appendChild(link);
    
    card.appendChild(cardContent);
    
    return card;
}