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
    xCord: 510 ,
    yCord: 108,
    connections: [
      { name: "Dyl" },
      { name: "Centaurus" },
      { name: "Iras" }
    ]
  },
  {
    name: "Takim",
    xCord: 486 ,
    yCord: 93,
    connections: [
      { name: "Zhaen" },
      { name: "Acamar" }
    ]
  },
  {
    name: "Acamar",
    xCord: 430 ,
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
    xCord: 380 ,
    yCord: 121,
    connections: [
      { name: "Acamar" }
    ]
  },
  {
    name: "Olvaldi",
    xCord: 489 ,
    yCord: 147,
    connections: [
      { name: "Acamar" },
      { name: "Andromeda" }
    ]
  },
  {
    name: "Jeia",
    xCord: 461 ,
    yCord: 178,
    connections: [
      { name: "Acamar" }
    ]
  },
  {
    name: "Andromeda",
    xCord: 504 ,
    yCord: 165,
    connections: [
      { name: "Olvaldi" },
      { name: "Iras"}
    ]
  },
  {
    name: "Iras",
    xCord: 526 ,
    yCord: 151,
    connections: [
      { name: "Andromeda" },
      { name: "Orion"}
    ]
  },
  {
    name: "Menys",
    xCord: 589 ,
    yCord: 145,
    connections: [
      { name: "Centaurus" },
      { name: "Muzis"},
      { name: "Nos"}
    ]
  },
  {
    name: "Muzis",
    xCord: 617 ,
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
    xCord: 639 ,
    yCord: 204,
    connections: [
      { name: "Bryia" },
      { name: "Menys"}
    ]
  },
  {
    name: "Hid",
    xCord: 693 ,
    yCord: 156,
    connections: [
      { name: "Muzis" }
    ]
  },
  {
    name: "Bryia",
    xCord: 641 ,
    yCord: 177,
    connections: [
      { name: "Muzis" },
      { name: "Nos" }
    ]
  }
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
