# 🍳 TreinaCook - Site de Receitas

Este é um projeto de site de receitas desenvolvido com [Next.js](https://nextjs.org/), criado como parte do curso de Introdução aos Geradores de Sites Estáticos da TreinaWeb.

## 📋 Sobre o Projeto

O **TreinaCook** é uma aplicação web moderna que apresenta uma coleção de receitas culinárias organizadas por categorias. O projeto demonstra o uso de tecnologias modernas para criação de sites estáticos e dinâmicos.

### ✨ Principais Funcionalidades

- **📱 Layout Responsivo**: Interface adaptável para diferentes dispositivos
- **🎨 Design Moderno**: Interface limpa e intuitiva com cores atrativas
- **🔍 Navegação por Categorias**: Receitas organizadas por tipo (Doces, Pratos Principais, Saladas, etc.)
- **📖 Páginas Detalhadas**: Cada receita tem sua própria página com ingredientes e modo de preparo
- **⚡ Performance Otimizada**: Geração estática com Next.js para carregamento rápido
- **🖼️ Imagens Padronizadas**: Todas as imagens de receitas têm tamanho uniforme

### 🗂️ Categorias Disponíveis

- Doces
- Pratos Principais
- Saladas
- Sopas
- Sobremesas
- Lanches
- Bebidas
- Tortas
- Salgados

### 🧪 Tecnologias Utilizadas

- **[Next.js 12.0.4](https://nextjs.org/)**: Framework React para produção
- **[React 17.0.2](https://reactjs.org/)**: Biblioteca para construção de interfaces
- **[Material-UI](https://mui.com/)**: Biblioteca de componentes React
- **[Styled JSX](https://github.com/vercel/styled-jsx)**: CSS-in-JS para estilização
- **[Slugify](https://www.npmjs.com/package/slugify)**: Para criação de URLs amigáveis

## 🚀 Como Executar o Projeto

### Pré-requisitos

- **Node.js** (versão 14 ou superior)
- **npm** ou **yarn**

### Passo a Passo

1. **Clone o repositório**
```bash
git clone https://github.com/Gilbertoaleite/projeto-com-next-js-treinaweb.git
cd site-receitas
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Abra o navegador**
Acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação

### 📜 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run static` - Gera versão estática (export)

## 📁 Estrutura do Projeto

```
site-receitas/
├── components/          # Componentes React reutilizáveis
│   ├── Footer/         # Componente do rodapé
│   ├── Header/         # Componente do cabeçalho
│   ├── Recipe/         # Componente da página de receita
│   ├── RecipeCard/     # Cartão de receita
│   └── RecipeCategory/ # Categoria de receitas
├── data/               # Dados das receitas
│   └── recipes.js      # Base de dados das receitas
├── pages/              # Páginas da aplicação (roteamento)
│   ├── api/           # Rotas da API
│   ├── receitas/      # Páginas dinâmicas das receitas
│   ├── _cadastro/     # Páginas administrativas
│   ├── _app.js        # Configuração global da aplicação
│   └── index.js       # Página inicial
├── public/            # Arquivos estáticos
│   └── img/          # Imagens das receitas
├── services/          # Serviços e APIs
│   ├── ApiService.js  # Serviço para requisições HTTP
│   └── RecipeService.js # Serviço específico para receitas
└── styles/           # Estilos CSS
    ├── globals.css   # Estilos globais
    ├── page.css      # Estilos das páginas
    └── Home.module.css # Estilos modulares
```

## 🔧 Funcionalidades Técnicas

### Geração Estática (SSG)
O projeto utiliza `getStaticProps` e `getStaticPaths` do Next.js para:
- Gerar páginas estáticas em tempo de build
- Otimizar performance de carregamento
- Melhorar SEO

### API Interna
- API REST implementada com Next.js API Routes
- Endpoints para listar, criar e deletar receitas
- Dados mockados para demonstração

### Roteamento Dinâmico
- URLs amigáveis usando slugs
- Páginas dinâmicas para categorias: `/receitas/[category]`
- Páginas dinâmicas para receitas: `/receitas/[category]/[recipeId]`

## 🎯 Processo de Desenvolvimento

Este projeto foi desenvolvido seguindo as melhores práticas de desenvolvimento web moderno:

1. **Configuração Inicial**: Setup do Next.js com estrutura de pastas organizada
2. **Componentização**: Criação de componentes reutilizáveis com Styled JSX
3. **Gerenciamento de Estado**: Uso de hooks do React para estado local
4. **Roteamento**: Implementação de rotas dinâmicas com Next.js
5. **API Development**: Criação de API interna para manipulação de dados
6. **Estilização**: CSS responsivo com padrões de design consistentes
7. **Otimização**: Implementação de SSG para melhor performance

## 🌟 Melhorias Implementadas

Durante o desenvolvimento, foram realizadas várias otimizações:

- ✅ **Correção de Erros de Fetch**: Implementação de API local para substituir dependências externas
- ✅ **Padronização de Imagens**: CSS otimizado para imagens uniformes
- ✅ **Correção de Propriedades**: Ajuste de nomes de propriedades dos dados
- ✅ **Remoção de Duplicações**: Limpeza de imports CSS duplicados
- ✅ **Tratamento de Erros**: Implementação de verificações de segurança

## 📚 Aprendizados

Este projeto demonstra conceitos importantes de:
- Desenvolvimento com Next.js e React
- Geração de sites estáticos (SSG)
- Componentização e reutilização de código
- Roteamento dinâmico
- Integração com APIs
- Responsive Design
- Performance web

## 🤝 Contribuição

Este projeto foi desenvolvido como material educacional. Sinta-se à vontade para usar como referência para seus estudos!

---

**Desenvolvido com ❤️ durante o curso da TreinaWeb**
