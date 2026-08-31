let categoriaAtiva = 'todos';

const wppIcon = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.876L.057 23.999l6.304-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.994-1.366l-.357-.212-3.744.982.999-3.648-.233-.374A9.786 9.786 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
</svg>`;

function criarCard(c) {
  const wpp = `https://wa.me/${c.whatsapp}?text=Olá! Vi seu comércio no Bela Vista Conecta e gostaria de saber mais.`;
  const badges = [
    c.novo ? '<span class="badge badge-novo">Novo</span>' : '',
    c.destaque ? '<span class="badge badge-destaque">Destaque</span>' : ''
  ].join('');

  return `
    <article class="card" data-cat="${c.categoria}" data-nome="${c.nome.toLowerCase()}">
      <div class="card-emoji">${c.emoji}</div>
      <h3>${c.nome}</h3>
      <p class="card-desc">${c.descricao}</p>
      <div class="card-footer">
        <a class="card-wpp" href="${wpp}" target="_blank" rel="noopener" aria-label="Contato WhatsApp ${c.nome}">
          ${wppIcon} WhatsApp
        </a>
        <div>${badges}</div>
      </div>
    </article>
  `;
}

function renderizar(lista) {
  const grid = document.getElementById('grid');
  const empty = document.getElementById('empty');
  const label = document.getElementById('count-label');

  if (lista.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    label.textContent = '0 encontrados';
  } else {
    grid.innerHTML = lista.map(criarCard).join('');
    empty.classList.add('hidden');
    label.textContent = `${lista.length} cadastrado${lista.length !== 1 ? 's' : ''}`;
  }
}

function filtrar() {
  const busca = document.getElementById('search-input').value.toLowerCase().trim();
  const resultado = comercios.filter(c => {
    const matchCat = categoriaAtiva === 'todos' || c.categoria === categoriaAtiva;
    const matchBusca = !busca || c.nome.toLowerCase().includes(busca) || c.descricao.toLowerCase().includes(busca);
    return matchCat && matchBusca;
  });

  const label = document.getElementById('resultado-label');
  label.textContent = categoriaAtiva === 'todos' ? 'Todos os comércios' : nomeCategoria(categoriaAtiva);

  renderizar(resultado);
}

function setCat(cat, btn) {
  categoriaAtiva = cat;
  document.querySelectorAll('.cat').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filtrar();
}

function nomeCategoria(cat) {
  const nomes = {
    alimentacao: 'Alimentação',
    servicos: 'Serviços',
    comercio: 'Comércio',
    saude: 'Saúde',
    beleza: 'Beleza',
    pet: 'Pet',
    educacao: 'Educação'
  };
  return nomes[cat] || cat;
}

document.getElementById('search-input').addEventListener('keydown', e => {
  if (e.key === 'Enter') filtrar();
});

renderizar(comercios);
