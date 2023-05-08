import React from "react";
import classes from "./Dialogs.module.scss";
import MessageItem from "./MessageItem/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {useForm} from "react-hook-form"

const Dialogs = (props) => {
 
  const {register, handleSubmit, formState: {errors}, reset} = useForm({
    mode: 'onChange'
  })

  const onSubmit = (data) => {
    props.addMessage(data.newMessageText)
    reset()
  }

  const AddMessageForm = () => {
    return (
      <form onSubmit = {handleSubmit(onSubmit)}>
        <textarea {...register('newMessageText', {
           required: "Write smth...",
           validate: value => value.trim() !== '' ? null : 'No white spaces',
        })}/>
        {errors.newMessageText && <div className="errorMsg">{errors.newMessageText.message}</div>}
        <div><button>Send message</button></div>
      </form>
    )
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {props.dialogsPage.dialogsData.map((elem) => (
          <DialogItem name={elem.name} key = {elem.id} id={elem.id} />
        ))}
      </div>
      <div className={classes.messagesItems}>
        {props.dialogsPage.messagesData.map((elem) => (
          <MessageItem key = {elem.id} text={elem.message} />
        ))}
        <AddMessageForm/>
      </div>
    </div>
  );
};

export default Dialogs;


  
