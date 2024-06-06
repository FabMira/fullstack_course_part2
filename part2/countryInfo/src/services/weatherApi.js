import axios from "axios"
const api_key = import.meta.env.VITE_SOME_KEY
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q='

const getCityWeather = (city, country) => {
    return axios.get(`${baseURL}${city},${country}&APPID=${api_key}`)
}

export default {
    getCityWeather: getCityWeather
} 