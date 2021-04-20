import Student from './Student'

const Header = ({ name, major, interest, onAdd, showAdd }) => {
    return (
        <header>
            <button class={showAdd ? 'btn btn-warning float-right' : 'btn btn-success btn btn-primary float-right'} onClick={onAdd}>{showAdd ? 'Close' : 'Add'}</button>
            <Student name={name} 
            major={major} 
            interest={interest}/>
        </header>
    )
}

export default Header
