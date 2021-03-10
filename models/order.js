const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    startPoint: { type: String, required: true },
    endPoint: { type: String, required: true },
    distance: { type: Number, required: true },
    customer: { type: String, required: true },
    customerCharge: { type: Number, required: true },
    carrier: { type: String, required: true },
    carrierBid: { type: Number },
    expectedDelivaryDate: { type: Date },
    status: { type: String },
    creationDate: { type: Date, default: Date.now }
});

const Order = mongoose.model("Order", OrderSchema);

module.exports = Order;
