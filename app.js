const express = require('express');
const carRouter = require('./routers/car.router');


const server = express();

const car = require('./database').getInstance()
car.setModels();

server.use(express.urlencoded({extends: true}));
server.use(express.json())


server.use('/cars', carRouter)

server.listen(5002, (e) => {
    if (e) {
        console.log(e)
    }

    console.log('host 5002 is work')
})
