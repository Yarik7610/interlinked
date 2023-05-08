import React, {memo} from "react";
import { useForm } from "react-hook-form";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onChange'
  })

  const onSubmit = (data) => {
    props.addPost(data.newPostText)
    reset()
  }

  const AddPostForm = () => {
    return (
      <form className = {classes.postForm} onSubmit = {handleSubmit(onSubmit)}>
          <textarea {...register('newPostText', {
            required: "Write smth...",
            validate: value => value.trim() !== '' ? null : 'No white spaces',
          })}/>
        <div>
          {errors.newPostText && <div className="errorMsg">{errors.newPostText.message}</div>}
          <button>Add post</button>
        </div>
      </form>
    )
  }
  return (
    <div className={classes.myPosts}>
      <h4>My posts</h4>
      <AddPostForm/>
      <div className={classes.posts}>
        {props.postsData.map(elem => <Post profile = {props.profile} message = {elem.message} key = {elem.id} likesCount = {elem.likesCount}/>)}
      </div>
    </div>
  );
};

export default memo(MyPosts);
