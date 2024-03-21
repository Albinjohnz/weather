const weatherData = {
    coord: {
        lon: 72.8479,
        lat: 19.0144
    },
    weather: [
        {
            id: 711,
            main: "Smoke",
            description: "smoke",
            icon: "50n"
        }
    ],
    base: "stations",
    main: {
        temp: 82.38,
        feels_like: 83.86,
        temp_min: 82.38,
        temp_max: 82.38,
        pressure: 1009,
        humidity: 54
    },
    visibility: 2500,
    wind: {
        speed: 4.61,
        deg: 170
    },
    clouds: {
        all: 0
    },
    dt: 1669572570,
    sys: {
        type: 1,
        id: 9052,
        country: "IN",
        sunrise: 1669512183,
        sunset: 1669552175
    },
    timezone: 19800,
    id: 1275339,
    name: "Mumbai",
    cod: 200
};

// Display the country and place
const country = weatherData.sys.country;
const place = weatherData.name;
console.log("Country:", country);
console.log("Place:", place);

// Display the temperature and minimum temperature
const temperature = weatherData.main.temp;
const minTemperature = weatherData.main.temp_min;
console.log("Temperature:", temperature);
console.log("Minimum Temperature:", minTemperature);

// Display the wind speed and pressure
const windSpeed = weatherData.wind.speed;
const pressure = weatherData.main.pressure;
console.log("Wind Speed:", windSpeed);
console.log("Pressure:", pressure);
