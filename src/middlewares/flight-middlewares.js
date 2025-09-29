const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-errors");


function validateCreateRequest(req, res, next) {
    // ErrorResponse.message = 'Something went wrong while creating airport';
    // ErrorResponse.error = new AppError(['Airport Name not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)

    if (!req.body.flightNumber) {
        ErrorResponse.message = 'Something went wrong while creating Flight';
        ErrorResponse.error = new AppError(['Flight flightNumber not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.airplaneId) {
        ErrorResponse.message = 'Something went wrong while creating Flight';
        ErrorResponse.error = new AppError(['Flight airplane Id not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if (!req.body.departureAirportId) {
        ErrorResponse.message = 'Something went wrong while creating Flight';
        ErrorResponse.error = new AppError(['Flight departureAirport Id not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.arrivalAirportId) {
        ErrorResponse.message = 'Something went wrong while creating Flight';
        ErrorResponse.error = new AppError(['Flight arrivalAirport Id not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.arrivalTime) {
        ErrorResponse.message = 'Something went wrong while creating Flight';
        ErrorResponse.error = new AppError(['Flight arrivalTime not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    if (!req.body.departureTime) {
        ErrorResponse.message = 'Something went wrong while creating Flight';
        ErrorResponse.error = new AppError(['Flight departureTime not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }

    if (!req.body.price) {
        ErrorResponse.message = 'Something went wrong while creating Flight';
        ErrorResponse.error = new AppError(['Flight price not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    // if (!req.body.boardingGate) {
    //     ErrorResponse.message = 'Something went wrong while creating Flight';
    //     ErrorResponse.error = new AppError(['Flight boardingGate not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
    //     return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    // }
    if (!req.body.totalSeats) {
        ErrorResponse.message = 'Something went wrong while creating Flight';
        ErrorResponse.error = new AppError(['Flight totalSeats not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

module.exports = {
    validateCreateRequest
}