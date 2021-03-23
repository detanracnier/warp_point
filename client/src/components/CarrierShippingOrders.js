import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default function CarrierShippingOrder(props) {

    const [redirect, setRedirect] = useState({ enabled: false, route: "" });

    const handleStatusUpdate = (e) => {
        if (e.currentTarget.dataset.div_status === "active") {
            axios.put('/api/order/' + e.currentTarget.dataset.div_id, { status: "Complete" })
                .then(response => {
                    console.log(response.data);
                    setRedirect({ enabled: true, route: "/" });
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }

    const renderRedirect = () => {
        if (redirect.enabled) {
            return <Redirect to={redirect.route} />
        }
    }

    return (
        <div className="container mb-5">
            {renderRedirect()}
            <div className="row border-bottom">
                <div className="col">Start Point</div>
                <div className="col">End Point</div>
                <div className="col">Distance</div>
                <div className="col">Carrier Assigned</div>
                <div className="col">Status</div>
            </div>
            {props.displayOrders.map(order => {
                return (
                    <div className="row">
                        <div className="col">{order.startPoint}</div>
                        <div className="col">{order.endPoint}</div>
                        <div className="col">{order.distance}</div>
                        <div className="col">{order.carrier}</div>
                        <div className="col">
                            <div
                                onClick={(e) => handleStatusUpdate(e)}
                                data-div_id={order._id}
                                data-div_status={order.status}
                                className="btn btn-info">{order.status}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}