const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const AccountSchema = new Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String },
    type: { type: String, required: true },
    companyName: { type: String },
    location: { type: String },
    phone: { type: Number },
    creationDate: { type: Date, default: Date.now }
});

AccountSchema.plugin(passportLocalMongoose);

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
