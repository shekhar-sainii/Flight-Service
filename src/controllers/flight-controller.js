const { StatusCodes } = require('http-status-codes');
// const { Logger } = require('../config')
const { FlightService} = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/common');

// post : /flights
// req-body { modelNumber: 'airbus-320', capacity: 200}


async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        })
        SuccessResponse.data = flight;
        return res
        .status(StatusCodes.CREATED)
        .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error;
        return res.status(error.statusCode).json(ErrorResponse);
    }
}

async function getAllFlights(req, res){
    try {
        // console.log(req.query,"req.query");
        
        const flights = await FlightService.getAllFlights(req.query);
             SuccessResponse.data = flights
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
    } catch (error) {
          ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function getFlight(req, res){
    try {
        const flight = await FlightService.getFlight(req.params.id);
             SuccessResponse.data = flight
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
    } catch (error) {
          ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

async function destroyFlight(req, res){
    try {
        const flight = await FlightService.destroyFlight(req.params.id);
             SuccessResponse.data = flight
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
    } catch (error) {
          ErrorResponse.error = error
        return res.status(error.statusCode).json(ErrorResponse)
    }
}

module.exports = {
    createFlight,
    getFlight,
    getAllFlights,
    destroyFlight
}