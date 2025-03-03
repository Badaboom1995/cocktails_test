import { Drink, NormalizedDrink } from '@/types/apiEntitiesTypes';
import makeRequest, { Method } from '@/utils/makeRequest';

type GetCocktailsByTypeResponse = {
  drinks: Drink[];
};

const normalizeDrink = (drink: Drink): NormalizedDrink => {
  const { idDrink, strDrink, strCategory, strAlcoholic, strGlass, strInstructions, strDrinkThumb } =
    drink;

  const normalizedDrink: NormalizedDrink = {
    id: idDrink,
    name: strDrink,
    category: strCategory,
    alcoholic: strAlcoholic,
    glass: strGlass,
    instructions: strInstructions,
    thumbnail: strDrinkThumb,
    ingredients: [],
  };

  for (const drinkKey in drink) {
    if (drinkKey.includes('strIngredient')) {
      const ingredient = drink[drinkKey as keyof Drink];
      if (ingredient) normalizedDrink.ingredients.push(ingredient);
    }
  }
  return normalizedDrink;
};

export const cocktailsService = {
  async getCocktailsByType(type: string): Promise<NormalizedDrink[]> {
    const { data } = await makeRequest<GetCocktailsByTypeResponse>(
      Method.GET,
      `/search.php?s=${encodeURIComponent(type)}`
    );
    const normalizedDrinks = data.drinks.map(drink => normalizeDrink(drink));
    return normalizedDrinks;
  },
};
