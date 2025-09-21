// API de receitas usando dados compartilhados
import { recipesData } from '../../data/recipes.js';

// Cria uma cópia dos dados para manipulação na API
let recipes = [...recipesData];

export default function handler(req, res) {
    const { method, query } = req;

    switch (method) {
        case 'GET':
            if (query.id) {
                // Buscar receita por ID
                const recipe = recipes.find(r => r.id === parseInt(query.id));
                if (recipe) {
                    res.status(200).json(recipe);
                } else {
                    res.status(404).json({ message: 'Receita não encontrada' });
                }
            } else {
                // Retornar todas as receitas
                res.status(200).json(recipes);
            }
            break;

        case 'POST':
            // Criar nova receita
            const newRecipe = {
                id: Math.max(...recipes.map(r => r.id)) + 1,
                ...req.body
            };
            recipes.push(newRecipe);
            res.status(201).json(newRecipe);
            break;

        case 'DELETE':
            if (query.id) {
                // Remover receita por ID
                const index = recipes.findIndex(r => r.id === parseInt(query.id));
                if (index !== -1) {
                    const deletedRecipe = recipes.splice(index, 1)[0];
                    res.status(200).json(deletedRecipe);
                } else {
                    res.status(404).json({ message: 'Receita não encontrada' });
                }
            } else {
                res.status(400).json({ message: 'ID é obrigatório para deletar' });
            }
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}