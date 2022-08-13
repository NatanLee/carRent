const express = require('express');
const router = express.Router();
const jsonParser = express.json();
const fs = require('fs');

const dbConnection = require('../models/dbConnection');
//console.log(connection)

router.get('/getAllCars', async (req, res) => {        
    let result = await dbConnection.getAllCars();
    //console.log('res', result)
    res.send(result);
})

router.get('/getThreeFreeCars', async (req, res) => {        
    let result = await dbConnection.getThreeFreeCars();
    //console.log('res', result)
    res.send(result);
})

router.post('/getOneCar', jsonParser, async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    let result = await dbConnection.getOneCar(req.body.carId);
    res.send(result);    
})

router.post('/getPrice', jsonParser, async (req, res) => {
    if(!req.body) return res.sendStatus(400);
    //console.log("BODY", req.body)
    let result = await dbConnection.getPrice(req.body.carClass);
    //console.log('res', result)
    res.send(result);    
})

router.post('/getImgNames', jsonParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    let filenames = fs.readdirSync(`./client/src/gallery/${req.body.carId}`);
    res.send(filenames);    
})

router.post('/setQuestion', jsonParser, (req, res) => {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);
    dbConnection.setQuestion(req.body);

})

module.exports = router;