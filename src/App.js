import React, {useEffect, useState, useRef, lazy, Suspense, createContext} from "react";
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

export const ThemeContext = createContext(null)

const App = (props) => {

  const getTheme = () => {
    return JSON.parse(localStorage.getItem("isDark")) || false
  }

  const isMounted = useRef(false)
  const [isDark, setIsDark] = useState(getTheme())

  const navigate = useNavigate()

  useEffect(() => {
    props.initializeApp()
    navigate('/profile')
  }, [])
  
  
  if (!props.initialized) return <Preloader/>
  
  return (
    <ThemeContext.Provider value = {{isDark, setIsDark}}>
      <Layout>
        <div className = 'App'>
          <HeaderContainer/>
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
    </ThemeContext.Provider>
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

