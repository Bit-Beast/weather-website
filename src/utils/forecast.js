const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/29c8891f8ef9087cfe9368a42b5171e6/' + latitude + ',' + longitude +'?units=si'

    request( {  url, json: true}, (error, {body}) => {
        if(error)
        {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        }
        else {
            callback(undefined, 
            body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degree out. There is " + body.currently.precipProbability + " % chance of rain" 
            )
        }
    })
}

module.exports = forecast