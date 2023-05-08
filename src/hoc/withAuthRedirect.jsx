import React from "react"
import {Navigate} from "react-router-dom"
import { connect } from "react-redux";

let mapStateToPropsForRedirect = (state) => { 
    return {
      isAuth: state.auth.isAuth,
    }
  }

export const withAuthRedirect = (Component) => {

    let RedirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to={'/login'}/>
        return <Component {...props}/>
    }
    
    return connect(mapStateToPropsForRedirect)(RedirectComponent)
}