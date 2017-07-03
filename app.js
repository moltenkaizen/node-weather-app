/**
 * Created by dude on 7/2/17.
 */
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address of weather query',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.address, (geocodeError, geocodeResults) => {
  if (geocodeError) {
    console.log(geocodeError);
  }  else {
    console.log(geocodeResults.address);
    weather.getWeather(geocodeResults.latitude, geocodeResults.longitude, (weatherError, weatherResults) => {
      if (weatherError) {
        console.log(weatherError);
      } else {
        console.log(`It is ${weatherResults.temperature}\xB0F but feels like ${weatherResults.apparentTemperature}\xB0F`);
      }
    });
  }
});

