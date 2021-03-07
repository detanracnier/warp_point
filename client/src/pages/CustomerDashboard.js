import React, { useContext, useState } from "react";
import UserContext from "../utils/UserContext";

export default function CustomerDashboard() {
  const { user } = useContext(UserContext);
  console.log("customer dashboard>>");
  console.log(user);
  return (
    <div className="container">
        <h1>Customer Dashboard for {user.username}</h1>
    </div>
  )
}