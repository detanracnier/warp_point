import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

export default function RepresentativeDashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
        <h1>Representative Dashboard for {user.username}</h1>
    </div>
  )
}