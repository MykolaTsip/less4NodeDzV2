const {Sequelize, DataTypes} = require('sequelize');
const fs = require('fs');
const path = require('path');

module.exports = (() => {
    let instance;

function initConnection() {
let client = new Sequelize('auto_shop', 'root', 'user', {
    host: 'localhost',
    dialect: 'mysql'
})

    let models = {}

    function getModels() {
            fs.readdir(path.join(process.cwd(), 'database', 'model'), (err, files) => {
                files.forEach( file => {
                    const [modelName] = file.split('.')
                        models[modelName] = (require(path.join(process.cwd(),'database', 'model', modelName )))(client, DataTypes)
                })
            })
    }

    return {
        setModels: () => getModels(),
        getModel: (modelName) => models[modelName]
    }
}

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance
        }
    }
})()

