const CurdRepository = require('./crud-repository')
const { Flight, Airplane, Airports } = require("../models");
const { Sequelize } = require('sequelize');

class FlightRepository extends CurdRepository {
    constructor() {
        super(Flight)
    }

    async getAllFlights(filter, sort) {
        const response = await Flight.findAll({
            where : filter,
            order: sort,
            include: [
                {
                    model: Airplane,
                    required: true,
                    as: 'airplane_detail'
                },
                {
                    model: Airports,
                    required: true,
                    // as : 'DepartureAirport',
          as: 'departure_airport',
                    on : {
                        col1 : Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=", Sequelize.col("departure_airport.code"))
                    },
                }
            ]
        })
        return response;
    }
}

module.exports = FlightRepository;