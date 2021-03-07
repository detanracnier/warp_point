import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import UserContext from "./utils/UserContext";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CustomerDashboard from "./pages/CustomerDashboard";
import CarrierDashboard from "./pages/CarrierDashboard";
import RepresentativeDashboard from "./pages/RepresentativeDashboard";

function App() {
  const [user, setUser] = useState();

  if (!user) {
    console.log("App.js: User not logged in>>");
    return (
      <div className="app-container">
        <UserContext.Provider value={{ setUser }}>
          <Router>
            <Switch>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/register" >
                <RegisterPage />
              </Route>
              <Redirect to="/login" />
            </Switch>
          </Router>
        </UserContext.Provider>
      </div>
    )
  }

  function renderDashboard() {
    if (user.type === "customer") {
      //window.history.push("/customer/dashboard");
      console.log("App.js:");
      console.log(user);
      return (
        <CustomerDashboard />
      )
    } else if (user.type === "carrier") {
      // window.history.push("/carrier/dashboard");
      return (
        <CarrierDashboard />
      )
    } else if (user.type === "representative") {
      // window.history.push("/rep/dashboard");
      return (
        <RepresentativeDashboard />
      )
    } else {
      console.log("App.js:");
      console.log(user);
      return (
        <h1>user type not found...in App.js</h1>
      )
    }
  }

  return (
    <div className="app-container">
      <UserContext.Provider value={{ user }}>
        {renderDashboard()}
      </UserContext.Provider>
    </div>
  );
}

export default App;
