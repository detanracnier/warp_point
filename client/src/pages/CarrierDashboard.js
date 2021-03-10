import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

export default function CarrierDashboard() {
  const { user } = useContext(UserContext);

  return (
    <div className="container">
        <h1>Carrier Dashboard for {user.username}</h1>
    </div>
  )
}