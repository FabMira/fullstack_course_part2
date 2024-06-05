const ListOfCountries = ({id: key, name}) => {
        return (
                <p key={key}>{name}</p>
        )
    }

    export default ListOfCountries