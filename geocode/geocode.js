const request = require('request');

const geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address);
request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body)=> {
 // console.log(JSON.stringify(body.results[0].geometry.location,undefined,2))
    if(error){
        //run if the error object exist
        callback('unable to connect to google servers')
    }else if(body.status === 'ZERO_RESULTS'){
        callback('unable to find that address')
    }else if(body.status === 'OK'){
        //here we use undefined for first arguement since
        //an error message will not be provided when things go well
        //when there is no error that portion is undefined
        result = 'red'
        callback(undefined, {     
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });
    }
    
})

}


module.exports = {
    geocodeAddress
}