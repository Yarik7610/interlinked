import React from "react"
import classes from "./Login.module.scss"
import {useForm} from "react-hook-form";
import { connect } from "react-redux";
import { login } from "../../Redux/auth-reducer";
import {Navigate} from "react-router-dom"


const LoginForm = (props) => {
  
    const {register, handleSubmit, setError, clearErrors, formState: {errors, isValid}, reset} = useForm({
        mode: 'all'
    })
    const onSubmit = (data) => {
        console.log(data)
        props.login(data.email, data.password, data.rememberMe, data.captcha, setError)
        reset()
    }

    return (
        <form onSubmit = {handleSubmit(onSubmit)} className = {classes.loginForm}>
            <div className={classes.hl}>Account login</div>
            <div className= {classes.inputGroup}>
                <label className= {classes.label}>Email</label>
                <input onFocus = {() => {clearErrors(['email', 'server'])}} type = "text"  
                    className = {`logInput ${errors.email && 'errorBorder'}`}
                    {...register('email', {
                        required: "Email is required",
                        pattern: {
                            value: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                            message: "Please enter valid email"
                        }
                    })}
                />
                {errors.email && <div className="errorMsg">{errors.email.message}</div>}
            </div>
            <div className= {classes.inputGroup}>
                <label className= {classes.label}>password</label>
                <input onFocus = {() => {clearErrors(['password', 'server'])}} type = "password" 
                    className = {`logInput ${errors.password && 'errorBorder'}`}
                    {...register('password', {
                        required: "Password is required", 
                        validate: value => value.trim() !== '' ? null : 'No white spaces',
                        minLength: {value: 3, message: "Too short password"},
                        maxLength: {value: 20, message: "Too long password"},
                    })}
                />
                {errors.password && <div className="errorMsg">{errors.password.message}</div>}
            </div>
            <div className= {classes.rememberGroup}>
                <input type = "checkbox" 
                    {...register('rememberMe')}
                />
                <span className= {classes.remember}>Remember me</span>
            </div>
            {errors.server && <div className="errorMsg">{errors.server.message}</div>}
            <div>
                {props.captchaURL ? 
                    <div className= {classes.captchaBlock}>
                        <img src = {props.captchaURL}/>
                        <input onFocus = {() => {clearErrors(['server'])}} type = "text"  
                            className = {`logInput ${errors.captcha && 'errorBorder'}`}
                            {...register('captcha', {
                                required: "Captcha is required",
                            })}
                        />
                        {errors.captcha && <div className="errorMsg">{errors.captcha.message}</div>}
                    </div> 
                    : ''
                }
                <button className= {classes.btnSbm} disabled = {!isValid}>Log in</button>
            </div>
          
        </form>
    )
}



const Login = (props) => {

    if (props.isAuth) return <Navigate to={'/profile'}/>

    return (
        <div className={classes.loginWrap}>
            <LoginForm captchaURL = {props.captchaURL} login = {props.login}/>
        </div>
        
    )
   
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
})

export default connect(mapStateToProps, {login})(Login)


