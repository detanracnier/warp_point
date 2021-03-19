import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import UserContext from "./utils/UserContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CustomerDashboard from "./pages/CustomerDashboard";
import CarrierDashboard from "./pages/CarrierDashboard";
import RepresentativeDashboard from "./pages/RepresentativeDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CheckIfLoggedIn from "./components/CheckIfLoggedIn";
import jwt from "jwt-simple";

function App() {
  const secret = "blackhole";
  const [user, setUser] = useState();

  useEffect(()=>{
    const localUserToken = JSON.parse(localStorage.getItem("userToken"));
    if(localUserToken){
      const localUser = jwt.decode(localUserToken,secret);
      setUser(localUser);
    }
  },[]);

  console.log("welcome to app");

  return (
    <div className="app-container">
      <h1>fuuuuuck</h1>
      {/* <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Switch>
            <Route exact path="/login">
              <CheckIfLoggedIn>
                <LoginPage />
              </CheckIfLoggedIn>
            </Route>
            <Route exact path="/register" >
              <RegisterPage />
            </Route>
            <Route exact path="/customer/dashboard">
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            </Route>
            <Route exact path="/carrier/dashboard">
              <ProtectedRoute>
                <CarrierDashboard />
              </ProtectedRoute>
            </Route>
            <Route exact path="/rep/dashboard">
              <ProtectedRoute>
                <RepresentativeDashboard />
              </ProtectedRoute>
            </Route>
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider> */}
    </div>
  )
}

export default App;