import {configureStore, combineReducers, applyMiddleware, compose} from '@reduxjs/toolkit';
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import friendsReducer from './friends-reducer';
import appReducer from './app-reducer';

const reducers = combineReducers({    
    profilePage: profileReducer,  // == state.profilePage
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    friends: friendsReducer,
    app: appReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = configureStore({reducer: reducers}, /* preloadedState, */ composeEnhancers(applyMiddleware()));

// const store =  configureStore(
//     {reducer: reducers},
// );

window.store = store;

export default store;