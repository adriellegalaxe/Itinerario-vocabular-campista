 var map = L.map('map').setView([-21.75, -41.32], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const pontos = [
  {
    nome: "Praça São Salvador",
    lat: -21.756281,
    lon: -41.323603,
    imagem: "https://live.staticflickr.com/4207/34372545703_d3d530d2a0_b.jpg",
    descricao: "Praça central de Campos, palco de manifestações e eventos culturais."
  },
  {
    nome: "Museu Histórico de Campos",
    lat: -21.756047,
    lon: -41.324065,
    imagem: "https://s2-g1.glbimg.com/xiA1DUB0ElBei9xjxB3FYtUpUKo=/0x0:1280x853/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/B/F/UjWFjaTyasnTAtjZsgyg/whatsapp-image-2023-06-29-at-14.54.53.jpeg",
    descricao: "Museu que preserva a história da cidade com acervo permanente."
  },

  {
    nome: "Cais da Lapa",
    lat: -21.75629,
    lon: -41.31945,
    imagem: "https://wmaisnoticias.com.br/wp-content/uploads/2023/09/772f6630-be54-437b-a178-261cd9e3c534.jpg",
    descricao: "Beira-rio tradicional de Campos, ponto de convivência e história."
  },
  {
    nome: "Jardim São Benedito",
    lat: -21.765035,
    lon: -41.321611,
    imagem: "https://j3news.com/wp-content/uploads/2025/01/Clube-Jardim-Sao-Benedito-Ft-Josh-24.jpg",
    descricao: "Praça histórica com a Igreja de São Benedito e ambiente arborizado."
  },
  {
    nome: "Academia Campista de Letras",
    lat: -21.763921,
    lon: -41.321455,
    imagem: "https://portalexclusivorj.com/hf-conteudo/uploads/posts/2023/06/18303_academia-c-l-jpg.jpg",
    descricao: "A Academia Campista de Letras é uma instituição cultural dedicada à valorização da literatura e das artes em Campos dos Goytacazes. Fundada com o objetivo de preservar e promover a produção intelectual local, ela reúne escritores, poetas e estudiosos da região, mantendo viva a tradição literária campista através de eventos, publicações e encontros culturais."
  },
  {
    nome: "Teatro Trianon",
    lat: -21.762681,
    lon: -41.319878,
    imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyM2Ur-YKaEyLv90CBF4xQMlzhJ5dNeeqC1FgyErYJeQbffGcpAGtVsiN0ajVVgzBchfw57XahqAnyHb3rvpNtyBLCXK57ipggSz18ff9c7ycaGn8dNVR3vokmg-b8lhmuLA-KEVGB9zQ/s1600/Teatro+Municipal+Trianon+9+(05-09-2010).JPG",
    descricao: "Principal teatro da cidade, com programação cultural variada."
  },
   {
    nome: "Cidade da Criança",
    lat: -21.765790,
    lon: -41.325132,
    imagem: "https://www.nfnoticias.com.br/images/noticias/3757_090117190210_WhatsApp_Image_2017_01_09_at_6.40.13_PM.jpeg",
    descricao: "Parque educativo com atrações infantis e brinquedos culturais."
  },
   {
    nome: "Villa Maria",
    lat: -21.752402,
    lon: -41.333651,
    imagem: "https://www.folha1.com.br/_midias/jpg/2023/06/16/d6fc9eaf_d6fd_42a5_a985_ba0bbd5f1b14-2093724.jpg",
    descricao: "Antigo casarão histórico restaurado, sede de eventos culturais"
  },
 {
    nome: "cachoeira do Rio Preto",
    lat: -21.7063557,
    lon: -41.62836417,
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGoGOIljbE-b62ZVJacMA-2jn_4cdTyOViw&s",
    descricao: "A Cachoeira do Rio Preto é um belo ponto turístico natural localizado na região serrana de Campos dos Goytacazes. Rodeada por mata atlântica, suas águas límpidas e quedas d’água proporcionam um ambiente ideal para banho, trilhas e momentos de lazer em meio à natureza."
  },
  {
    nome: "Monumento de Farol de São Thomé",
    lat: -22.0504909,
    lon: -41.0681082,
    imagem: "https://media-cdn.tripadvisor.com/media/photo-s/06/44/27/e0/praia-do-farol.jpg",
    descricao: "Construção que marca a origem do Farol de São Thomé."
  },
];

pontos.forEach(p => {
  const popupHtml = `
    <div style="max-width: 200px;">
      <h3>${p.nome}</h3>
      <img src="${p.imagem}" alt="${p.nome}" style="width: 100%; border-radius: 5px; margin-bottom: 5px;">
      <p>${p.descricao}</p>
    </div>
  `;
  L.marker([p.lat, p.lon]).addTo(map).bindPopup(popupHtml);
});
