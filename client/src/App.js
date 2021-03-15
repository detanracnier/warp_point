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

  return (
    <div className="app-container">
      <UserContext.Provider value={{ user, setUser }}>
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
            <Route path="/customer/dashboard">
              <ProtectedRoute>
                <CustomerDashboard />
              </ProtectedRoute>
            </Route>
            <Route path="/carrier/dashboard">
              <ProtectedRoute>
                <CarrierDashboard />
              </ProtectedRoute>
            </Route>
            <Route path="/rep/dashboard">
              <ProtectedRoute>
                <RepresentativeDashboard />
              </ProtectedRoute>
            </Route>
            <Redirect to="/login" />
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  )
}

export default App;