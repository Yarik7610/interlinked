import React from "react";
import MyPosts from "./MyPosts"
import {addPost} from "../../../Redux/profile-reducer";
import { connect } from "react-redux";


const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;
