import {usersAPI} from "../api/api"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS= "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {  // == state.usersPage
    users: [],
    pageSize: 7,
    totalUsersCount: 21,
    currentPage : 1,
    isFetching: false,   //"передается?"
    followingInProgress: [],
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        // case 'FAKE': {
        //     console.log('lol')
        //      return {
        //          ...state,
        //      }
        //  }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true} //перезаписиваем нужное значение у нужного объекта
                    }
                    return u //возвращаем нетронунтый объект если не тот айди
                }) 
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false} //перезаписиваем нужное значение у нужного объекта
                    }
                    return u //возвращаем нетронунтый объект если не тот айди
                }) 
            }
        }
        case SET_USERS: {
            return {
                ...state,
                users: action.users     
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case SET_USERS_TOTAL_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalCount 
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching 
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)

            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default: return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId })          //AC - action creator
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId })  
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})


export const getUsers = (currentPage, pageSize) => {  //TC-Thunk creator, возвращаем санку, чтоб извне смогли работать с ней
    return async (dispatch) => {     
        dispatch(toggleIsFetching(true))
        let data = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setCurrentPage(currentPage))
        dispatch(toggleIsFetching(false))
        dispatch(setUsersTotalCount(data.totalCount))
        dispatch(setUsers(data.items))
    }
}


export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let resultCode = await usersAPI.followUser(userId)
        if (resultCode === 0) dispatch(followSuccess(userId))
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let resultCode = await usersAPI.unfollowUser(userId)
        if (resultCode === 0) dispatch(unfollowSuccess(userId))
        dispatch(toggleFollowingProgress(false, userId))
    }
}


export default usersReducer;
