const CurdRepository = require('./crud-repository')
const { Airports } = require("../models")

class AirportRepository extends CurdRepository {
    constructor() {
        super(Airports)
    }
}

module.exports = AirportRepository;