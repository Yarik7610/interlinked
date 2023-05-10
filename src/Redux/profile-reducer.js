import { profileAPI } from "../api/api"
import noImg from "../images/noImg.png"
const ADD_POST = "ADD-POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SET_PROFILE_IMG = "SET_PROFILE_IMG"
const DELETE_POST = 'DELETE_POST'

let initialState  = {
  postsData: [
    { id: 1, message: "lol", likesCount: 13 },
    { id: 2, message: "kek", likesCount: 4 },
  ],
  profile: null,
  profileAuthImg: noImg,
  status: "",
}

const profileReducer = (state = initialState, action) => {//сюда приходит state = profilePage

  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        postsData: [newPost, ...state.postsData],
       
      }
    }
    case DELETE_POST: {
      return {...state, postsData: state.postsData.filter(p => p.id !== action.postId)}
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      }
    }
    case SET_PROFILE_IMG: {
          return {
              ...state,
              profileAuthImg: action.authImg,
          }
      }   
    default: return state;
  }
};

export default profileReducer;


export const addPost = (newPostText) => ({type: ADD_POST, newPostText}) //чтобы вернуть объект в одну строку мы оборачиваем в круглые скобки этот объект 
export const deletePost = (postId) => ({type: DELETE_POST, postId}) 
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile})
export const setProfileImg = (authImg) => ({type: SET_PROFILE_IMG, authImg}) 
export const setStatus = (status) => ({ type: SET_STATUS, status})


export const getUserProfile = (userId) => async (dispatch, getState) => {
  let response = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
  if (userId === getState().auth.id && response.data.photos.small) 
    dispatch(setProfileImg(response.data.photos.small))
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) dispatch(setStatus(status))
}

export const updatePhoto = (imgPath) => async (dispatch) => {
  let response = await profileAPI.updateProfilePhoto(imgPath)
  if (response.data.resultCode === 0) {
    dispatch(setProfileImg(response.data.data.photos.large))
  }
}

export const saveProfile = (data, userId, setError) => async (dispatch) => {
  let response = await profileAPI.updateProfile(data)
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId))
  } 
  else {
    let parsedName = response.data.messages[0].slice(30, -1)
    let lowerCaseName = parsedName[0].toLowerCase() + parsedName.slice(1)
    setError(`contacts.${lowerCaseName}`, {
      message: response.data.messages[0]
    })
    return Promise.reject(response.data.messages[0])
  }
}