import { authAPI, usersAPI } from "../api/api";
const SET_FRIENDS = "SET_FRIENDS"

let initialState = {
    friendsData: [],
};
   
const friendsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FRIENDS: {
            return {
                friendsData: action.friends
            }
        }
        default: return state;
    }
};
  
export default friendsReducer;
  
export const setFriends = (friends) => ({type: SET_FRIENDS, friends})

export const setMyFriends = () => (dispatch) => {
    // authAPI.me()
    // .then(data => {
    //     if (data.resultCode === 0) {
    //         usersAPI.getFriends()
    //         .then(friends => {
    //             dispatch(setFriends(friends.items))
    //         })
    //     }
    // })
    usersAPI.getFriends()
        .then(friends => {
            dispatch(setFriends(friends.items))
    })
}
