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

// json web tokens
// jwt-decode

function App() {
  const [user, setUser] = useState();
  console.log("app starting");

  useEffect(()=>{
    console.log("checking for localstorage user");
    const localUser = JSON.parse(localStorage.getItem("user"));
    if(localUser){
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