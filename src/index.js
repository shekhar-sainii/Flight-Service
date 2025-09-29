const express = require("express")
const {ServerConfig, Logger} = require("./config")
const apiRoutes = require("./routes")

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/api", apiRoutes)

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    // Logger.info("Successfully Started the server", {})
    const { City, Airports } = require('./models')
    // const bengaluru = await City.findByPk(1);
    // console.log(bengaluru);
    // const airport = await Airports.create({name: 'Kempogeda Airport', code: 'BLR', cityId: 1});
    // const hbairport = await bengaluru.createAirport({name: 'Hubblli Airport', code : 'HBL'})
    // console.log(hbairport);
    // const airportBkl = await bengaluru.getAirports();
    // console.log(airportBkl);
    // const bgairport  = await Airports.findByPk(14);
    // await bengaluru.removeAirports(bgairport)
    // await City.destroy({
    //     where: {
    //         id: 9
    //     }
    // })
    
    
})