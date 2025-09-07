const {StatusCodes} = require("http-status-codes")

const info = (req, res) => {
    res.status(StatusCodes.OK).json({
        msg: "Api is live",
        success: true,
        error: {},
        data: {}
    
    })

}

module.exports = {
    info
}