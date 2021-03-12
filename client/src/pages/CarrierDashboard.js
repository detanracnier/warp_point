import React, { useState, useContext, useEffect } from "react";
import UserContext from "../utils/UserContext";
import axios from "axios";
import LogoutLink from "../components/LogoutLink";
import CarrierShippingOrders from "../components/CarrierShippingOrders";
import AvailableOrders from "../components/AvailableOrders";

export default function CarrierDashboard() {
  const { user } = useContext(UserContext);
  const [displayOrders, setDisplayOrders] = useState([]);

  useEffect(() => {
    axios.post('/api/order/search', { carrier:user.companyName })
      .then(response => {
        setDisplayOrders(response.data);
      })
  }, [user])

  return (
    <div className="container">
      <div className="row bg-info text-white">
        <div className="col-9">
          <h1 className="">Carrier Dashboard for {user.username}</h1>
        </div>
        <div className="col-3">
          <LogoutLink />
        </div>
      </div>
      <AvailableOrders />
      <h3 className="bg-light rounded border">Claimed Orders</h3>
      <CarrierShippingOrders displayOrders={displayOrders} />
    </div>
  )
}