const request = require('request');

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=1bbd941fb0ad031bfec0791d470a73cf&query=${lat},${long}&units=f`;

    request({ url, json: true }, (error, { body }) => {
        if (error) {
                callback(`Unable to connect to weather service!`, undefined);
        } else if (body.error)  {
            callback(`Unable to find location`, undefined);
        } else {
            callback( undefined, `${body.current.weather_descriptions[0]} it is currently ${body.current.temperature} degrees. It feels like ${body.current.feelslike} degrees!`)
        }
    })
}

module.exports = forecast;