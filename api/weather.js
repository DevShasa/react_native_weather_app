import { apiKey } from "../Constants";

const forecastUrl = new URL(`https://api.weatherapi.com/v1/forecast.json`)

function getForecastApi(params){
    const forecastUrl = new URL(`https://api.weatherapi.com/v1/forecast.json`)
    const forecastUrlSearchParams = new URLSearchParams(forecastUrl.search)
    forecastUrlSearchParams.append("key", apiKey)
    forecastUrlSearchParams.append("q", params.cityName)
    forecastUrlSearchParams.append("days", params.days)


    return forecastUrl.toString()+"?"+forecastUrlSearchParams.toString()

}
 

export const weatherImages = {
    'Partly cloudy': require('../assets/images/partlycloudy.png'),
    'Moderate rain': require('../assets/images/moderaterain.png'),
    'Patchy rain possible': require('../assets/images/moderaterain.png'),
    'Sunny': require('../assets/images/sun.png'),
    'Clear': require('../assets/images/sun.png'),
    'Overcast': require('../assets/images/cloud.png'),
    'Cloudy': require('../assets/images/cloud.png'),
    'Light rain': require('../assets/images/moderaterain.png'),
    'Moderate rain at times': require('../assets/images/moderaterain.png'),
    'Heavy rain': require('../assets/images/heavyrain.png'),
    'Heavy rain at times': require('../assets/images/heavyrain.png'),
    'Moderate or heavy freezing rain': require('../assets/images/heavyrain.png'),
    'Moderate or heavy rain shower': require('../assets/images/heavyrain.png'),
    'Moderate or heavy rain with thunder': require('../assets/images/heavyrain.png'),
    'Mist': require('../assets/images/mist.png'),
    'other': require('../assets/images/moderaterain.png')
}