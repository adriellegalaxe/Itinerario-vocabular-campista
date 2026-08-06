/* ======================================================
   ITINERÁRIO VOCABULAR CAMPISTA
   Base de dados do acervo lexical

   Cada verbete é tratado como um registro de arquivo:
   id        -> usado na URL (palavra.html?id=...)
   numero    -> número de registro no acervo (ordem de catalogação)
   termo     -> palavra ou expressão
   categoria -> "Palavra" | "Expressão" | "Fenômeno linguístico" | "Brincadeira"
   classe    -> classe gramatical ou natureza do registro
   resumo    -> definição curta (usada nos cartões e no Desafio)
   texto     -> array de parágrafos do verbete completo
   imagem    -> arquivo de imagem (opcional; se ausente, usa-se o monograma)

   Para adicionar uma nova palavra ao site inteiro, basta acrescentar
   um novo objeto a este array. Nenhuma outra página precisa ser criada.
   ====================================================== */

const VOCABULARIO = [
  {
    id: "baleba",
    numero: "001",
    termo: "Baleba",
    categoria: "Brincadeira",
    classe: "substantivo",
    resumo: "Bola de gude — o objeto e a brincadeira de rua.",
    imagem: "baleba.png",
    texto: [
      "No vocabulário campista, “baleba” é uma expressão afetuosa e nostálgica usada para se referir à bola de gude — tanto ao objeto quanto à brincadeira em si, que fez parte da infância de muitos. Era comum ver crianças reunidas em ruas de terra batida, calçadas ou praças, mergulhadas na competição amistosa e na alegria da brincadeira.",
      "Muito mais do que uma simples diversão, a baleba representa um tempo em que o brincar acontecia ao ar livre, em contato com outras crianças, longe das telas e da tecnologia. É uma lembrança viva de um estilo de vida mais comunitário e criativo, onde a infância era marcada pelo uso do corpo, da imaginação e da convivência."
    ]
  },
  {
    id: "bicicreta",
    numero: "002",
    termo: "Bicicreta",
    categoria: "Palavra",
    classe: "substantivo",
    resumo: "Bicicleta — variação fonética típica do interior.",
    imagem: "bicicreta.png",
    texto: [
      "Em Campos dos Goytacazes, a palavra “bicicreta” é uma forma popular e carinhosa de se referir à bicicleta. Essa variação na fala é muito comum em regiões do interior e entre gerações mais antigas, fazendo parte do colorido linguístico do dialeto campista. Frases como “Vai de bicicreta lá na feira” ainda ecoam nos bairros mais tradicionais e nas zonas rurais do município.",
      "Segundo o pesquisador Álvaro Rogério, essa variação pode ter raízes em um episódio histórico: em estudos sobre Grussaí, distrito de São João da Barra, aponta-se que, no século XIX, um navio holandês teria atracado na região. O contato dos marinheiros com os moradores locais teria deixado traços linguísticos absorvidos pelo povo da região.",
      "Desse contato teriam surgido fenômenos como a troca de “cl” por “cr” e de “tr” por “dr”, além da adição de sílabas em certas palavras — o que ajuda a explicar pronúncias como “bicicreta” no lugar de “bicicleta”. Apesar de estar em desuso nas áreas urbanas, a palavra resiste em comunidades com menor influência da mídia, funcionando como símbolo da fala popular e da história linguística regional."
    ]
  },
 {
    id: "chuvisco",
    numero: "003",
    termo: "Chuvisco",
    categoria: "Palavra",
    classe: "substantivo",
    resumo: "Doce típico da região, feito à base de ovos e açúcar.",
    imagem: "chuvisco.png",
    texto: [
      "“Chuvisco” é o nome de um doce tradicional campista, preparado à base de ovos e açúcar. O termo é um dos muitos registros gastronômicos do campistês — vocabulário que não descreve apenas modos de falar, mas também sabores e receitas que fazem parte da identidade da cidade."
    ]
  },

  {
    id: "coisar",
    numero: "004",
    termo: "Coisar",
    categoria: "Palavra",
    classe: "verbo",
    resumo: "O verbo-coringa: fazer algo que o contexto já explica.",
    texto: [
      "“Coisar” é um verdadeiro camaleão da língua campista: é o verbo que se usa quando a memória falha, quando não se quer ser específico ou quando o contexto já diz tudo. Em essência, “coisar” significa fazer algo — e esse “algo” fica subentendido na situação.",
      "É comum ouvir frases como “você precisa coisar esse documento no cartório” (autenticar, registrar) ou “a gente vai coisar a carne para o churrasco” (preparar, temperar). O verbo funciona como um atalho verbal para qualquer ação que a pessoa não consiga — ou não precise — nomear com exatidão.",
      "“Coisar” se encaixa no que se costuma chamar de “campistês”, o dialeto local repleto de expressões que identificam quem é de Campos. Mais do que uma palavra, é um pequeno retrato da agilidade da fala regional em se fazer entender mesmo quando a palavra exata escapa."
    ]
  },
  {
    id: "bichinha-bichinho",
    numero: "005",
    termo: "Bichinha / Bichinho",
    categoria: "Palavra",
    classe: "substantivo",
    resumo: "Forma carinhosa de se referir a alguém cujo nome se esqueceu.",
    texto: [
      "No campistês, “bichinha” e “bichinho” são usados para se referir a uma moça ou a um rapaz cujo nome momentaneamente escapou à memória de quem fala — um recurso afetuoso e informal, quase sempre acompanhado de uma descrição (“aquela bichinha lá do Parque Aurora”).",
      "O termo aparece com frequência em registros do dialeto da Baixada Campista e ilustra bem uma característica do campistês: a preferência por soluções de fala coletivas e afetivas no lugar da precisão, algo que também se observa em palavras como “coisar”."
    ]
  },
  {
    id: "cabrunco",
    numero: "006",
    termo: "Cabrunco",
    categoria: "Expressão",
    classe: "interjeição / substantivo",
    resumo: "Xingamento ou reforço de ênfase, de origem veterinária.",
    texto: [
      "“Cabrunco” é uma das palavras mais emblemáticas do campistês, usada tanto como xingamento leve quanto como reforço de ênfase em um sentido bom ou ruim — “que cabrunco de calor” ou “ele é um cabrunco mesmo”.",
      "A palavra deriva de “carbúnculo”, nome de uma doença que acomete o gado bovino, e que foi apropriada pela fala popular até se transformar num termo de identidade regional. Hoje figura até no nome de páginas dedicadas à memória linguística de Campos, como referência de humor e pertencimento."
    ]
  },
   {
    id: "caiau",
    numero: "007",
    termo: "Caiau",
    categoria: "Expressão",
    classe: "interjeição",
    resumo: "Interjeição espontânea de espanto ou surpresa.",
    texto: [
      "“Caiau!” é uma interjeição popular usada para expressar surpresa, susto ou admiração. Comum na fala informal, ela surge como um grito instintivo — aquele tipo de palavra que o corpo solta antes mesmo da mente pensar.",
      "Sua origem está ligada ao adjetivo “caiaudo” (alguém ousado, corajoso), mas com o tempo a expressão se desvinculou do sentido original e passou a funcionar isoladamente, como reação emocional — fruto da oralidade e do ritmo da fala cotidiana.",
      "Hoje, “Caiau!” pode ser comparada a interjeições como “Caramba!” ou “Eita!”, carregada de regionalismo e identidade. É uma palavra curta e viva, que revela num único som um mundo de sensações — nascida não dos livros, mas do calor da convivência campista."
    ]
  },
   {
    id: "lambdacismo-campista",
    numero: "008",
    termo: "Lambdacismo Campista",
    categoria: "Fenômeno linguístico",
    classe: "fenômeno fonético",
    resumo: "A troca do “L” pelo “R” — “Craudio”, “craro”, “broco”.",
    texto: [
      "Um dos traços mais reconhecíveis do campistês é a troca do fonema “L” pelo “R” em encontros consonantais, transformando “Cláudio” em “Craudio”, “claro” em “craro” e “bloco” em “broco”. O mesmo padrão aparece em “bicicreta” no lugar de “bicicleta”.",
      "Esse fenômeno é conhecido por pesquisadores do dialeto local como parte de um conjunto mais amplo de marcas fonéticas da Baixada Campista, ao lado da tendência de suprimir o “s” do plural na fala corrida. Mais do que um “erro”, trata-se de um traço identitário — a marca sonora de um jeito próprio de falar."
    ]
  }
],
  
  {
    id: "simininoesiminina",
    numero: "009",
    termo: "{Siminino / Siminina}",
    categoria: "Palavra",
    classe: "substantivo",
    resumo: "Modo de chamar uma pessoa (geralmente jovem ou criança) ou alguém cujo nome a gente esqueceu.",
    texto: [
      " Forma rápida de chamar alguém, unindo "esse" e "menino", frequentemente usada para conhecidos."
    ];
