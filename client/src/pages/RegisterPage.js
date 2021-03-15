import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";
import axios from "axios";
import jwt from "jwt-simple";

async function registerUser(credentials) {
  return axios.post('/api/register', { ...credentials })
    .then(data => data).catch((err) => {
      return "Error";
    })
}

export default function RegisterPage() {
  const secret = "blackhole";
  const { setUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState({ type: "customer" });
  const [loginError, setLoginError] = useState(false);
  const [redirect, setRedirect] = useState({ enabled: false, route: "" });

  const handleSubmit = async e => {
    e.preventDefault();
    const user = await registerUser({
      ...newUser
    });
    console.log(user);
    if (user.data.error) {
      setLoginError(true);
      setTimeout(() => {
        setLoginError(false);
      }, 3000);
    } else {
      localStorage.setItem("userToken",JSON.stringify(user.data));
      const decodedUser = jwt.decode(user.data,secret);
      await setUser(decodedUser);
      setRedirect({ enabled: true, route: "/" + user.data.type + "/dashboard" });
    }
  };

  const renderRedirect = () => {
    if (redirect.enabled) {
      return <Redirect to={redirect.route} />
    }
  }

  const renderError = () => {
    if (loginError) {
      return <div className="warning">Failed to create user</div>
    }
  }


  return (
    <div className="container">
      {renderRedirect()}
      <h1 className="bg-info text-white">Register New User</h1>
      <form className="mb-5" onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setNewUser({ ...newUser, username: e.target.value })} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setNewUser({ ...newUser, password: e.target.value })} />
        </label>
        <label>
          <p>Type</p>
          <select className="p-1" type="text" onChange={e => setNewUser({ ...newUser, type: e.target.value })} >
            <option value="customer">Customer</option>
            <option value="carrier">Carrier</option>
            <option value="rep">Representative</option>
          </select>
        </label>
        <label>
          <p>Company Name</p>
          <input type="text" onChange={e => setNewUser({ ...newUser, companyName: e.target.value })} />
        </label>
        <label>
          <p>Location</p>
          <input type="text" onChange={e => setNewUser({ ...newUser, location: e.target.value })} />
        </label>
        <label>
          <p>Phone Number</p>
          <input type="number" onChange={e => setNewUser({ ...newUser, phone: e.target.value })} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <div onClick={() => setRedirect({ enabled: true, route: "/login" })} className="btn btn-primary">Login</div>
      {renderError()}
    </div>
  )
}