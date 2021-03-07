import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";
import axios from "axios";

async function loginUser(credentials) {
  return axios.post('/api/login', { ...credentials })
    .then(data => data)
}

export default function LoginPage() {
  const { setUser } = useContext(UserContext);
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [redirect, setRedirect] = useState({ enabled: false, route: "" });


  const handleSubmit = async e => {
    e.preventDefault();
    const user = await loginUser({
      username,
      password
    });
    // add handle error
    setUser(user.data);
  };

  const renderRedirect = () => {
    if (redirect.enabled) {
      return <Redirect to={redirect.route} />
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
    </div>
  )
}