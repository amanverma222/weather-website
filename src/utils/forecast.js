const request = require('postman-request')
const forecast = (longitude,latitude,callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=0d9864042f66562e3a78cccd804ec060&query=' + latitude + ',' + longitude + '&units=m'



    request({url, json: true}, (error,{body} = response) => {
        if(error) {
            callback('Unable to connect to the services', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)

        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature+  ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.') 
            // callback(undefined, response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')

        }
    })

}


module.exports = forecast