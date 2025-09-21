import { ApiService } from './ApiService';

const endPoint = 'recipe';

// Para uso no servidor (durante build/SSG)
const getRecipesDataForServer = async () => {
    // Importação dinâmica para evitar problemas durante o build
    const { recipesData } = await import('../data/recipes.js');
    return recipesData;
};

export const RecipeService = {
    async get(id) {
        if (typeof window === 'undefined') {
            // No servidor, usar dados diretos
            const recipes = await getRecipesDataForServer();
            return recipes.find(r => r.id === parseInt(id));
        } else {
            // No cliente, usar API
            return ApiService.get(`${endPoint}?id=${id}`);
        }
    },
    async listAll() {
        if (typeof window === 'undefined') {
            // No servidor, usar dados diretos
            return await getRecipesDataForServer();
        } else {
            // No cliente, usar API
            return ApiService.get(endPoint);
        }
    },
    create(newRecipe) {
        return ApiService.post(endPoint, newRecipe);
    },
    remove(id) {
        return ApiService.delete(`${endPoint}?id=${id}`);
    },
    // edit(editRecipe){
    //     return ApiService.edit(endPoint, editRecipe);
    // },
}