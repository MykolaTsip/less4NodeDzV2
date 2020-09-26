const carModel = require('../database').getInstance();

module.exports = {
    allCars: async () => {
        let car = carModel.getModel('Car');
        return car.findAll({})
    },
    CurrentCar: async (req) => {
        let car = carModel.getModel('Car');
      return car.findAll({
          where: {
              idcars: req
          }
      })
    },
    NewCar: async (obj) => {
        let car = carModel.getModel('Car');
        return car.create(obj, {new: true})
    }
}
