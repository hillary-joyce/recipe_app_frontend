const SET_CURRENT_USER = "SET_CURRENT_USER"

const setCurrentUser = (userObj) => ({type: SET_CURRENT_USER, user: userObj})


export {setCurrentUser}
