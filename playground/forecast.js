const request = require('request')
const geocode = require('./../geocode/geocode')



request({
    url: 'https://api.darksky.net/forecast/946ead7d406d8d59e884861fb1e94a5a/25.2048493,55.2707828',
    json: true
},(error, response, body)=>{
    if(error){
        console.log('unable to connect to forecast.io server')
    } else if(!error && response.statusCode === 200) {
        console.log(body.currently.temperature);
    } else {
        console.log('Unable to fetch weather')
    }
})