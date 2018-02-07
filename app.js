const request = require('request')
const yargs = require('yargs');
const geocode = require('./geocode/geocode')
const weather = require('./weather/weather')

const argv = yargs
.options({
    a: {
        demand: true,
        alias: 'address',
        describe: 'Address to fetch weather for',
        string: true
    }
})
.help()
.alias('help','h')
.argv;

let geometry = geocode.geocodeAddress(argv.address, (error, results)=> {
   if(error){
       console.log(error)
   } else {
       console.log(results.address)
       //chain callback
       weather.getWeather(results.latitude,results.longitude,(error, weatherResult)=> {
        if(error){
            console.log(error)
        }else{
          console.log(
              `it's currently ${weatherResult.Temperature}, but it feels like ${weatherResult.apparentTemperature}`
          )
        }
      })
   }
});





//946ead7d406d8d59e884861fb1e94a5a