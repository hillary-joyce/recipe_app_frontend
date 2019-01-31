const SET_CURRENT_USER = "SET_CURRENT_USER"
const LOADING_RECIPES = "LOADING_RECIPES"
const FETCHED_RECIPES = "FETCHED_RECIPES"
const LOADING_USER = "LOADING_USER"

const RECIPE_URL = "http://localhost:3000/api/v1/recipes"
const USER_URL = "http://localhost:3000/api/v1/users"

//Sign in/sign up actions
const setCurrentUser = (userObj) => ({type: SET_CURRENT_USER, user: userObj})

const loadingUser = () => ({type: LOADING_USER})

const creatingNewUser = (userObj) => {
  return (dispatch) => {
    dispatch(loadingUser())
    fetch(USER_URL, {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userObj)
    }).then(r=>r.json())
    .then(d =>{
      localStorage.setItem('token', d.jwt)
      dispatch(setCurrentUser(d.user))
    })
  }
}

const signingInUser = (userObj) => {
  return (dispatch) => {
    dispatch(loadingUser())
    fetch('http://localhost:3000/api/v1/login',{
      method:"POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userObj)
    })
    .then(r => r.json())
    .then(data => {
      console.log(data)
      if(data.message){
        alert("incorrect username or password")
      } else {
        localStorage.setItem('token', data.jwt)
        dispatch(setCurrentUser(data.user))
        return "true"
      }
    })
  }
}

// Recipe Actions
const loadingRecipes = () => ({type: LOADING_RECIPES})

const fetchedRecipes = (recipes) => ({type: FETCHED_RECIPES, recipes})

const fetchingRecipes = () => {
  return (dispatch) => {
    dispatch(loadingRecipes())
    fetch(RECIPE_URL)
    .then(res => res.json())
    .then(recipes => {
      dispatch(fetchedRecipes(recipes))
    })
  }
}

// Current Recipe for show page
const fetchedCurrentReipe = recipe => ({type: "FETCHED_CURRENT_RECIPE", recipe})

const fetchingCurrentRecipe = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/recipes/${id}`)
    .then(r => r.json())
    .then(recipe => {
      dispatch(fetchedCurrentReipe(recipe))
    })
  }
}



export {setCurrentUser, fetchingRecipes, creatingNewUser, signingInUser, fetchingCurrentRecipe}
