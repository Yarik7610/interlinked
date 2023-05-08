import profileReducer, { deletePost, addPost } from "./profile-reducer";

//1. test data
let state  = {
    postsData: [
      { id: 1, message: "lol", likesCount: 13 },
      { id: 2, message: "kek", likesCount: 4 },
    ]
}

//2. some action in test
test('length of post should be incremented', () => {
    let action = addPost('NEW POST')
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.postsData.length).toBe(3)
});

test('name of new post is NEW POST', () => {
    let action = addPost('NEW POST')
    let newState = profileReducer(state, action)
    //3. expectation
    expect(newState.postsData[0].message).toBe('NEW POST')
});

test('length of post should be decremented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(1)
});

test('length of post isnt decremented if id postId is wrong', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state, action)
    expect(newState.postsData.length).toBe(2)
});
