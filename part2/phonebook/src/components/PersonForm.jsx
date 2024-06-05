const PersonForm = ({onSearch, value, handleNameChange}) => {
    return (
        <div>
            <form onSubmit={onSearch}>
                <div>
                    name: <input 
                        value={value}
                        onChange={handleNameChange} />
                </div>
                <div>
                    <button type="submit">find</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm