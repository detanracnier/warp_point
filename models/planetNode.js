const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlanetNodeSchema = new Schema({
    name: { type: String, required: true, unique: true },
    xCord: { type: Number, required: true },
    yCord: { type: Number, required: true },
    connections: [
        {
            name: { type: String, required: true }
        }
    ]
});

const PlanetNode = mongoose.model("PlanetNode", PlanetNodeSchema);

module.exports = PlanetNode;
