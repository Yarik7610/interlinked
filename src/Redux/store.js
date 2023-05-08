import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navbarReducer from "./navbar-reducer";

let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: "lol", likesCount: 13 },
        { id: 2, message: "kek", likesCount: 4 },
      ],
      newPostText: "",
    },
    dialogsPage: {
      messagesData: [
        { message: "lol", id: "1" },
        { message: "kek", id: "2" },
        { message: "chebyrek", id  : "3" },
      ],
      dialogsData: [
        { name: "Bob", id: "1" },
        { name: "Vera", id: "2" },
        { name: "Vitya", id: "3" },
        { name: "Frank", id: "4" },
      ],
      newMessageText: "",
    },
    navbarPage: {
      friendsData: [
        { name: "Billy", id: "1" },
        { name: "Sasha", id: "2" },
        { name: "Geralt", id: "3" },
        { name: "Plotva", id: "4" },
      ],
    },
  },
  _callSubscriber() {}, //render all app

  getState() {
    return this._state;
  },
  subscribe(observer) { //подписчик это аргумент функции
    this._callSubscriber = observer; //это observer, в данном случаем это функция издателя
  },
  
  dispatch(action) {   //action - объект со свойтсвом type: '' и другими свойствами в качестве пропсов от реакта 
    profileReducer(this._state.profilePage, action)
    dialogsReducer(this._state.dialogsPage, action)   
    navbarReducer(this._state.navbarPage, action)

    this._callSubscriber(this._state)
  },  
}

export default store;




window.store = store;