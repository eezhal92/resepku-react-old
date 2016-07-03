import axios from 'axios'
import { ADD_RECIPES, INCREMENT_LOVE, DECREMENT_LOVE } from './../reducers/recipes'

const req = axios.create({
  baseURL: 'http://resepku.eezhal92.com/api'
});

export function addRecipes(recipes) {
  return {
    type: ADD_RECIPES,
    recipes
  }
}

export function loveRecipe(index) {
  return {
    type: INCREMENT_LOVE,
    index
  }
}

export function unloveRecipe(index) {
  return {
    type: DECREMENT_LOVE,
    index
  }
}

export function fetchRecipes(limit = 8) {
   console.log('fetching recipes')
  return (dispatch) => {
    dispatch({ type: 'RECIPES_FETCHING_START' })

    return req.get('/v1/recipes', {
      params: {
        limit: limit
      }
    }).then(response => {
      dispatch({ type: 'RECIPES_FETCHING_FULFILLED' })
      dispatch(addRecipes(response.data.data))
    })
  }
}
