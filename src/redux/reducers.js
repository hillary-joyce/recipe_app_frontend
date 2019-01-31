import {combineReducers} from 'redux'


const SET_CURRENT_USER = "SET_CURRENT_USER"
const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER"
const CREATING_USER = "CREATING_USER"
const CREATED_USER = "CREATED_USER"
const LOADING_RECIPES = "LOADING_RECIPES"
const FETCHED_RECIPES = "FETCHED_RECIPES"
const FETCHED_CURRENT_RECIPE = "FETCHED_CURRENT_RECIPE"

// User-related reducers (sign in, sign up)
const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user
    case REMOVE_CURRENT_USER:
      return null
    default:
      return state
  }
}

const creatingUserReducer = (state = false, action) => {
  switch (action.type) {
    case CREATING_USER:
      return true
    case SET_CURRENT_USER:
      return false
    default:
      return state
  }
}

// Recipe reducers ()
const loadingRecipeReducer = (state = false, action) => {
  switch (action.type) {
    case LOADING_RECIPES:
      return true
    case FETCHED_RECIPES:
      return false
    default:
      return state
  }
}


const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case FETCHED_RECIPES:
      return action.recipes
    default:
      return state
  }
}

const currentRecipeReducer = (state = null, action) => {
  switch (action.type) {
    case FETCHED_CURRENT_RECIPE:
      return action.recipe
    default:
      return state
  }
}


const rootReducer = combineReducers({
  user: userReducer,
  creatingNewUser: creatingUserReducer,
  loadingRecipes: loadingRecipeReducer,
  recipes: recipesReducer,
  currentRecipe: currentRecipeReducer
})

export default rootReducer
