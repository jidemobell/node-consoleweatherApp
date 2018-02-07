const request = require('request');
const geocodeAddress = (address) => {
    return new Promise((resolve,reject)=>{
        let encodedAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
            json: true
        }, (error, response, body)=> {
            if(error){
                reject('unable to connect to google servers')
            }else if(body.status === 'ZERO_RESULTS'){
                reject('unable to find that address')
            }else if(body.status === 'OK'){
                resolve( {     
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
            
        })
});
}

geocodeAddress('dubai').then((res)=>{
     console.log(JSON.stringify(res,undefined,2))
}).catch((errorMessage)=> {
    console.log(errorMessage)
})