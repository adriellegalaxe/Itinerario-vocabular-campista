/* ======================================================
   DESAFIO CAMPISTÊS
   Quiz de múltipla escolha gerado dinamicamente a partir
   de dados-vocabulario.js. Nenhuma pergunta é fixa no HTML —
   adicionar uma palavra ao acervo já alimenta o jogo.
   ====================================================== */

const painel = document.getElementById('painel');
const TOTAL_PERGUNTAS = Math.min(8, VOCABULARIO.length);

let perguntas = [];
let indiceAtual = 0;
let acertos = 0;
let respondida = false;

function embaralhar(array) {
  const copia = [...array];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

function montarPerguntas() {
  const sorteadas = embaralhar(VOCABULARIO).slice(0, TOTAL_PERGUNTAS);

  perguntas = sorteadas.map(verbete => {
    const outros = VOCABULARIO.filter(v => v.id !== verbete.id);
    const distratores = embaralhar(outros).slice(0, 3).map(v => v.resumo);
    const opcoes = embaralhar([verbete.resumo, ...distratores]);

    return {
      termo: verbete.termo,
      categoria: verbete.categoria,
      correta: verbete.resumo,
      opcoes
    };
  });
}

function iniciarJogo() {
  montarPerguntas();
  indiceAtual = 0;
  acertos = 0;
  renderPergunta();
}

function renderPergunta() {
  respondida = false;
  const pergunta = perguntas[indiceAtual];
  const progresso = Math.round((indiceAtual / perguntas.length) * 100);

  painel.innerHTML = `
    <div class="desafio-progresso">
      <span>Pergunta ${indiceAtual + 1} de ${perguntas.length}</span>
      <span>${acertos} acerto${acertos === 1 ? '' : 's'}</span>
    </div>
    <div class="desafio-barra"><div class="desafio-barra-preenchida" style="width:${progresso}%"></div></div>

    <p class="desafio-pergunta-label">O que significa</p>
    <h3 class="desafio-termo">${pergunta.termo}</h3>

    <div class="desafio-opcoes" id="opcoes"></div>
    <p class="desafio-feedback" id="feedback"></p>
    <button class="desafio-continuar" id="btnContinuar" disabled>
      ${indiceAtual === perguntas.length - 1 ? 'Ver resultado' : 'Próxima pergunta'}
    </button>
  `;

  const opcoesEl = document.getElementById('opcoes');
  pergunta.opcoes.forEach(opcao => {
    const btn = document.createElement('button');
    btn.className = 'desafio-opcao';
    btn.textContent = opcao;
    btn.addEventListener('click', () => responder(btn, opcao, pergunta.correta));
    opcoesEl.appendChild(btn);
  });

  document.getElementById('btnContinuar').addEventListener('click', avancar);
}

function responder(botao, escolhida, correta) {
  if (respondida) return;
  respondida = true;

  const acertou = escolhida === correta;
  if (acertou) acertos++;

  document.querySelectorAll('.desafio-opcao').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correta) btn.classList.add('correta');
    else if (btn === botao) btn.classList.add('errada');
  });

  document.getElementById('feedback').textContent = acertou
    ? 'Correto — é exatamente isso.'
    : 'Essa não é a definição de "' + perguntas[indiceAtual].termo + '".';

  document.getElementById('btnContinuar').disabled = false;
}

function avancar() {
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    renderPergunta();
  } else {
    renderResultado();
  }
}

function mensagemFinal(percentual) {
  if (percentual === 100) return 'Domínio completo do campistês. Você é da comandita.';
  if (percentual >= 70) return 'Muito bom — você reconhece o dialeto campista com folga.';
  if (percentual >= 40) return 'Bom começo. O acervo tem mais verbetes para explorar.';
  return 'O campistês ainda vai render boas descobertas — vale revisitar o acervo.';
}

function renderResultado() {
  const percentual = Math.round((acertos / perguntas.length) * 100);

  painel.innerHTML = `
    <div class="desafio-resultado">
      <p class="desafio-pergunta-label" style="text-align:center;">Resultado</p>
      <p class="desafio-resultado-num">${acertos}<span style="font-size:2rem; color:var(--texto-suave); font-weight:400;">/${perguntas.length}</span></p>
      <p class="desafio-resultado-total">${percentual}% de acerto nesta rodada</p>
      <p class="desafio-resultado-msg">${mensagemFinal(percentual)}</p>
      <div class="desafio-botoes">
        <button class="desafio-continuar" id="btnRefazer">Jogar novamente</button>
        <a href="vocabulario.html" class="btn-secondary" style="color:var(--azul-escuro); border-color:var(--borda); padding:13px 30px;">Rever o acervo</a>
      </div>
    </div>
  `;

  document.getElementById('btnRefazer').addEventListener('click', iniciarJogo);
}

iniciarJogo();
