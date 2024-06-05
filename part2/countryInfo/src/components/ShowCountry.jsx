import classNames from 'classnames'

const ShowCountry = ({country}) => {
    if (country.length != 0) {
        return (
        <div key={country.id}>
            <h2>{country.name}</h2>
            <></>
            <p><span className='negrita'>Capital:</span> {country.capital}</p>
            <p><span className='negrita'>Área:</span> {country.area}</p>
            <></>
            <h3>Languages:</h3>
            <></>
            <ul>
            {country.languages.map(language =>
                <li key={language}>{language}</li>
            )}
            </ul>
            <span className={classNames('fi', 'fi-'+country.tld)} style={{width: 20 + 'rem', height: 15 + 'rem', border: 1 + 'px solid black'}}></span> 
        </div>
        )
    }
}

export default ShowCountry