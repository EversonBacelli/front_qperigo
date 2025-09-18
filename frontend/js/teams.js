// Database local dos membros da equipe
const teamMembers = {
    "info": {
        "2024": [
            {
                "name": "Fernando Ramirez Gutierrez",
                "role": "Desenvolvedor Front-end",
                "image": "assets/images/team/",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Gabriel Carvalho Feltrin",
                "role": "Desenvolvedor Front-end",
                "image": "assets/images/team/",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Luiz Fernando dos Santos Vieira",
                "role": "Desenvolvedor Back-end",
                "image": "assets/images/team/",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Geovanne de Souza Silva",
                "role": "Desenvolvedor Back-end",
                "image": "assets/images/team/",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            }
        ],
        "2025": [
            {
                "name": "Rodrigo Valentim de Araujo",
                "role": "Desenvolvedor FullStack",
                "image": "assets/images/team/",
                "social": {
                    "github": "https://github.com/Rod-Web",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Mirela Santos de Amarante",
                "role": "Desenvolvedora FullStack",
                "image": "assets/images/team/",
                "social": {
                    "github": "https://github.com/Miih-Santos",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Vinícius Martins de Paiva",
                "role": "Desenvolvedor Back-end",
                "image": "assets/images/teams/informatica/2025/vinicius.jpg",
                "social": {
                    "github": "https://github.com/Martins-Vini",
                    "linkedin": "",
                    "instagram": "#"
                }
            },
            {
                "name": "Nicollas Trindade",
                "role": "Desenvolvedor Front-end",
                "image": "assets/images/teams/informatica/2025/trindade.jpg",
                "social": {
                    "github": "https://github.com/nicollastrindade",
                    "linkedin": "#",
                    "instagram": "#"
                }
            }
        ]
    },
    "quimica": {
        "2024": [
            {
                "name": "Guilherme Pereira Bispo dos Santos",
                "role": "Pesquisador",
                "image": "assets/images/teams/quimica/2024/Guilherme-Pereira-Bispo-dos-Santos.jpg",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Jéssica Ferreira da Silva Santos",
                "role": "Pesquisadora",
                "image": "assets/images/teams/quimica/2024/Jessica-Ferreira-da-Silva Santos.jpg",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Kaique Lira dos Santos",
                "role": "Pesquisador",
                "image": "assets/images/teams/quimica/2024/Kaique-Lira-dos-Santos.jpeg",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Mariana Alvarenga Barreto",
                "role": "Pesquisadora",
                "image": "assets/images/teams/quimica/2024/Mariana-Alvarenga-Barreto.jpg",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Otávio Alves Paulino",
                "role": "Pesquisador",
                "image": "assets/images/teams/quimica/2024/Otavio-Alves-Paulino.jpg",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Paulo Henrique da Silva Veloso",
                "role": "Pesquisador",
                "image": "assets/images/teams/quimica/2024/Paulo-Henrique-da-Silva-Veloso.jpg",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Thais Luiza Alves da Silva Borges",
                "role": "Pesquisadora",
                "image": "assets/images/teams/quimica/2024/Thais-Luiza-Alves-da-Silva-Borges.jpg",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            }
        ],
        "2025": [
            {
                "name": "Ana Júlia",
                "role": "Pesquisadora",
                "image": "assets/images/team/",
                "social": {
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Camila Borges",
                "role": "Técnica de laboratório",
                "image": "assets/images/team/",
                "social": {
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "João Vitor",
                "role": "Estagiário",
                "image": "assets/images/team/",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            },
            {
                "name": "Pedro Henrique",
                "role": "Analista",
                "image": "assets/images/team/",
                "social": {
                    "github": "#",
                    "linkedin": "#",
                    "instagram": "#"
                }
            }
        ]
    }
};

// Função para carregar os membros da equipe
function loadTeamMembers() {
    // Carregar equipe de informática
    const teamInfoSelect = document.getElementById('team-info');
    const containerInfo = document.querySelector('.container-info');
    
    // Carregar equipe de química
    const teamQuimicaSelect = document.getElementById('team-quimica');
    const containerQuimica = document.querySelector('.container-quimica');
    
    // Função para renderizar os cards
    function renderCards(container, team, year) {
        container.innerHTML = '';
        
        if (teamMembers[team] && teamMembers[team][year]) {
            teamMembers[team][year].forEach(member => {
                const card = document.createElement('div');
                card.className = 'card';
                
                // Usar imagem placeholder se a imagem não existir
                const imageSrc = member.image || 'assets/images/teams/placeholder.jpg';
                
                // Gerar HTML para redes sociais baseado no tipo de equipe
                let socialHTML = '';
                
                if (team === 'info') {
                    // Para informática: mostrar todos os três ícones
                    socialHTML = `
                        <a href="${member.social.github}" target="_blank"><i class="fab fa-github"></i></a>
                        <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="${member.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                    `;
                } else if (team === 'quimica') {
                    // Para química: mostrar apenas LinkedIn e Instagram
                    socialHTML = `
                        <a href="${member.social.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
                        <a href="${member.social.instagram}" target="_blank"><i class="fab fa-instagram"></i></a>
                    `;
                }
                
                card.innerHTML = `
                    <img src="${imageSrc}" alt="${member.name}" class="img-member" onerror="this.src='assets/images/teams/placeholder.jpg'">
                    <h4>${member.name}</h4>
                    <p>${member.role}</p>
                    <div class="member-social">
                        ${socialHTML}
                    </div>
                `;
                
                container.appendChild(card);
            });
        }
    }
    
    // Renderizar inicialmente
    renderCards(containerInfo, 'info', '2024');
    renderCards(containerQuimica, 'quimica', '2024');
    
    // Adicionar event listeners para os selects
    teamInfoSelect.addEventListener('change', function() {
        const year = this.value;
        renderCards(containerInfo, 'info', year);
    });
    
    teamQuimicaSelect.addEventListener('change', function() {
        const year = this.value;
        renderCards(containerQuimica, 'quimica', year);
    });
}

// Adicionar estilos para as redes sociais dos membros
const style = document.createElement('style');
style.textContent = `
    .member-social {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        gap: 12px;
    }
    
    .member-social a {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: #f0f0f0;
        color: #423A47;
        transition: all 0.3s ease;
    }
    
    .member-social a:hover {
        background-color: #6D5D7A;
        color: white;
        transform: translateY(-3px);
    }
`;
document.head.appendChild(style);