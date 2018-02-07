const yargs = require('yargs');
const axios = require('axios'); 

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

let encodedAddress = encodeURIComponent(argv.address);
let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response)=>{
   if(response.data.status === 'ZERO_RESULT'){
       throw new Error('Unable to find that address.');
   }
   let lat = response.data.results[0].geometry.location.lat;
   let lng = response.data.results[0].geometry.location.lng;
   let weatherUrl = `https://api.darksky.net/forecast/946ead7d406d8d59e884861fb1e94a5a/${lat},${long}` 
   console.log(response.data.results[0].formatted_address)
   return axios.get(weatherUrl);
}).then((response)=>{
    let temperature = response.data.currently.temperature;
    let apparentTemperature = response.data.currently.apparentTemperature;
    console.log(`its currently ${temperature} but it feels like ${apparentTemperatur} `)
}).catch((e)=>{
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connet to API servers')
    }else{
        console.log(e.message);
    }
})




//946ead7d406d8d59e884861fb1e94a5a