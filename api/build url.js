

function getForecastApi(params){
    const forecastUrl = new URL(`https://api.weatherapi.com/v1/forecast.json`)
    const forecastUrlSearchParams = new URLSearchParams(forecastUrl.search)
    forecastUrlSearchParams.set("key", "asdasdqa23423d887d8f7as8d7fa9sd8")
    forecastUrlSearchParams.set("q", params.cityName)
    forecastUrlSearchParams.set("days", params.days)

    return forecastUrl.toString()+"?"+forecastUrlSearchParams.toString()
}

console.log(getForecastApi({cityName:"Mombasa", days:"234"}))