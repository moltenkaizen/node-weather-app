# Node Weather App

#### Command line weather app that will get the weather

##### Features:
* Google Maps Geocoding so you can query by address, zipcode, or whatever google geocoding api supports
* Gets weather data from Dark Sky weather api

##### Usage:
```DARK_SKY_API=your-api-key node app.js --address your-address-or-zipcode```

##### Example Output:
```
$ DARK_SKY_API=api-key node app.js --address 90210
Beverly Hills, CA 90210, USA
It is 64.52°F but feels like 64.52°F

```