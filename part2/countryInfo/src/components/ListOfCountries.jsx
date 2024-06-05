const ListOfCountries = ({id: key, name, handleClick}) => {
        return (
            <div key={key}>
                {name} <button className="button" onClick={() => handleClick(name)}>Show</button>
            </div>
        )
    }

    export default ListOfCountries