/**
 * Created by dude on 7/2/17.
 */
const yargs = require('yargs');
const geocode = require('./geocode/geocode');

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

geocode.geocodeAddress(argv.address, (error, results) => {
  if (error) {
    console.log(error);
  }  else {
    console.log(JSON.stringify(results, undefined, 2));
  }
});


