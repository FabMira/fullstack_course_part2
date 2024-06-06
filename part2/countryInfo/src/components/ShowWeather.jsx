import classNames from 'classnames'

const iconURL = 'https://openweathermap.org/img/wn/'

const ShowWeather = ({weatherInfo}) => {

    if (weatherInfo.length != 0) {
        return (
        <div key={weatherInfo.id}>
            <h2>Weather in {weatherInfo.city}</h2>
            <></>
            <p><span className='negrita'>Temperature: </span>{weatherInfo.temperature} degrees Celsius</p>
            <img src={`${iconURL}${weatherInfo.icon}@2x.png`} alt='icon for type of weather' />
            <p><span className='negrita'>Wind: </span>{weatherInfo.wind} m/s</p>
        </div>
        )
    }
}

export default ShowWeather