/**
 * IMPORTANTE: troque o número abaixo pelo seu WhatsApp real
 * Formato: 55 + DDD + número (apenas números)
 * Exemplo: 5511987654321
 */
const SEU_WHATSAPP = "5511900000000";

function enviarCadastro() {
  const nome     = document.getElementById('nome').value.trim();
  const categoria = document.getElementById('categoria').value;
  const descricao = document.getElementById('descricao').value.trim();
  const whatsapp = document.getElementById('whatsapp').value.trim();
  const endereco = document.getElementById('endereco').value.trim();
  const horario  = document.getElementById('horario').value.trim();

  let valido = true;

  document.querySelectorAll('.erro').forEach(e => e.classList.add('hidden'));

  if (!nome) {
    document.getElementById('erro-nome').classList.remove('hidden');
    valido = false;
  }
  if (!categoria) {
    document.getElementById('erro-cat').classList.remove('hidden');
    valido = false;
  }
  if (!descricao) {
    document.getElementById('erro-desc').classList.remove('hidden');
    valido = false;
  }
  if (!whatsapp) {
    document.getElementById('erro-wpp').classList.remove('hidden');
    valido = false;
  }

  if (!valido) return;

  const categorias = {
    alimentacao: 'Alimentação',
    servicos: 'Serviços',
    comercio: 'Comércio',
    saude: 'Saúde',
    beleza: 'Beleza',
    pet: 'Pet',
    educacao: 'Educação'
  };

  const mensagem = `*Novo cadastro — Bela Vista Conecta* 📍

🏪 *Comércio:* ${nome}
🗂️ *Categoria:* ${categorias[categoria] || categoria}
📝 *Descrição:* ${descricao}
📱 *WhatsApp:* ${whatsapp}
${endereco ? `📍 *Endereço:* ${endereco}` : ''}
${horario ? `🕐 *Horário:* ${horario}` : ''}

Quero cadastrar meu comércio gratuitamente no site!`;

  const url = `https://wa.me/${SEU_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;

  document.getElementById('form-area').classList.add('hidden');
  document.getElementById('sucesso').classList.remove('hidden');

  setTimeout(() => { window.open(url, '_blank'); }, 400);
}
