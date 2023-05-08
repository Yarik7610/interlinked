import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "@reduxjs/toolkit";

let mapStateToProps = (state) => { //state прямиком из стора
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth,
  }
}
  
export default compose(
  connect(mapStateToProps, {addMessage}),
  withAuthRedirect
)(Dialogs)

