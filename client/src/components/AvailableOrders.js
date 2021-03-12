import React, { useState, useEffect, useContext } from "react";
import UserContext from "../utils/UserContext";
import axios from "axios";

export default function AvailableOrders() {
    const [availableOrders, setAvailableOrders] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const { user } = useContext(UserContext);

    useEffect(() => {
        axios.post('/api/order/search', { carrier: null }).then(response => {
            setAvailableOrders(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const claimOrder = (e) => {
        console.log(e.currentTarget.dataset.div_id);
        axios.put('/api/order/'+e.currentTarget.dataset.div_id, { carrier: user.companyName })
        .then(response => {
            console.log(response.data);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const prevPage = () => {
        setPageNumber(pageNumber - 1);
    }

    const nextPage = () => {
        setPageNumber(pageNumber + 1);
    }

    const renderOrders = () => {
        let pageArray = [];
        for (let x = pageNumber * 10; x < pageNumber * 10 + 10 && x < availableOrders.length; x++) {
            pageArray.push(availableOrders[x]);
        };

        return pageArray.map(order => {
            return (
                <div className="row">
                    <div className="col">{order.startPoint}</div>
                    <div className="col">{order.endPoint}</div>
                    <div className="col">{order.distance}</div>
                    <div className="col">
                        <div data-div_id={order._id} onClick={claimOrder} className="m-1 px-5 btn btn-info">Claim</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <h3 className="bg-light rounded border">Available Orders</h3>
            <div className="container">
                <div className="row border-bottom">
                    <div className="col">Start Point</div>
                    <div className="col">End Point</div>
                    <div className="col">Distance</div>
                    <div className="col"></div>
                </div>
                {renderOrders()}
            </div>
            <button onClick={() => prevPage()} disabled={pageNumber > 0 ? "" : true} className="btn btn-info mr-2">Previous page</button>
            <button onClick={() => nextPage()} disabled={availableOrders.length - pageNumber * 10 > 10 ? "" : true} className="btn btn-info px-4">Next page</button>
        </div>
    )
}