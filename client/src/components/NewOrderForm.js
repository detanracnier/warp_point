import React, { useContext, useState, useEffect } from "react";
import UserContext from "../utils/UserContext";
import axios from "axios";

export default function NewOrderForm(props) {
    const options = props.chart.map(planet => ({
        "value": planet.name,
        "label": planet.name
    }));
    const { user } = useContext(UserContext);
    const [newOrder, setNewOrder] = useState();

    useEffect(() => {
        if (props.chart.length > 1) {
            setNewOrder({
                ...newOrder,
                startPoint:props.chart[0].name,
                endPoint:props.chart[1].name
            })
        }
    },[props])
    const handleSubmit = async e => {
        e.preventDefault();
    };

    return (
        <div>
            <h3 className="bg-light rounded border">Create New Order</h3>
            <form className="mb-5" onSubmit={handleSubmit}>
                <label className="p-1">
                    <p>Shipping from:</p>
                    <select className="p-1" type="text" onChange={e => setNewOrder({ ...newOrder, startPoint: e.target.value })} >
                        {options.map((option) => {
                            return <option key={option.label} value={option.value}>{option.label}</option>
                        })}
                    </select>
                </label>
                <label className="p-1">
                    <p>Shipping to:</p>
                    <select className="p-1" type="text" onChange={e => setNewOrder({ ...newOrder, endPoint: e.target.value })} >
                        {options.map((option) => {
                            return <option key={option.label} value={option.value}>{option.label}</option>
                        })}
                    </select>
                </label>
            </form>
        </div>
    )
}