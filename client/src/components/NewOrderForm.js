import React, { useContext, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import UserContext from "../utils/UserContext";
import axios from "axios";
import Starchart from "../components/Starchart";

export default function NewOrderForm(props) {
    const options = props.chart.map(planet => ({
        "value": planet.name,
        "label": planet.name
    }));
    const { user } = useContext(UserContext);
    const [newOrder, setNewOrder] = useState();
    const [calculating, setCalculating] = useState(false);
    const [orderReady, setOrderReady] = useState(false);
    const [shippingRoute, setShippingRoute] = useState([]);
    const [redirect, setRedirect] = useState({ enabled: false, route: "" });

    useEffect(() => {
        if (props.chart.length > 1) {
            setNewOrder({
                startPoint: props.chart[0].name,
                endPoint: props.chart[0].name,
                customer: user.companyName
            })
        }
    }, [props, user]);

    const calculateCost = () => {
        setCalculating(true);
        axios.post('/api/starchart/calculate', {
            startPoint: newOrder.startPoint,
            endPoint: newOrder.endPoint
        }).then((response) => {
            setShippingRoute(response.data.route);
            setNewOrder({
                ...newOrder,
                distance: response.data.distance,
                customerCharge: response.data.customerCharge
            });
            setOrderReady(true);
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(newOrder);
        axios.post('/api/order', { ...newOrder })
            .then(async (response) => {
                console.log(response.data);
                setRedirect({ enabled: true, route: "/" });
            })
            .catch(err => {
                console.log(err);
            })
    };

    const renderCalculateBtn = () => {
        if (!orderReady) {
            return (
                <div>
                    <button disabled={calculating} onClick={() => calculateCost()}>Calculate</button>
                </div>
            )
        }
    }

    const renderCostSumbit = () => {
        if (orderReady) {
            return (
                <>
                    <label>Shipping Cost:</label>
                    <span> ${newOrder.customerCharge}</span>
                    <div>
                        <button type="submit" >Submit</button>
                    </div>
                </>
            )
        }
    }

    const renderRedirect = () => {
        if (redirect.enabled) {
            return <Redirect to={redirect.route} />
        }
    }

    return (
        <div>
            {renderRedirect()}
            <div className="row">
                <div className="col">
                    <Starchart chart={props.chart} route={shippingRoute} />
                </div>
            </div>
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
                {renderCalculateBtn()}
                {renderCostSumbit()}
            </form>
        </div>
    )
}