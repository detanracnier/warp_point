const planetNodeController = require("../controllers/planetNodeController");

module.exports = function (app) {
    app.get('/api/starchart', planetNodeController.findAll);
    app.get('/api/starchart/calculate', function (req, res){
        // let startPoint = req.body.startPoint;
        // let endPoint = req.body.endPoint;
        
        setTimeout(()=> {
            res.json({distance:1000, customerCharge:500})
        },1500);
    })
}