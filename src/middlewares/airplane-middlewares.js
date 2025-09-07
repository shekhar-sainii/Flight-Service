const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-errors");


function validateCreateRequest(req, res, next){
    ErrorResponse.message = 'Something went wrong while creating airplane';
    ErrorResponse.error = new AppError(['ModelNumber not found in the incoming request in the correct form'], StatusCodes.BAD_REQUEST)

    if(!req.body.modelNumber){
        return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse)
    }
    next()
}

module.exports = {
    validateCreateRequest
}