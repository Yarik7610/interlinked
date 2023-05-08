import {authAPI} from "../api/api"
const SET_AUTH_USER_DATA = "SET_USER_DATA" 

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
    authImg: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload, //деструктуризируем свойство payload, являющееся объектом, а в нем лежит email, login, userId 
             
            }
        } 
        default:
            return state  
    }  
}

export default authReducer;


export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {id, email, login, isAuth}}) 

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, setError) => async(dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, setError)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        setError("server", {
            message: response.data.messages[0]
        })
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}


