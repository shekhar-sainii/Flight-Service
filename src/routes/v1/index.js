const express= require("express")
const { InfoController } = require("../../controllers")
const router = express.Router()
const airplaneRoutes = require('./airplane-routes')
const citiesRoutes = require('./city-routes')
const airportRoutes = require('./airport-routes')
const flightRoutes = require('./flight-routes')


router.use('/airplanes', airplaneRoutes)
router.use('/airports', airportRoutes)
router.use('/cities', citiesRoutes)
router.use('/flights', flightRoutes)
router.get('/info', InfoController.info)

module.exports = router