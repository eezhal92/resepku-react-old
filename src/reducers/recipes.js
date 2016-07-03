export const ADD_RECIPES = 'ADD_RECIPES'
export const INCREMENT_LOVE = 'INCREMENT_LOVE'
export const DECREMENT_LOVE = 'DECREMENT_LOVE'

export const recipesInitialState = {
  items: [],
  selectedRecipe: {
    slug: ''
  }
}

function recipes(state = recipesInitialState, action) {
  switch (action.type) {
    case ADD_RECIPES:
      return { ...state, items: action.recipes }
    case INCREMENT_LOVE:
    case DECREMENT_LOVE:
      let recipe = {...state.items[action.index]}

      recipe.love = action.type === INCREMENT_LOVE ? recipe.love + 1 : recipe.love - 1
      recipe.loved = action.type === INCREMENT_LOVE ? true : false

      var items = [
        ...state.items.slice(0, action.index),
        recipe,
        ...state.items.slice(action.index + 1)
      ]

      return {...state, items}
    default:
      return state
  }
}

export default recipes

/* selector */

export const getRecipes = state => state.recipes.items

export const getRecipe = (state, index) => state.recipes.items.filter(recipe, i => i == index)[0]
