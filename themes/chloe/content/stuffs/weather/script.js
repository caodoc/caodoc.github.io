const OPENWEATHER_API_KEY = "f63ecbfc9f0066a577aa99e725b5d81a";

function WeatherCheck(city_name)
{
    //https://openweathermap.org
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${OPENWEATHER_API_KEY}`)
        .then(response => response.json())
        .then(data =>
        {
            console.log(data);
            const lat = data.coord.lat;
            const lng = data.coord.lon;

            document.getElementById("current_description").innerHTML = `Description: ${data.weather[0].description}`;
            
            //https://open-meteo.com/en/docs
            fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max&current_weather=true&timezone=auto&forecast_days=1`)
            .then(response => response.json())
            .then(data =>
            {
                console.log(data);

                const unit_temperature = "°C";
                const unit_windspeed = "km/h";
                var daytime = data.current_weather.time.toString();
                daytime = daytime.slice(11, 13);
                if (daytime >= 0 && daytime <= 18)
                {
                    document.getElementById("header").innerHTML = "Your Weather ☀️";
                }
                else
                {
                    document.getElementById("header").innerHTML = "Your Weather 🌙";
                }
                document.getElementById("current_temperature").innerHTML = `Tempature: ${data.current_weather.temperature}${unit_temperature}`;
                document.getElementById("current_windspeed").innerHTML = `Wind Speed: ${data.current_weather.windspeed}${unit_windspeed}`;
                document.getElementById("daily_max_temperature").innerHTML = `Max: ${data.daily.temperature_2m_max}${unit_temperature}`;
                document.getElementById("daily_min_temperature").innerHTML = `Min: ${data.daily.temperature_2m_min}${unit_temperature}`;
                var time_sunrise = data.daily.sunrise.toString();
                document.getElementById("sunrise").innerHTML = `Sunrise: ${time_sunrise.slice(11)}a.m.`;
                var time_sunset = data.daily.sunset.toString();
                document.getElementById("sunset").innerHTML = `Sunset: ${time_sunset.slice(11)}p.m.`;
                document.getElementById("max_windspeed").innerHTML = `Max Wind Speed: ${data.daily.windspeed_10m_max}${unit_windspeed}`;
                document.getElementById("timezone").innerHTML = `Timezone: ${data.timezone} (UTC${data.timezone_abbreviation})`;
                document.getElementById("warning").innerHTML = "";
            })
            .catch(error =>
            {
                document.getElementById("warning").innerHTML = "There is an error while fetching that city\'s name, please check it!";
                console.error("An error occurred while fetching weather data: ", error);
            });
        })
        .catch(error =>
        {
            document.getElementById("warning").innerHTML = "There is an error while fetching that city\'s name, please check it!";
            console.error("An error occurred while fetching weather data: ", error);
        });
}

let check = "";

function InputCheck(city_name)
{
    if (city_name === "")
    {
        document.getElementById("warning").innerHTML = "Please give city's name!";
    }
    else if (check !== city_name)
    {
        check = city_name;
        WeatherCheck(city_name);
    }
    else if (check === city_name)
    {
        document.getElementById("warning").innerHTML = "Already checked!";
    }
}

//Get city input
document.getElementById("submit").addEventListener("click", () =>
{
    const city_name = document.getElementById("city_name").value;
    InputCheck(city_name);
});

document.addEventListener("keydown", function(event)
{
    if (event.key === 'Enter')
    {
        const city_name = document.getElementById("city_name").value;
        InputCheck(city_name);
    }
});

/*          ATTENTION: Won't work on Github, Vercel because they block http request!!!

//Get current IP Address
let ip = ""
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data =>
    {
        ip = data.ip;
        console.log(`Current IP address: ${ip}`);
    })
    .catch(error =>
    {
        console.error("An error occurred while fetching the IP address: ", error);
    });

// Convert IP address to latitude & longitude
fetch(`http://ip-api.com/json/${ip}`)
    .then(response => response.json())
    .then(data =>
    {
        const lat = data.lat;
        const lng = data.lon;
        const unit_temperature = "°C";
        const unit_windspeed = "km/h";
        console.log(`Latitude: ${lat}`);
        console.log(`Longitude: ${lng}`);
        //https://open-meteo.com/en/docs
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max&current_weather=true&timezone=auto&forecast_days=1`)
            .then(response => response.json())
            .then(data =>
            {
                console.log(data);
                var daytime = data.current_weather.time.toString();
                daytime = daytime.slice(11, 13);
                if (daytime >= 0 && daytime <= 12)
                {
                    document.getElementById("header").innerHTML += "☀️";
                }
                else
                {
                    document.getElementById("header").innerHTML += "🌙";
                }
                document.getElementById("current_temperature").innerHTML += data.current_weather.temperature + unit_temperature;
                document.getElementById("current_windspeed").innerHTML += data.current_weather.windspeed + unit_windspeed;
                document.getElementById("daily_max_temperature").innerHTML += data.daily.temperature_2m_max + unit_temperature;
                document.getElementById("daily_min_temperature").innerHTML += data.daily.temperature_2m_min + unit_temperature;
                var time_sunrise = data.daily.sunrise.toString();
                document.getElementById("sunrise").innerHTML += time_sunrise.slice(11) + "a.m.";
                var time_sunset = data.daily.sunset.toString();
                document.getElementById("sunset").innerHTML += time_sunset.slice(11) + "p.m.";
                document.getElementById("max_windspeed").innerHTML += data.daily.windspeed_10m_max + unit_windspeed;
                document.getElementById("timezone").innerHTML += `${data.timezone} (UTC${data.timezone_abbreviation})`;
            })
            .catch(error =>
            {
                console.error("An error occurred while fetching weather data: ", error);
            });
    })
    .catch(error =>
    {
        console.error("An error occurred while fetching geolocation data: ", error);
    });
*/