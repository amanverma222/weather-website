const request = require('postman-request')
const geocode = (address,callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW1hbjAyMyIsImEiOiJjbDVsYW9vMm4waTFuM2tvMWVzMDN5NTVuIn0.qdwSxNHVB21gLoDAMWXXVA&limit=1'
    request({url, json: true}, (error,{body} = response) => {
        if(error){
            callback('Unable to connect to the services please check your internet connection!', undefined)
        } else if(body.features.length === 0) {
            callback('Unable to find the location', undefined)
        } else{
            callback(undefined, {
                latitude: body.features[0].center[0],
                longitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    } )

}

module.exports = geocode
   
