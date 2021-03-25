import { useState } from 'react'

import Header from './components/Header'
import Projects from './components/Projects'

function App() {
  const [projects, setProjects] = useState([
    {
        "id" : '1',
        "project_name" : "PHP Laravel API",
        "due_date" : "February 20, 2021"
    },
    {
        "id" : '2',
        "project_name" : "Python Django Web application",
        "due_date" : "March 20, 2021"
    },
    {
        "id" : '3',
        "project_name" : "Angular front end",
        "due_date" : "June 20, 2021"
    },
])

// Delete Task
const deleteProject = (id) => {
  setProjects(projects.filter((project) => project.id !== id))
}

  return (
    <div className='container-fluid'>
      <div className="row">
        <div className="col"></div>
          <div className="col">

            <Header name='Anderson Ferraz'
                    major='Information System - Web Application Development'
                    interest='Looking forward to continuous learning. Web interface design, Client and server-side scripting, Web frameworks, Mobile application development.' />

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
