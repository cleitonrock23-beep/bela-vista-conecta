let categoriaAtiva = 'todos';

const iconWpp = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.563 4.14 1.544 5.876L.057 23.999l6.304-1.654A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.8 9.8 0 01-4.994-1.366l-.357-.212-3.744.982.999-3.648-.233-.374A9.786 9.786 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
</svg>`;

const iconPin = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
  <path d="M8 1.5A4.5 4.5 0 0 1 12.5 6c0 3-4.5 8.5-4.5 8.5S3.5 9 3.5 6A4.5 4.5 0 0 1 8 1.5z"/>
  <circle cx="8" cy="6" r="1.5"/>
</svg>`;

const iconClock = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
  <circle cx="8" cy="8" r="6.5"/>
  <path d="M8 4.5V8l2.5 2" stroke-linecap="round"/>
</svg>`;

const nomesCat = {
  alimentacao: 'Alimentação',
  servicos: 'Serviços',
  comercio: 'Comércio',
  saude: 'Saúde',
  beleza: 'Beleza',
  pet: 'Pet',
  educacao: 'Educação'
};

function criarCard(c) {
  const wppLink = `https://wa.me/${c.whatsapp}?text=Olá!%20Vi%20seu%20comércio%20no%20Bela%20Vista%20Conecta%20e%20gostaria%20de%20saber%20mais.`;

  const badges = [
    c.novo      ? '<span class="badge badge-novo">Novo</span>'      : '',
    c.destaque  ? '<span class="badge badge-destaque">Destaque</span>' : ''
  ].join('');

  const metaEnd = c.endereco
    ? `<span class="card-meta-item">${iconPin} ${c.endereco}</span>` : '';
  const metaHor = c.horario
    ? `<span class="card-meta-item">${iconClock} ${c.horario}</span>` : '';

  return `
    <div class="card">
      <div class="card-emoji-wrap">${c.emoji}</div>
      <div class="card-body">
        <div class="card-top">
          <span class="card-nome">${c.nome}</span>
          ${badges}
        </div>
        <p class="card-desc">${c.descricao}</p>
        <div class="card-meta">
          ${metaEnd}
          ${metaHor}
        </div>
      </div>
      <div class="card-actions">
        <a class="btn-wpp" href="${wppLink}" target="_blank" rel="noopener" aria-label="WhatsApp de ${c.nome}">
          ${iconWpp} WhatsApp
        </a>
        <span class="card-cat-tag">${nomesCat[c.categoria] || c.categoria}</span>
      </div>
    </div>
  `;
}

function filtrar() {
  const busca = (document.getElementById('search-input')?.value || '').toLowerCase().trim();
  const resultado = comercios.filter(c => {
    const matchCat  = categoriaAtiva === 'todos' || c.categoria === categoriaAtiva;
    const matchBusca = !busca ||
      c.nome.toLowerCase().includes(busca) ||
      c.descricao.toLowerCase().includes(busca) ||
      (c.endereco || '').toLowerCase().includes(busca);
    return matchCat && matchBusca;
  });

  const lista  = document.getElementById('lista');
  const empty  = document.getElementById('empty');
  const count  = document.getElementById('count-label');

  if (resultado.length === 0) {
    lista.innerHTML = '';
    empty.classList.remove('hidden');
    count.textContent = '0 encontrados';
  } else {
    lista.innerHTML = resultado.map(criarCard).join('');
    empty.classList.add('hidden');
    count.textContent = `${resultado.length} encontrado${resultado.length !== 1 ? 's' : ''}`;
  }

  const total = document.getElementById('total-count');
  if (total) total.textContent = comercios.length;
}

function setCat(cat, btn) {
  categoriaAtiva = cat;
  document.querySelectorAll('.cat').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  filtrar();
}

document.addEventListener('DOMContentLoaded', () => {
  filtrar();
  const input = document.getElementById('search-input');
  if (input) {
    input.addEventListener('input', filtrar);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') filtrar(); });
  }
});
