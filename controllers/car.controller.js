const carService = require('../services/car.service');

module.exports = {
    AllCar: async (req, res) => {
        try {
     let cars = await carService.allCars()
            res.json(cars)
        }
        catch (e) {
            console.log(e)
        }
    },

    CurrentCar: async (req, res) => {
        try {
            let cars = await carService.CurrentCar(req.params.id)
            res.json(cars)
        }
        catch (e) {
            console.log(e)
        }
    },

    NewCarr: async (req, res) => {
        try {
            let cars = await carService.NewCar(req.body)
            res.json(cars)
        }
        catch (e) {
            console.log(e)
        }
    }
}
