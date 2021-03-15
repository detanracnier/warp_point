const planetNodeController = require("../controllers/planetNodeController");

module.exports = function (app) {
    app.get('/api/starchart', planetNodeController.findAll);
    app.post('/api/starchart/calculate', async function (req, res) {
        let startPoint = req.body.startPoint;
        let endPoint = req.body.endPoint;
        // setTimeout(()=> {
        //     res.json({distance:1000, customerCharge:500})
        // },1500);
        const route = await pathfinding(startPoint, endPoint);
        res.json(route);
    })
}

async function pathfinding(startPoint, endPoint) {
    const customerShippingRate = 34;

    const systemPlanetList = await planetNodeController.planetList();
    let currentPlanet = systemPlanetList.find(planet => planet.name === startPoint);
    currentPlanet.gscore = 0;
    let destinationPlanet = systemPlanetList.find(planet => planet.name === endPoint);
    // Adds our starting planet to the frontier to be explored first
    let frontier = [currentPlanet];
    // Holds all planets that have already been explored
    let explored = [];
    // Create an array to hold the final path
    let finalPath = [];
    let distance = 0;

    // As long as there are planets left to explore, loop
    while (frontier.length > 0) {
        // Current planet is what ever is at the top of the frontier array
        currentPlanet = frontier[0];
        // If our current planet is the destination planet then...
        if (currentPlanet === destinationPlanet) {
            // Clear the frontier array
            frontier = [];
            // Each planet will track which planet it was pathed to from as its parent
            // While a planet has a parent add that planet to the final path
            // This should trace the path back to the starting planet
            while (currentPlanet.parent) {
                finalPath.push(currentPlanet);
                currentPlanet = currentPlanet.parent;
            }
            // Reverse the array so it is ordered start -> end
            distance = finalPath[0].gscore;
            finalPath.reverse();
            // Calculate final path here
        } else {
            // Since we are not at the destination planet...
            // Add the current planet to the explored array
            explored.push(frontier[0]);
            // Remove the current planet from the frontier array
            frontier.splice(0, 1);
            // Get connections of current planet
            getConnetions(currentPlanet);
            // Sort the new frontier by Fscore which is a combination of the distance to the destination
            // and the distance from the previous planet
            frontier.sort((a, b) => (a.fscore > b.fscore) ? 1 : -1);
        }
    }

    const route = {
        distance: (distance * 10).toFixed(0),
        customerCharge: (distance * customerShippingRate).toFixed(2),
        route: finalPath
    }

    return route;

    function getConnetions(currentPlanet) {
        // For each connection of the current planet
        currentPlanet.connections.map(planetName => {
            // Get that planet out of the planet list
            const planet = systemPlanetList.find(planet => planet.name === planetName.name);
            // If the planet is not already in the frontier array...
            if (frontier.filter(frontierPlanet => frontierPlanet.name === planet.name).length === 0) {
                // If the planet is not already in the expolored array...
                if (explored.filter(exploredPlanet => exploredPlanet.name === planet.name).length === 0) {
                    // Set the current planet as the connection planets parent
                    planet.parent = currentPlanet;
                    // Calculate the distance between planet and destination planet
                    planet.hscore = Math.hypot(planet.xCord - destinationPlanet.xCord, planet.yCord - destinationPlanet.yCord);
                    // Calcutate the distance between planet and the current planet
                    planet.gscore = currentPlanet.gscore + Math.hypot(currentPlanet.xCord - planet.xCord, currentPlanet.yCord - planet.yCord);
                    // Add both scores together
                    planet.fscore = planet.hscore + planet.gscore;
                    // Add planet to frontier
                    frontier.push(planet);
                }
            }
        })
    }

}