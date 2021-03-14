const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/warp_point"
);

const planetSeed = [
  {
    name: "Zhaen",
    xCord: 523,
    yCord: 60,
    connections: [
      { name: "Dyl" },
      { name: "Takim" }
    ]
  },
  {
    name: "Dyl",
    xCord: 559,
    yCord: 84,
    connections: [
      { name: "Zhaen" },
      { name: "Centaurus" },
      { name: "Orion" }
    ]
  },
  {
    name: "Centaurus",
    xCord: 562,
    yCord: 106,
    connections: [
      { name: "Dyl" },
      { name: "Muzis" },
      { name: "Orion" },
      { name: "Menys" }
    ]
  },
  {
    name: "Orion",
    xCord: 510,
    yCord: 108,
    connections: [
      { name: "Dyl" },
      { name: "Centaurus" },
      { name: "Iras" }
    ]
  },
  {
    name: "Takim",
    xCord: 486,
    yCord: 93,
    connections: [
      { name: "Zhaen" },
      { name: "Acamar" }
    ]
  },
  {
    name: "Acamar",
    xCord: 430,
    yCord: 105,
    connections: [
      { name: "Takim" },
      { name: "Giazar" },
      { name: "Olvaldi" },
      { name: "Jeia" }
    ]
  },
  {
    name: "Giazar",
    xCord: 380,
    yCord: 121,
    connections: [
      { name: "Acamar" }
    ]
  },
  {
    name: "Olvaldi",
    xCord: 489,
    yCord: 147,
    connections: [
      { name: "Acamar" },
      { name: "Andromeda" }
    ]
  },
  {
    name: "Jeia",
    xCord: 461,
    yCord: 178,
    connections: [
      { name: "Acamar" },
      { name: "Ibany" },
      { name: "Lupus" },
      { name: "Idrus" }
    ]
  },
  {
    name: "Andromeda",
    xCord: 504,
    yCord: 165,
    connections: [
      { name: "Olvaldi" },
      { name: "Iras"},
      { name: "Foris"}
    ]
  },
  {
    name: "Iras",
    xCord: 526,
    yCord: 151,
    connections: [
      { name: "Andromeda" },
      { name: "Orion"}
    ]
  },
  {
    name: "Menys",
    xCord: 589,
    yCord: 145,
    connections: [
      { name: "Centaurus" },
      { name: "Muzis"},
      { name: "Nos"}
    ]
  },
  {
    name: "Muzis",
    xCord: 617,
    yCord: 128,
    connections: [
      { name: "Centaurus" },
      { name: "Menys"},
      { name: "Hid"},
      { name: "Bryia"}
    ]
  },
  {
    name: "Nos",
    xCord: 639,
    yCord: 204,
    connections: [
      { name: "Bryia" },
      { name: "Menys"}
    ]
  },
  {
    name: "Hid",
    xCord: 693,
    yCord: 156,
    connections: [
      { name: "Muzis" }
    ]
  },
  {
    name: "Bryia",
    xCord: 641,
    yCord: 177,
    connections: [
      { name: "Muzis" },
      { name: "Nos" }
    ]
  },
  {
    name: "Ibany",
    xCord: 373,
    yCord: 157,
    connections: [
      { name: "Giazar" },
      { name: "Jeia" },
      { name: "Zaurak"}
    ]
  },
  {
    name: "Idrus",
    xCord: 450,
    yCord: 231,
    connections: [
      { name: "Lupus" },
      { name: "Jeia" }
    ]
  },
  {
    name: "Lupus",
    xCord: 423,
    yCord: 200,
    connections: [
      { name: "Idrus" },
      { name: "Jeia" },
      { name: "Gemini" },
      { name: "Qorum" }
    ]
  },
  {
    name: "Zaurak",
    xCord: 330,
    yCord: 155,
    connections: [
      { name: "Ibany" },
      { name: "Theia" }
    ]
  },
  {
    name: "Theia",
    xCord: 300,
    yCord: 133,
    connections: [
      { name: "Zaurak" },
      { name: "Cetus" }
    ]
  },
  {
    name: "Cetus",
    xCord: 296,
    yCord: 158,
    connections: [
      { name: "Theia" },
      { name: "Janus" },
      { name: "Ursa" },
      { name: "Ugaro" }
    ]
  },
  {
    name: "Janus",
    xCord: 357,
    yCord: 174,
    connections: [
      { name: "Cetus" }
    ]
  },
  {
    name: "Ursa",
    xCord: 263,
    yCord: 204,
    connections: [
      { name: "Cetus" },
      { name: "Xiu" }
    ]
  },
  {
    name: "Ugaro",
    xCord: 189,
    yCord: 163,
    connections: [
      { name: "Cetus" },
      { name: "Viacherus" }
    ]
  },
  {
    name: "Viacherus",
    xCord: 145,
    yCord: 194,
    connections: [
      { name: "Ugaro" },
      { name: "Bellatrix" }
    ]
  },
  {
    name: "Bellatrix",
    xCord: 207,
    yCord: 205,
    connections: [
      { name: "Viacherus" },
      { name: "Xiterbia" }
    ]
  },
  {
    name: "Xiterbia",
    xCord: 153,
    yCord: 221,
    connections: [
      { name: "Bellatrix" },
      { name: "Gienah" },
      { name: "Xacor" }
    ]
  },
  {
    name: "Gienah",
    xCord: 176,
    yCord: 259,
    connections: [
      { name: "Xiterbia" },
      { name: "Dorado" }
    ]
  },
  {
    name: "Xacor",
    xCord: 162,
    yCord: 295,
    connections: [
      { name: "Xiterbia" }
    ]
  },
  {
    name: "Dorado",
    xCord: 273,
    yCord: 264,
    connections: [
      { name: "Gienah" },
      { name: "Xiu" }
    ]
  },
  {
    name: "Xiu",
    xCord: 312,
    yCord: 243,
    connections: [
      { name: "Dorado" },
      { name: "Ursa" },
      { name: "Qorum" }
    ]
  },
  {
    name: "Qorum",
    xCord: 348,
    yCord: 259,
    connections: [
      { name: "Xiu" },
      { name: "Lupus" },
      { name: "Nekkar" }
    ]
  },
  {
    name: "Nekkar",
    xCord: 375,
    yCord: 324,
    connections: [
      { name: "Qorum" },
      { name: "Gemini" }
    ]
  },
  {
    name: "Gemini",
    xCord: 405,
    yCord: 250,
    connections: [
      { name: "Nekkar" },
      { name: "Lupus" }
    ]
  },
  {
    name: "Foris",
    xCord: 513,
    yCord: 219,
    connections: [
      { name: "Andromeda" },
      { name: "Zuben" },
      { name: "GNY 8" },
      { name: "Kyrus" }
    ]
  },
  {
    name: "Kyrus",
    xCord: 486,
    yCord: 258,
    connections: [
      { name: "Foris" }
    ]
  },
  {
    name: "GNY 8",
    xCord: 603,
    yCord: 255,
    connections: [
      { name: "Foris" }
    ]
  },
  {
    name: "Zuben",
    xCord: 561,
    yCord: 180,
    connections: [
      { name: "Foris" }
    ]
  },
];

db.PlanetNode
  .remove({})
  .then(() => db.PlanetNode.collection.insertMany(planetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
