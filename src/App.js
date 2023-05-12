import React, {useEffect, useState, lazy, Suspense} from "react";
import "./App.scss";
import { connect } from "react-redux";
import { HashRouter, Route, Routes, useNavigate } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/redux-store"; 
import { initializeApp } from "./Redux/app-reducer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import { Layout } from "./providers/Layout";
import Preloader from "./Components/Preloader/Preloader";

const DialogsContainer = lazy(() => import("./Components/Dialogs/DialogsContainer"))
const ProfileContainer = lazy(() => import("./Components/Profile/ProfileContainer"))
const UsersContainer = lazy(() => import("./Components/Users/UsersContainer"))

const App = (props) => {

  const getTheme = () => {
    return JSON.parse(localStorage.getItem("isDark")) || false
  }
  const [isDark, setIsDark] = useState(getTheme())

  let navigate = useNavigate()

  useEffect(() => {
    props.initializeApp()
    navigate('/login')
  }, [])
  
  
  if (!props.initialized) return <Preloader/>
  
  return (
    <Layout isDark = {isDark}>
      <div className = 'App'>
        <HeaderContainer isDark = {isDark} setIsDark = {setIsDark}/>
        <Navbar />
        <div className="app-wrapper__content">
          <Suspense fallback = {<Preloader/>}>
            <Routes>
              <Route path="/profile/:userId?" element={<ProfileContainer />} />
              <Route path="/dialogs/*" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<Login />} />
              <Route path='*' element={<div>404 Not found</div>}/>
            </Routes>
          </Suspense>
        </div>
      </div>
    </Layout>
  );
};

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer =  connect(mapStateToProps, {initializeApp})(App)

const SamuraiJSApp = (props) => { 
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  )
}

export default SamuraiJSApp

