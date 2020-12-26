# Rain Barrel

Rain Barrel ⛅ An Automated Weather Data Collection Service.

  - Collects current weather data on a location using a zip code
  - Uses multiple sources to average out data
  - Data gathered is periodically saved on Mongo Data base

<br />

### 🙏🏼 Attributes

Rain Barrel uses a number of other projects to work properly:

* [Wttr.in] - An console-oriented weather forecast service.
* [OpenWeather] - OpenWeather provides historical, current and forecasted weather data via light-speed APIs

<br />

### ⌨ Installation

Rain Barrel was created using [Node.js](https://nodejs.org/) v12.18.1. Previous versions of Node have not been tested yet.

 Install the dependencies and devDependencies.
```sh
$ cd rain-barrel
$ npm install
```

Add environment variables
Create a default.json file in /rain-barrel/config/default.json
Fill in the environmental variables with your values

```json 
{
  "port": 5000,
  "mongoUri": "mongo-Uri-From-Mongodb.com/cloud/atlas",
  "updaterFreqMin": 60,
  "zipcode": "12345",
  "openWeatherMapKey": "api-Key-For-Openweathermap.org/",
  "printData": true
}
```

Starting development environment
```sh
$ npm run dev
```

Starting production environment

```sh
$ npm run build
$ npm run start
```

<br />

### ⚖ License
----

MIT


   [Wttr.in]: <https://github.com/chubin/wttr.in>
   [OpenWeather]: <https://openweathermap.org/>
   [node.js]: <http://nodejs.org>


<br />

### ☑ Tasks

- [x] Refactor some files that have functions into a utils folder or something similar
- [x] Create a routes folder where you will have the route to grab our data through json
- [ ] Decide how you will delete old data to prevent the database from getting too big (delete after 1 year? etc.)
- [x] Write up this README.md (show how to set this app up with config/default.json, etc.)
- [x] When grabbing data, use a few different APIs and average out the data from all APIs to get an average temperature
