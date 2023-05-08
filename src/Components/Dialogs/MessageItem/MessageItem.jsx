import React from "react";
import classes from "./MessageItem.module.scss";

const MessageItem = ({ id, text }) => {
  return (
    <div className={classes.message}>{text}</div>
  );
};

export default MessageItem;
