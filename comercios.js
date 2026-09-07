/**
 * LISTA DE COMÉRCIOS — BELA VISTA CONECTA
 *
 * Para adicionar um novo comércio, copie um bloco e preencha:
 *
 *   {
 *     nome: "Nome do Comércio",
 *     categoria: "alimentacao",       <- veja categorias abaixo
 *     descricao: "Descrição curta",
 *     whatsapp: "5511900000000",      <- 55 + DDD + número, só números
 *     endereco: "Rua das Flores, 123",
 *     horario: "Seg-Sex 8h–18h",
 *     emoji: "🍕",
 *     novo: true,
 *     destaque: false
 *   },
 *
 * CATEGORIAS: alimentacao | servicos | comercio | saude | beleza | pet | educacao
 */

const comercios = [
  {
    nome: "Bar do Zé",
    categoria: "alimentacao",
    descricao: "Petiscos, chopp gelado e boa conversa",
    whatsapp: "5511900000001",
    endereco: "Rua Exemplo, 10 — Bela Vista",
    horario: "Ter-Dom 17h–00h",
    emoji: "🍺",
    novo: true,
    destaque: false
  },
  {
    nome: "Lanchonete da Maria",
    categoria: "alimentacao",
    descricao: "Lanches, pastéis e sucos naturais",
    whatsapp: "5511900000002",
    endereco: "Av. Principal, 45 — Bela Vista",
    horario: "Seg-Sáb 7h–20h",
    emoji: "🥙",
    novo: false,
    destaque: true
  },
  {
    nome: "Salão Beleza Total",
    categoria: "beleza",
    descricao: "Corte, escova, manicure e pedicure",
    whatsapp: "5511900000003",
    endereco: "Rua das Flores, 22 — Bela Vista",
    horario: "Ter-Sáb 9h–19h",
    emoji: "💇",
    novo: true,
    destaque: false
  },
  {
    nome: "Mercadinho Bela Vista",
    categoria: "comercio",
    descricao: "Mercadinho de bairro com delivery",
    whatsapp: "5511900000004",
    endereco: "Rua Central, 88 — Bela Vista",
    horario: "Todos os dias 7h–22h",
    emoji: "🛒",
    novo: false,
    destaque: false
  },
  {
    nome: "Farmácia Saúde+",
    categoria: "saude",
    descricao: "Medicamentos, perfumaria e delivery",
    whatsapp: "5511900000005",
    endereco: "Av. Principal, 120 — Bela Vista",
    horario: "Seg-Sáb 8h–20h",
    emoji: "💊",
    novo: false,
    destaque: false
  },
  {
    nome: "Oficina do João",
    categoria: "servicos",
    descricao: "Mecânica geral, elétrica e funilaria",
    whatsapp: "5511900000006",
    endereco: "Rua da Oficina, 5 — Bela Vista",
    horario: "Seg-Sex 8h–18h",
    emoji: "🔧",
    novo: false,
    destaque: false
  }
];
