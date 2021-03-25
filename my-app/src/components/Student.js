const Student = ({ name, major, interest }) => {
    return (
        <div className="border m-2 p-3">
            <h2 className="bg-light">{name}</h2>
            <h5>{major}</h5>
            <p>{interest}</p>
        </div>
    )
}

export default Student
