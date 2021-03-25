import Student from './Student'

const Header = ({ name, major, interest }) => {
    return (
        <header>
            <Student name={name} 
            major={major} 
            interest={interest}/>
        </header>
    )
}

export default Header
