import { useState, useEffect } from 'react'

import Header from './components/Header'
import Projects from './components/Projects'
import AddProject from './components/AddProject'

function App() {
  const [showAddProject, setShowAddProject] = useState(false)

  const [projects, setProjects] = useState([])

  useEffect(() =>  {
    const getProjects = async () => {
      const projectsFromServer = await fetchProjects()
      setProjects(projectsFromServer)
    }

    getProjects()
  }, [])

//Fetch Projects
const fetchProjects = async () => {
  const res = await fetch('https://isu354.com/taskmanager/api/projects')
  const data = await res.json()

  return data
}

// Add Project
const addProject = async (project) => {
  const res = await fetch('https://isu354.com/taskmanager/api/projects', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(project)
  })

  const data = await res.json()

  setProjects([...projects, data])

  // const id = Math.floor(Math.random() * 10000) + 1
  // const newProject = { id, ...project}
  // setProjects([...projects, newProject])
}

// Delete Project
const deleteProject = async (id) => {
  await fetch(`https://isu354.com/taskmanager/api/projects/id/${id}`, {
    method: 'DELETE',
  })
  setProjects(projects.filter((project) => project.id !== id))
}

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col"></div>
          <div className="col">

          <div className="border m-2 p-2">
              <Header onAdd={() => setShowAddProject(!showAddProject)} showAdd={showAddProject} 
                      name='Anderson Ferraz'
                      major='Information System - Web Application Development'
                      interest='Looking forward to continuous learning. Web interface design, Client and server-side scripting, Web frameworks, Mobile application development.' />

              {showAddProject && <AddProject onAdd={addProject} />}
            </div>
            <div className="border m-2 p-2">

            <h4>Projects</h4>

              {projects.length > 0 ? (
              <Projects projects={projects} onDelete={deleteProject} />
              ) : (
                'There is no project in your list'
              )}
            </div>
          </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default App;
