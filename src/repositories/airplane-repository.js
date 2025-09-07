const CurdRepository = require('./crud-repository')
const { Airplane } = require("../models")

class AirplaneRepository extends CurdRepository {
    constructor() {
        super(Airplane)
    }


}

module.exports = AirplaneRepository;