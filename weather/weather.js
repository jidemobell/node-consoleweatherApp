const request = require('request')



const getWeather = (lat,long,callback)=> {

    
request({
    url: `https://api.darksky.net/forecast/946ead7d406d8d59e884861fb1e94a5a/${lat},${long}`,
    json: true
},(error, response, body)=>{
    if(error){
        callback('unable to connect to forecast.io server')
    } else if(!error && response.statusCode === 200) {
        callback(undefined, {
            Temperature : body.currently.temperature,
            apparentTemperature: body.currently.apparentTemperature
        })
    } 
})
}

module.exports = {
   getWeather
}