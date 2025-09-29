const express = require('express') 
// const { AirplaneMiddlewares } = require('../../middlewares')
const { FlightController } = require('../../controllers')
const { FlightMiddlewares } = require('../../middlewares')

const router = express.Router()

// /api/v1/airplanes POST
router.post('/',
        FlightMiddlewares.validateCreateRequest,
        FlightController.createFlight)

router.get('/', 
        FlightController.getAllFlights)

router.get('/:id', 
        FlightController.getFlight)

router.delete('/:id', 
        FlightController.destroyFlight)

module.exports = router