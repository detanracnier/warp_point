import React from "react";
import { v4 as uuidv4 } from "uuid";

export default function CustomerShippingOrder(props) {

    return (
        <div>
            <h3 className="bg-light rounded border">Active Orders</h3>
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
                        <div key={uuidv4()} className="row">
                            <div key={uuidv4()} className="col">{order.startPoint}</div>
                            <div key={uuidv4()} className="col">{order.endPoint}</div>
                            <div key={uuidv4()} className="col">{order.distance}</div>
                            <div key={uuidv4()} className="col">{order.carrier}</div>
                            <div key={uuidv4()} className="col">{order.status}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}