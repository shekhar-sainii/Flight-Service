const CurdRepository = require('./crud-repository')
const { City } = require("../models")

class CirtRepository extends CurdRepository {
    constructor() {
        super(City)
    }


}

module.exports = CirtRepository;