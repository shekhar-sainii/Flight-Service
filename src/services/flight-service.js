const { StatusCodes } = require('http-status-codes');
// const { Logger } = require('../config');
const { FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-errors');
const { Op } = require('sequelize');

const flightRepository = new FlightRepository();

async function createFlight(data){
    try {
        console.log(data,"data---");
        
        const flight = await flightRepository.create(data);
        console.log(flight);
        
        return flight;
    } catch (error) {
        // console.log(error);
        if(error.name === 'SequelizeValidationError' || error.name === "SequelizeUniqueConstraintError"){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log(explanation);
            
            throw new AppError(explanation, StatusCodes.BAD_REQUEST)
        }
        throw new AppError('Cannot create a new flight object', StatusCodes.INTERNAL_SERVER_ERROR)

    }
}

async function getAllFlights(query) {
    try {
        let customFilter = {};
        let sortFilter = [];
        const endingTripDate = ' 23:59:00'
        if(query.trips) {
            [departureAirportId, arrivalAirportId] = query.trips.split('-')
            customFilter.departureAirportId = departureAirportId;
            customFilter.arrivalAirportId = arrivalAirportId;
            //Todo: add a check that are not same
        }

        if(query.price){
            [minPrice, maxPrice] = query.price.split('-')
            customFilter.price = {
                [Op.between]: [minPrice, (maxPrice === undefined) ? 20000 : maxPrice]
            }
        }

        if(query.travellers){
            customFilter.totalSeats = {
                [Op.gte] : query.travellers
            }
        }

        if(query.tripDate){
            customFilter.departureTime = {
                [Op.between] : [query.tripDate, query.tripDate + endingTripDate]
            }
        }

        if(query.sort){
            const params = query.sort.split(',')
            const sortFilters = params.map((param) => param.split('_'))
            sortFilter = sortFilters
        }
        const flights = await flightRepository.getAllFlights(customFilter, sortFilter);
        return flights
    } catch (error) {
        throw new AppError('Cannot fetch data of all the flights.', StatusCodes.INTERNAL_SERVER_ERROR)
        
    }
}

async function getFlight(id) {
    try {
        const flight = await flightRepository.get(id);
        return flight;
    } catch (error) {
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The flight you requested is not persent', error.statusCode)
        }
        throw new AppError('Cannot fetch data the flight.', StatusCodes.INTERNAL_SERVER_ERROR)
        
    }
}

async function destroyFlight(id) {
    try {
        const response = await flightRepository.destroy(id);
        return response;
    } catch (error) {
         if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError('The flight you requested to delete is not persent', error.statusCode)
        }
        throw new AppError('Cannot fetch data the flight.', StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

module.exports = {
    createFlight,
    getAllFlights,
    getFlight,
    destroyFlight
}