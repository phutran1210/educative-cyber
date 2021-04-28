import React from "react"
import { HashRouter, Route, Switch } from "react-router-dom"
import "./App.css"
import Login from "./pages/Login/Login"
import SpinnerComponent from "./components/Spinner/index"
import { ClientHome } from "./pages/ClientHome/ClientHome"
import { Profile } from "./pages/Profile/Profile"
import Error from "./pages/Error/Error"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <HashRouter>
      {/* <SpinnerComponent /> */}
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ClientHome} />
          <Route path="/login" component={Login} />
          <Route path="/profile" component={Profile} />
          <Route path="**" component={Error} />
        </Switch>
      </React.Fragment>
    </HashRouter>
  )
}

export default App
