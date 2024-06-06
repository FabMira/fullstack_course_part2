import { useState, useEffect } from 'react'
import countriesAPI from './services/countriesAPI'
import FindCountries from './components/FindCountries'
import ShowCountry from './components/ShowCountry'
import ListOfCountries from './components/ListOfCountries'
import weatherAPI from './services/weatherApi'
import ShowWeather from './components/ShowWeather'


const App = () => {
  const [value, setValue] = useState('')
  const [country, setCountry] = useState(null)
  const [allCountries, setAllCountries] = useState([])
  const [list, setList] = useState([])
  const [countryObject, setCountryObject] = useState([])
  const [weatherObject, setWeatherObject] = useState([])

    useEffect(() => {
      countriesAPI
      .getAll()
      .then(response => {
      const countryList = response.data.map((name, index) => name = response.data[index].name.common)
      setAllCountries(countryList)
      })
    }, [])

  useEffect(() => {
    // omitir si el país no está definido
    if (country) {
      countriesAPI
        .getSpecific(country)
        .then(response => {
          const countryData = response.data
          const relevantInfo = {}
          relevantInfo.id = allCountries.indexOf(countryData.name.common)
          relevantInfo.name = countryData.name.common
          relevantInfo.capital = countryData.capital[0]
          relevantInfo.area = countryData.area
          relevantInfo.languages = Object.values(countryData.languages)
          relevantInfo.flag = countryData.flag
          relevantInfo.tld = countryData.tld[0].slice(1)
          setCountryObject(relevantInfo)
          weatherAPI
          .getCityWeather(relevantInfo.capital.toString(), relevantInfo.tld.toString())
          .then(response => {
            const weatherData = response.data
            const weatherInfo = {}
            weatherInfo.id = weatherData.id
            weatherInfo.city = weatherData.name
            weatherInfo.icon = weatherData.weather[0].icon
            weatherInfo.temperature = (weatherData.main.temp - 273.15).toFixed(2)
            weatherInfo.wind = weatherData.wind.speed
            setWeatherObject(weatherInfo)
          })
        })
    }
  }, [country])

  const handleChange = (event) => {
    const newValue = event.target.value
    const searchList = allCountries
      .filter(country => country.toLowerCase()
      .includes(event.target.value.toLowerCase()))
      if (searchList.length == 1) {
        setCountry(searchList.toString())
      } else {
        setCountry(null)
        setCountryObject([])
      }
      setList(searchList)
    setValue(newValue)
    if (event.target.value == '') {setList([])}
  }

  const handleClick = (name) => {
    setList([name])
    setCountry(name)
  }

  return (
    <div>
      {allCountries.length === 0
        ? 'loading'
        : <FindCountries value={value} handleNameChange={handleChange} />
      }
      {list.length == 1  && 
        <ShowCountry country={countryObject} />
      }
      {list.length == 1 &&
        <ShowWeather weatherInfo={weatherObject} />
      }
      {(list.length > 1 && list.length <= 10) 
      && list.sort().map((country) =>
        <ListOfCountries key={allCountries.indexOf(country)} name={country} handleClick={handleClick} />)}
      {list.length > 10 ? 'Too many matches, specify another filter' : ''}
    </div>
  )
}

export default App