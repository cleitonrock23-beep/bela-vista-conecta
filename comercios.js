/**
 * LISTA DE COMÉRCIOS — BELA VISTA CONECTA
 *
 * Para adicionar um novo comércio, copie um bloco abaixo e preencha:
 *
 *   {
 *     nome: "Nome do Comércio",
 *     categoria: "alimentacao",   <- veja categorias disponíveis abaixo
 *     descricao: "Descrição curta do que oferece",
 *     whatsapp: "5511900000000",  <- apenas números, com 55 + DDD + número
 *     emoji: "🍕",                <- escolha um emoji representativo
 *     novo: true,                 <- coloque true para mostrar badge "Novo"
 *     destaque: false             <- coloque true para destacar o card
 *   },
 *
 * CATEGORIAS DISPONÍVEIS:
 *   alimentacao | servicos | comercio | saude | beleza | pet | educacao
 */

const comercios = [
  {
    nome: "Bar do Zé",
    categoria: "alimentacao",
    descricao: "Petiscos, chopp gelado e boa conversa",
    whatsapp: "5511900000001",
    emoji: "🍺",
    novo: true,
    destaque: false
  },
  {
    nome: "Lanchonete da Maria",
    categoria: "alimentacao",
    descricao: "Lanches, pastéis e sucos naturais",
    whatsapp: "5511900000002",
    emoji: "🥙",
    novo: false,
    destaque: true
  },
  {
    nome: "Salão Beleza Total",
    categoria: "beleza",
    descricao: "Corte, escova, manicure e pedicure",
    whatsapp: "5511900000003",
    emoji: "💇",
    novo: true,
    destaque: false
  },
  {
    nome: "Mercadinho Bela Vista",
    categoria: "comercio",
    descricao: "Mercadinho de bairro com delivery",
    whatsapp: "5511900000004",
    emoji: "🛒",
    novo: false,
    destaque: false
  },
  {
    nome: "Farmácia Saúde+",
    categoria: "saude",
    descricao: "Medicamentos, perfumaria e delivery",
    whatsapp: "5511900000005",
    emoji: "💊",
    novo: false,
    destaque: false
  },
  {
    nome: "Oficina do João",
    categoria: "servicos",
    descricao: "Mecânica geral, elétrica e funilaria",
    whatsapp: "5511900000006",
    emoji: "🔧",
    novo: false,
    destaque: false
  }
];
