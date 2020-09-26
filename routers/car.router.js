const {Router} = require('express');
const carM = require('../midlleware/car.midlleware');
const carController = require('../controllers/car.controller');

let carRout = Router();

carRout.get('/', carController.AllCar)
carRout.get('/:id', carController.CurrentCar)
carRout.post('/', carM.NewCarMidleware, carController.NewCarr)

module.exports = carRout
