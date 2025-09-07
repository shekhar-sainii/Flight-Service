const { where } = require("sequelize");
const { Logger } = require("../config");

class CurdRepository {
    constructor(model) {
        this.model = model
    }

    // async create(data) {
    //     try {
    //         const response = await this.model.create(data);
    //         return response;
    //     } catch (error) {
    //         Logger.error('Something went wrong in the Crud Repo : create');
    //         throw error;
    //     }
    // }
    async create(data) {
            const response = await this.model.create(data);
            return response;
    }

    async destroy() {
        try {
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            })
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the curd Repo : destroy')
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;

        } catch (error) {
            Logger.error('Something went wrong in the curd Repo : get')
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll()
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the curd Repo : getAll');
            throw error;
        }
    }

    async update(id, data) { // Update col value -> data
        try {
            const response = await this.model.update(data,
                {
                    where: {
                        id: id
                    }
                }
            )
            return response;
        } catch (error) {
            Logger.error('Something went wrong in the curd Repo : update')
            throw error;
        }
    }
}

module.exports = CurdRepository;