const FindCountries = ({value, handleNameChange}) => {
    return (
        <div>
            <span className="negrita">Find countries: </span><input 
                    value={value}
                    onChange={handleNameChange} />
        </div>
    )
}

export default FindCountries