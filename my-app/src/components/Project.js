import { FaTrashAlt } from 'react-icons/fa'

const Project = ({ project, onDelete }) => {
    return (
        <p className="border p-1">
            <span className="float-right mt-0 text-danger">
                <FaTrashAlt style={{cursor: 'pointer'}} onClick={() => onDelete(project.id)} />
            </span>
            {project.project_name}<br />{project.due_date} 
        </p>
    )
}

export default Project
