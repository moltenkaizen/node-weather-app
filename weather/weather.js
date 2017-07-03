/**
 * Created by dude on 7/3/17.
 */
const request = require('request');

exports.getWeather = (lat, lng, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${process.env.DARK_SKY_API}/${lat},${lng}`,
    json: true
  }, (error, response, body) => {
    if (error) {
      callback('Unable to connect to weather server');
    }
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather');
    }
  });
};
