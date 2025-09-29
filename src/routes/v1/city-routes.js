const express = require('express') 
// const { AirplaneMiddlewares } = require('../../middlewares')
const { CityController } = require('../../controllers')
const { CityMiddlewares } = require('../../middlewares')

const router = express.Router()

// /api/v1/airplanes POST
router.post('/',
    CityMiddlewares.validateCreateRequest,
        CityController.createCity)

router.get('/', 
        CityController.getCities)

router.get('/:id', 
        CityController.getCity)

router.delete('/:id', 
        CityController.destroyCity)

module.exports = router