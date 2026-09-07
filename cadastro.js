/**
 * IMPORTANTE: troque pelo seu WhatsApp real
 * Formato: 55 + DDD + número (só números)
 * Exemplo: 5511987654321
 */
const SEU_WHATSAPP = "5511900000000";

function enviarCadastro() {
  const nome      = document.getElementById('nome').value.trim();
  const categoria = document.getElementById('categoria').value;
  const descricao = document.getElementById('descricao').value.trim();
  const whatsapp  = document.getElementById('whatsapp').value.trim();
  const endereco  = document.getElementById('endereco').value.trim();
  const horario   = document.getElementById('horario').value.trim();

  let valido = true;
  document.querySelectorAll('.erro').forEach(e => e.classList.add('hidden'));

  if (!nome)      { document.getElementById('erro-nome').classList.remove('hidden'); valido = false; }
  if (!categoria) { document.getElementById('erro-cat').classList.remove('hidden');  valido = false; }
  if (!descricao) { document.getElementById('erro-desc').classList.remove('hidden'); valido = false; }
  if (!whatsapp)  { document.getElementById('erro-wpp').classList.remove('hidden');  valido = false; }

  if (!valido) return;

  const cats = { alimentacao:'Alimentação', servicos:'Serviços', comercio:'Comércio', saude:'Saúde', beleza:'Beleza', pet:'Pet', educacao:'Educação' };

  const msg = `*Novo cadastro — Bela Vista Conecta* 📍\n\n🏪 *Comércio:* ${nome}\n🗂️ *Categoria:* ${cats[categoria]||categoria}\n📝 *Descrição:* ${descricao}\n📱 *WhatsApp:* ${whatsapp}${endereco?`\n📍 *Endereço:* ${endereco}`:''}${horario?`\n🕐 *Horário:* ${horario}`:''}\n\nQuero cadastrar meu comércio gratuitamente!`;

  document.getElementById('form-area').classList.add('hidden');
  document.getElementById('sucesso').classList.remove('hidden');
  setTimeout(() => window.open(`https://wa.me/${SEU_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank'), 400);
}
