import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authenticate from "./components/Authenticate";
import UserContext from "./utils/UserContext";


function App() {
  const [user, setUser] = useState();


  if (!user) {
    return (
      <UserContext.Provider value={{user,setUser}}>
        <Authenticate />
      </UserContext.Provider>
    )
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={["/customer/dashboard"]}>
            <h1>Customer Dashboard</h1>
          </Route>
          <Route exact path={["/carrier/dashboard"]}>
            <h1>Carrier Dashboard</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
