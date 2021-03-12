import React from "react";

export default function CarrierShippingOrder(props) {

    return (
        <div className="container">
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
                        <div className="col">{order.status}</div>
                    </div>
                )
            })}
        </div>
    )
}