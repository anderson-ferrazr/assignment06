const Student = ({ name, major, interest, onAdd, showAdd }) => {
    return (
        <div>
            <h2 className="mb-3">{name}</h2>
            <h5>{major}</h5>
            <p>{interest}</p>
        </div>
    )
}

export default Student
