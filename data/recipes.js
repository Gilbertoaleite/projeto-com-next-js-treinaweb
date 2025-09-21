// Dados de receitas para uso direto (sem requisições HTTP)
export const recipesData = [
    {
        id: 1,
        title: "Bolo de Chocolate",
        category: "Doces",
        description: "Um delicioso bolo de chocolate molhadinho.",
        ingredients: ["2 xícaras de farinha", "1 xícara de açúcar", "1/2 xícara de chocolate em pó", "3 ovos", "1 xícara de leite"],
        instructions: "Misture todos os ingredientes e asse por 40 minutos a 180°C.",
        image: "/img/bolo-chocolate.jpg"
    },
    {
        id: 2,
        title: "Lasanha de Carne",
        category: "Pratos Principais",
        description: "Lasanha clássica com carne moída e molho bechamel.",
        ingredients: ["500g de carne moída", "Massa de lasanha", "Molho de tomate", "Queijo mussarela", "Molho bechamel"],
        instructions: "Monte as camadas alternando massa, carne e molhos. Asse por 45 minutos.",
        image: "/img/lasanha.jpg"
    },
    {
        id: 3,
        title: "Salada Caesar",
        category: "Saladas",
        description: "Salada Caesar tradicional com croutons e parmesão.",
        ingredients: ["Alface romana", "Parmesão ralado", "Croutons", "Molho Caesar"],
        instructions: "Misture todos os ingredientes e sirva imediatamente.",
        image: "/img/salada-caesar.jpg"
    },
    {
        id: 4,
        title: "Risotto de Camarão",
        category: "Pratos Principais",
        description: "Risotto cremoso com camarões frescos.",
        ingredients: ["Arroz arbório", "Camarões", "Caldo de camarão", "Vinho branco", "Cebola", "Parmesão"],
        instructions: "Refogue a cebola, adicione o arroz, o vinho e o caldo aos poucos. Finalize com camarões e parmesão.",
        image: "/img/risotto-camarao.jpg"
    },
    {
        id: 5,
        title: "Pudim de Leite Condensado",
        category: "Doces",
        description: "Pudim cremoso tradicional brasileiro.",
        ingredients: ["1 lata de leite condensado", "3 ovos", "1 medida de leite", "Açúcar para caramelo"],
        instructions: "Faça o caramelo, bata os demais ingredientes e asse em banho-maria por 1 hora.",
        image: "/img/pudim.jpg"
    },
    {
        id: 6,
        title: "Sopa de Legumes",
        category: "Sopas",
        description: "Sopa nutritiva com diversos legumes.",
        ingredients: ["Cenoura", "Batata", "Abobrinha", "Cebola", "Caldo de legumes"],
        instructions: "Refogue os legumes e cozinhe no caldo até ficarem macios.",
        image: "/img/sopa-legumes.jpg"
    },
    {
        id: 7,
        title: "Frango Grelhado",
        category: "Pratos Principais",
        description: "Peito de frango grelhado com temperos especiais.",
        ingredients: ["Peito de frango", "Alho", "Limão", "Ervas finas", "Azeite"],
        instructions: "Marine o frango com os temperos e grelhe até dourar.",
        image: "/img/frango-grelhado.jpg"
    },
    {
        id: 8,
        title: "Salada de Frutas",
        category: "Sobremesas",
        description: "Mix refrescante de frutas da estação.",
        ingredients: ["Maçã", "Banana", "Uva", "Morango", "Kiwi", "Suco de laranja"],
        instructions: "Corte as frutas e misture com o suco de laranja.",
        image: "/img/salada-frutas.jpg"
    },
    {
        id: 9,
        title: "Pizza Margherita",
        category: "Pratos Principais",
        description: "Pizza clássica italiana com tomate, mussarela e manjericão.",
        ingredients: ["Massa de pizza", "Molho de tomate", "Mussarela de búfala", "Manjericão fresco"],
        instructions: "Espalhe o molho na massa, adicione a mussarela e asse. Finalize com manjericão.",
        image: "/img/pizza-margherita.jpg"
    },
    {
        id: 10,
        title: "Brownie de Chocolate",
        category: "Doces",
        description: "Brownie úmido e intenso de chocolate.",
        ingredients: ["Chocolate meio amargo", "Manteiga", "Açúcar", "Ovos", "Farinha de trigo"],
        instructions: "Derreta o chocolate com a manteiga, misture com os demais ingredientes e asse por 25 minutos.",
        image: "/img/brownie.jpg"
    },
    {
        id: 11,
        title: "Sanduíche Natural",
        category: "Lanches",
        description: "Sanduíche saudável com ingredientes frescos.",
        ingredients: ["Pão integral", "Peito de peru", "Alface", "Tomate", "Cenoura ralada", "Cream cheese"],
        instructions: "Monte o sanduíche intercalando os ingredientes.",
        image: "/img/sanduiche-natural.jpg"
    },
    {
        id: 12,
        title: "Torta de Limão",
        category: "Doces",
        description: "Torta cremosa de limão com massa crocante.",
        ingredients: ["Massa quebrada", "Leite condensado", "Suco de limão", "Claras em neve", "Açúcar"],
        instructions: "Asse a massa, faça o creme de limão, cubra com merengue e doure no forno.",
        image: "/img/torta-limao.jpg"
    },
    {
        id: 13,
        title: "Caldo Verde",
        category: "Sopas",
        description: "Sopa tradicional portuguesa com couve e linguiça.",
        ingredients: ["Batatas", "Couve manteiga", "Linguiça calabresa", "Cebola", "Azeite"],
        instructions: "Cozinhe as batatas, amasse, adicione a couve refogada e a linguiça.",
        image: "/img/caldo-verde.jpg"
    },
    {
        id: 14,
        title: "Hambúrguer Caseiro",
        category: "Lanches",
        description: "Hambúrguer artesanal com carne suculenta.",
        ingredients: ["Carne moída", "Pão de hambúrguer", "Queijo", "Alface", "Tomate", "Cebola"],
        instructions: "Faça o hambúrguer, grelhe e monte com os acompanhamentos.",
        image: "/img/hamburguer.jpg"
    },
    {
        id: 15,
        title: "Mousse de Maracujá",
        category: "Sobremesas",
        description: "Mousse refrescante de maracujá.",
        ingredients: ["Polpa de maracujá", "Leite condensado", "Creme de leite", "Gelatina"],
        instructions: "Dissolva a gelatina, misture todos os ingredientes e leve à geladeira.",
        image: "/img/mousse-maracuja.jpg"
    },
    {
        id: 16,
        title: "Escondidinho de Carne Seca",
        category: "Pratos Principais",
        description: "Escondidinho tradicional com carne seca desfiada.",
        ingredients: ["Carne seca", "Purê de batata", "Cebola", "Queijo ralado"],
        instructions: "Refogue a carne seca, faça o purê e monte em camadas. Gratine no forno.",
        image: "/img/escondidinho.jpg"
    },
    {
        id: 17,
        title: "Salada Tropical",
        category: "Saladas",
        description: "Salada exótica com frutas tropicais.",
        ingredients: ["Manga", "Abacaxi", "Rúcula", "Castanha de caju", "Vinagrete de maracujá"],
        instructions: "Corte as frutas, misture com a rúcula e tempere com o vinagrete.",
        image: "/img/salada-tropical.jpg"
    },
    {
        id: 18,
        title: "Brigadeiro Gourmet",
        category: "Doces",
        description: "Brigadeiro sofisticado com chocolate belga.",
        ingredients: ["Leite condensado", "Chocolate em pó", "Manteiga", "Chocolate granulado"],
        instructions: "Cozinhe os ingredientes até engrossar, faça as bolinhas e passe no granulado.",
        image: "/img/brigadeiro.jpg"
    },
    {
        id: 19,
        title: "Peixe Assado",
        category: "Pratos Principais",
        description: "Peixe assado com ervas e limão.",
        ingredients: ["Filé de peixe", "Limão", "Alecrim", "Tomilho", "Azeite", "Sal"],
        instructions: "Tempere o peixe e asse no forno até dourar.",
        image: "/img/peixe-assado.jpg"
    },
    {
        id: 20,
        title: "Smoothie Verde",
        category: "Bebidas",
        description: "Smoothie nutritivo com vegetais verdes.",
        ingredients: ["Espinafre", "Maçã verde", "Banana", "Água de coco", "Gengibre"],
        instructions: "Bata todos os ingredientes no liquidificador até ficar homogêneo.",
        image: "/img/smoothie-verde.jpg"
    },
    {
        id: 21,
        title: "Strogonoff de Frango",
        category: "Pratos Principais",
        description: "Strogonoff cremoso de frango com champignon.",
        ingredients: ["Peito de frango", "Champignon", "Creme de leite", "Mostarda", "Ketchup"],
        instructions: "Refogue o frango, adicione os molhos e o creme de leite. Sirva com arroz.",
        image: "/img/strogonoff.jpg"
    },
    {
        id: 22,
        title: "Quiche de Queijo",
        category: "Tortas",
        description: "Quiche francesa com queijo e ervas.",
        ingredients: ["Massa folhada", "Ovos", "Creme de leite", "Queijo gruyère", "Noz-moscada"],
        instructions: "Forre a forma com a massa, despeje o recheio batido e asse até dourar.",
        image: "/img/quiche-queijo.jpg"
    },
    {
        id: 23,
        title: "Açaí na Tigela",
        category: "Sobremesas",
        description: "Açaí cremoso com frutas e granola.",
        ingredients: ["Polpa de açaí", "Banana", "Morango", "Granola", "Mel"],
        instructions: "Bata o açaí, sirva na tigela e decore com as frutas e granola.",
        image: "/img/acai-tigela.jpg"
    },
    {
        id: 24,
        title: "Coxinha de Frango",
        category: "Salgados",
        description: "Coxinha tradicional brasileira.",
        ingredients: ["Farinha de trigo", "Frango desfiado", "Caldo de galinha", "Ovos", "Farinha de rosca"],
        instructions: "Faça a massa, recheie com frango, modele, empane and frite.",
        image: "/img/coxinha.jpg"
    },
    {
        id: 25,
        title: "Salada Caprese",
        category: "Saladas",
        description: "Salada italiana com tomate, mussarela e manjericão.",
        ingredients: ["Tomate", "Mussarela de búfala", "Manjericão", "Azeite extravirgem", "Vinagre balsâmico"],
        instructions: "Fatie os ingredientes, disponha no prato e tempere com azeite e vinagre.",
        image: "/img/caprese.jpg"
    },
    {
        id: 26,
        title: "Cookies de Chocolate",
        category: "Doces",
        description: "Cookies crocantes com gotas de chocolate.",
        ingredients: ["Farinha de trigo", "Manteiga", "Açúcar mascavo", "Ovos", "Gotas de chocolate"],
        instructions: "Misture os ingredientes, faça bolinhas na assadeira e asse até dourar.",
        image: "/img/cookies.jpg"
    },
    {
        id: 27,
        title: "Feijoada Completa",
        category: "Pratos Principais",
        description: "Feijoada tradicional brasileira com todos os acompanhamentos.",
        ingredients: ["Feijão preto", "Linguiça", "Costela", "Bacon", "Paio", "Couve", "Laranja"],
        instructions: "Cozinhe o feijão com as carnes, refogue a couve e sirva com os acompanhamentos.",
        image: "/img/feijoada.jpg"
    },
    {
        id: 28,
        title: "Suco Detox",
        category: "Bebidas",
        description: "Suco natural desintoxicante.",
        ingredients: ["Couve", "Maçã", "Limão", "Gengibre", "Água"],
        instructions: "Bata todos os ingredientes no liquidificador e coe se preferir.",
        image: "/img/suco-detox.jpg"
    },
    {
        id: 29,
        title: "Torta de Frango",
        category: "Tortas",
        description: "Torta salgada recheada com frango e legumes.",
        ingredients: ["Massa de torta", "Frango desfiado", "Cenoura", "Ervilha", "Creme de leite"],
        instructions: "Forre a forma, adicione o recheio refogado e cubra com massa. Asse até dourar.",
        image: "/img/torta-frango.jpg"
    },
    {
        id: 30,
        title: "Pavê de Chocolate",
        category: "Sobremesas",
        description: "Pavê clássico com camadas de biscoito e creme de chocolate.",
        ingredients: ["Biscoito maisena", "Leite", "Chocolate em pó", "Amido de milho", "Açúcar"],
        instructions: "Faça o creme, intercale com biscoitos umedecidos e leve à geladeira.",
        image: "/img/pave-chocolate.jpg"
    }
];