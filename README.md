# 📍 Bela Vista Conecta

Site gratuito para divulgar os comércios do bairro Bela Vista, Guarulhos — SP.

---

## 🚀 Como publicar no GitHub Pages (gratuito)

### 1. Crie uma conta no GitHub
Acesse **github.com** e crie uma conta gratuita.

### 2. Crie um repositório novo
- Clique em **"New repository"**
- Nome sugerido: `bela-vista-conecta`
- Deixe como **Public**
- Clique em **"Create repository"**

### 3. Suba os arquivos
- Clique em **"uploading an existing file"**
- Arraste todos os arquivos e pastas do projeto
- Clique em **"Commit changes"**

### 4. Ative o GitHub Pages
- Vá em **Settings > Pages**
- Em "Source", selecione **"Deploy from a branch"**
- Branch: **main** / Pasta: **/ (root)**
- Clique em **Save**

### 5. Acesse seu site
Após 1-2 minutos, seu site estará disponível em:
```
https://SEU-USUARIO.github.io/bela-vista-conecta
```

---

## ✏️ Como adicionar novos comércios

Abra o arquivo `js/comercios.js` e adicione um novo bloco:

```javascript
{
  nome: "Nome do Comércio",
  categoria: "alimentacao",
  descricao: "Descrição curta",
  whatsapp: "5511900000000",
  emoji: "🍕",
  novo: true,
  destaque: false
},
```

### Categorias disponíveis
| Valor | Exibição |
|-------|----------|
| `alimentacao` | 🍽️ Alimentação |
| `servicos` | ✂️ Serviços |
| `comercio` | 🛒 Comércio |
| `saude` | 💊 Saúde |
| `beleza` | 💅 Beleza |
| `pet` | 🐾 Pet |
| `educacao` | 📚 Educação |

---

## 📱 Configurar WhatsApp do cadastro

No arquivo `js/cadastro.js`, troque o número na primeira linha:

```javascript
const SEU_WHATSAPP = "5511987654321"; // ← seu número aqui
```

---

## 📁 Estrutura dos arquivos

```
bela-vista-conecta/
├── index.html          ← Página principal
├── cadastro.html       ← Formulário de cadastro
├── css/
│   └── style.css       ← Estilos visuais
└── js/
    ├── comercios.js    ← Lista de comércios (edite aqui!)
    ├── app.js          ← Lógica principal (busca e filtros)
    └── cadastro.js     ← Lógica do formulário
```

---

Feito com ❤️ para o bairro Bela Vista, Guarulhos.
