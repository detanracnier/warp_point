import React, { useState, useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import axios from "axios";
import LogoutLink from "../components/LogoutLink";
import Starchart from "../components/Starchart";
import NewOrderForm from "../components/NewOrderForm";
import CustomerShippingOrders from "../components/CustomerShippingOrders";

export default function CustomerDashboard() {
  const { user } = useContext(UserContext);
  const [starchart, setStarchart] = useState([]);
  const [displayOrders, setDisplayOrders] = useState([]);

  useEffect(() => {
    axios.get('/api/starchart').then(data => {
      setStarchart(data.data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  useEffect(() => {
    axios.post('/api/order/search', { customer: user.companyName })
      .then(response => {
        console.log(response);
        setDisplayOrders(response.data);
      })
  }, [user])

  return (
    <div className="container">
      <div className="row bg-info text-white">
        <div className="col-9">
          <h1 className="">Customer Dashboard for {user.username}</h1>
        </div>
        <div className="col-3">
          <LogoutLink />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Starchart chart={starchart} />
        </div>
      </div>
      <NewOrderForm chart={starchart} />
      <CustomerShippingOrders displayOrders={displayOrders} />

    </div>
  )
}