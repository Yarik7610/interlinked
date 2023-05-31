import {usersAPI} from "../api/api"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS= "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USERS_TOTAL_COUNT = "SET_USERS_TOTAL_COUNT"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS"
const SET_TERM = 'SET_TERM'
const SET_FRIENDS = "SET_FRIENDS"
const SET_IS_SEARCH = 'SET_IS_SEARCH'

let initialState = {  // == state.usersPage
    users: [],
    pageSize: 7,
    totalUsersCount: 21,
    currentPage : 1,
    isFetching: false,  
    followingInProgress: [],
    term: '',
    friendsData: [],
    isSearch: false,
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TERM: {
            return {
                ...state,
                term: action.term
            }
        }
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
        case SET_FRIENDS: {
            return {
                ...state,
                friendsData: action.friends
            }
        }
        case SET_IS_SEARCH: {
            return {
                ...state,
                isSearch: action.isSearch
            }
        }
        default: return state
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId })        
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId })  
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCount = (totalCount) => ({type: SET_USERS_TOTAL_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})
export const setTerm = (term) => ({type: SET_TERM, term})
export const setFriends = (friends) => ({type: SET_FRIENDS, friends})
export const setIsSearch = (isSearch) => ({type: SET_IS_SEARCH, isSearch})
 

export const getUsers = (currentPage, pageSize, term) => {  //TC-Thunk creator, возвращаем санку, чтоб извне смогли работать с ней
    return async (dispatch, getState) => {     
        dispatch(toggleIsFetching(true))
        if (term && getState().usersPage.isSearch === false) {
            currentPage = 1
        }
        let data = await usersAPI.getUsers(currentPage, pageSize, term)
        if (term) dispatch(setIsSearch(true))
        dispatch(setCurrentPage(currentPage))
        dispatch(setUsersTotalCount(data.totalCount))
        dispatch(setUsers(data.items))
        dispatch(toggleIsFetching(false))
    }
}

export const setMyFriends = () => (dispatch) => {
    usersAPI.getFriends()
        .then(friends => {
            dispatch(setFriends(friends.items))
    })
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let resultCode = await usersAPI.followUser(userId)
        if (resultCode === 0) {
            dispatch(followSuccess(userId))
            dispatch(setMyFriends())
        }
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        let resultCode = await usersAPI.unfollowUser(userId)
        if (resultCode === 0) {
            dispatch(unfollowSuccess(userId))
            dispatch(setMyFriends())
        }
       
        dispatch(toggleFollowingProgress(false, userId))
    }
}

export default usersReducer;
