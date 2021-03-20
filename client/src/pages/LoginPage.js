import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";
import axios from "axios";
import jwt from "jwt-simple";

async function loginUser(credentials) {
  return axios.post('/api/login/authenticate', { ...credentials })
    .then(data => data).catch((err) => {
      return "Error";
    })
}

export default function LoginPage() {
  const secret = "blackhole";
  const { setUser } = useContext(UserContext);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState({ enabled: false, route: "" });
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    const user = await loginUser({
      username,
      password
    });
    if (user === "Error") {
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false);
      }, 3000);
    } else {
      localStorage.setItem("userToken",JSON.stringify(user.data));
      console.log(user.data);
      const decodedUser = jwt.decode(user.data,secret);
      await setUser(decodedUser);
    }
  };

  const renderRedirect = () => {
    if (redirect.enabled) {
      console.log("redirecting");
      console.log(redirect.route);
      return <Redirect to={redirect.route} />
    }
  }

  const renderError = () => {
    if (loginError) {
      return <div className="warning">Incorrect login credentials</div>
    }
  }

  return (
    <div className="container">
      {renderRedirect()}
      <h1 className="bg-info text-white">Please Log In</h1>
      <form className="mb-5" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />

        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div onClick={() => setRedirect({ enabled: true, route: "/register" })} className="btn btn-primary">Register</div>
      {renderError()}
    </div>
  )
}