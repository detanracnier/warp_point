import React, { useContext, useState } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";
import axios from "axios";


async function registerUser(credentials) {
  return axios.post('/api/register', { ...credentials })
    .then(data => data)
}

export default function RegisterPage() {
  const { setUser } = useContext(UserContext);
  const [newUser, setNewUser] = useState();
  const [redirect, setRedirect] = useState({ enabled: false, route: "" });

  const handleSubmit = async e => {
    e.preventDefault();
    const user = await registerUser({
      ...newUser
    });
    // Add display error incase registration fails
    console.log("Setting user:");
    console.log(user.data);
    setUser(user.data);
    //setRedirect({enabled:true, route:"/"+user.data.type+"/dashboard"});
  };

  const renderRedirect = () => {
    if (redirect.enabled) {
      return <Redirect to={redirect.route} />
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
          <input type="text" onChange={e => setNewUser({ ...newUser, type: e.target.value })} />
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
    </div>
  )
}