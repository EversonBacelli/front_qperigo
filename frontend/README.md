*Estrutura de arquivos e pastas*

frontend/

├── assets/                     # Arquivos estáticos (imagens, fonts, etc.)

│   ├── images/                 # Todas as imagens do projeto
│   │   ├── banners/            # banners do carrossel do home
│   │   │   ├── banner-1.png
│   │   │   ├── banner-2.png
│   │   │   └── banner-3.png
│   │   ├── icons/              # icons utilizados no filter
│   │   │   ├── banner-1.png    z   z
│   │   │   ├── banner-2.png
│   │   │   ├── banner-3.png
│   │   │   ├── banner-1.png
│   │   │   ├── banner-2.png
│   │   │   └── banner-3.png
│   │   ├── news/               # capas das noticias utilizados no home
│   │   │   ├── noticia-1.png
│   │   │   └── noticia-2.png
│   │   ├── skeletion/               # imagens que preenche o espaço mas são provisórias
│   │   │   ├── covers/
│   │   │   │   ├── ....
│   │   │   │   ├── ....
│   │   │   │   ├── ....
│   │   │   │   ├── ....
│   │   │   │   ├── ....
│   │   │   │   └── ....
│   │   │   └── cover-temp.png
│   │   └── logo_q_perigo.png
│   └── favicon.ico             # Ícone da página

├── css/                        # Folhas de estilo

│   ├── base/             # Estilos bases de todas as páginas
│   │   └── reset.css

│   ├── components/             # Estilos específicos de componentes
│   │   ├──conteudo/
│   │   │   ├── botao-voltar.css                                                                        ---- Estudar IA
│   │   │   └── carrossel-info.css                                                                      ---- Estudar IA
│   │   ├── global/
│   │   │   └── rolagem-topo.css
│   │   └── home/
│   │   │   ├── banner-home.css                                                                         ---- Estudar IA
│   │   │   ├── card-gerais.css                                                                         ---- Estudar IA
│   │   │   ├── filtro.css                                                                              ---- Estudar IA
│   │   │   ├── news.css
│   │   │   └── numberpages.css

│   ├── layout/                 # layouts padrão 
│   │   │   ├── footer.css
│   │   │   ├── header.css                                                                              ---- Estudar IA (lupa)
│   │   │   └── main.css
│   └── pages/                 # conteudos individuais 
│   │   └── conteudo.css
├── js/
│   ├── components/             # Scripts de elementos
│   │   ├── conteudo
│   │   │   └── carrossel-info.js                                                                        ---- Estudar IA
│   │   ├── global
│   │   │   └── rolagem-topo.js
│   │   ├── home                                                               
│   │   │   └── carrossel-home.js                                                                       ---- Estudar IA
│   ├── functions/
│   │   ├── api.js                  # Scripts específicos da requisição
│   │   ├── filtros.js              # Scripts específicos para configuração e desenvolvimento de filtros
│   │   └── render.js               # Scripts específicos para renderizar os cards

│   ├── template/                  # Templates/formas
│   │   ├── conteudo/   
│   │   │   └── informacoes-conteudo.js                                                                           

│   │   └── home/
│   │   │   └── card-geral.js                                                                           
|   └──main.js                  # Script central do home

├── conteudo.html               # Página dos conteúdos dos cards
├── desenvolvedores.html        # Página sobre os desenvolvedores
├── index.html                  # Página principal

└── README.md                   # Documentação do projeto