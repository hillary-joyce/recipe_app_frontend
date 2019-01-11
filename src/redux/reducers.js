import {combineReducers} from 'redux'
import {setCurrentUser} from './action'


const SET_CURRENT_USER = "SET_CURRENT_USER"
const REMOVE_CURRENT_USER = "REMOVE_CURRENT_USER"

const userReducer = (user = null, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return action.user
    case REMOVE_CURRENT_USER:
      return null
    default:
      return user
  }
}


const reducer = combineReducers({
  user: userReducer
})

export default reducer
