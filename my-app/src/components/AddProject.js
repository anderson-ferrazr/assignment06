import { useState } from 'react'

const AddProjects = ({ onAdd }) => {
    const [project_name, setText] = useState('')
    const [date_created, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!project_name) {
            alert('Please add a project')
            return
        }

        onAdd({ project_name, date_created, reminder })

        setText('')
        setDate('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-group'>
                <label>Project:</label>
                <input type='text' placeholder='Add Project' className='form-control' 
                value={project_name} 
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-group'>
                <label>Day and Time:</label>
                <input type='text' placeholder='Add Project Day and Time' className='form-control'
                value={date_created} 
                onChange={(e) => setDate(e.target.value)}  />
            </div>
            {/* <div className='form-check form-group'>
                <input type='checkbox' className="form-check-input"
                checked={reminder}
                value={reminder} 
                onChange={(e) => setReminder(e.currentTarget.checked)}  />
                <label className="form-check-label">Set Reminder</label>
            </div> */}

            <input type='submit' value='Save Project' className='btn btn-block btn-primary mb-2' />
        </form>
    )
}

export default AddProjects