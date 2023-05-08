const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {  //state = dialogsPage

  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: 5,
        message: action.newMessageText
      }
      return {
        ...state,
        messagesData: [...state.messagesData, newMessage]
      }
    }
    default: return state;
  }
};

export default dialogsReducer;

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText})  //AC
