const { StatusCodes } = require('http-status-codes');
const { Logger } = require('../config');
const { AirplaneRepository} = require('../repositories');
const AppError = require('../utils/errors/app-errors');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;
    } catch (error) {
        
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation);
            
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new Airplane object', StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function getAirplanes() {
    try {
        const airplanes = await airplaneRepository.getAll();
        return airplanes
    } catch (error) {
        throw new AppError('Cannot fetch data of all the Airplane.', StatusCodes.INTERNAL_SERVER_ERROR)
        
    }
}

async function getAirplane(id) {
    try {
        const airplane = await airplaneRepository.get(id);
        return airplane;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The Airplane you requested is not persent', error.statusCode)
        }
        throw new AppError('Cannot fetch data the Airplane.', StatusCodes.INTERNAL_SERVER_ERROR)
        
    }
}

async function destroyAirplane(id) {
    try {
        const response = await airplaneRepository.destroy(id);
        return response;
    } catch (error) {
         if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The Airplane you requested to delete is not persent', error.statusCode)
        }
        throw new AppError('Cannot fetch data the Airplane.', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createAirplane,
    getAirplanes,
    getAirplane,
    destroyAirplane
}