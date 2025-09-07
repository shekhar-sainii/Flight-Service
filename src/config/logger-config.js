const {format, createLogger, transports} = require("winston")

const {combine, timestamp, printf} = format;

const customFormat = printf(({level, message,label, timestamp}) => {
    return `${timestamp} : ${level} : ${message}`;

})

const logger = createLogger({
    format: combine(
        timestamp({format: 'YYYY-MM-DD HH'}),
        customFormat
    ),
    transports: [
        new transports.Console(),
        new transports.File({filename: 'combined.log'})
    ]
});

module.exports = logger