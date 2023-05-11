import {authAPI, securityAPI} from "../api/api"
const SET_AUTH_USER_DATA = "SET_USER_DATA" 
const SET_CAPTCHA_URL = "SET_CAPTCHA_URL"

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth:false,
    authImg: null,
    captchaURL: null,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA: {
            return {
                ...state,
                ...action.payload, //деструктуризируем свойство payload, являющееся объектом, а в нем лежит email, login, userId 
             
            }
        } 
        case SET_CAPTCHA_URL: {
            return {
                ...state,
                captchaURL: action.captchaURL,
            }
        }
        default:
            return state  
    }  
}

export default authReducer;


export const setAuthUserData = (id, email, login, isAuth) => ({type: SET_AUTH_USER_DATA, payload: {id, email, login, isAuth}}) 
export const setCaptchaUrl = (captchaURL) => ({type: SET_CAPTCHA_URL, captchaURL})

export const getAuthUserData = () => async (dispatch) => {
    let data = await authAPI.me()
    if (data.resultCode === 0) {
        let {id, email, login} = data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
}

export const login = (email, password, rememberMe, captcha, setError) => async(dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
        dispatch(setCaptchaUrl(null));
    } 
    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
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

export const getCaptchaUrl = () => async (dispatch) => {
    let response = await securityAPI.getCaptchaUrl()
    const captchaURL = response.data.url
    dispatch(setCaptchaUrl(captchaURL))
}

