import React from 'react'
import './projects.css'
import { Link } from "react-router-dom"
import { projects } from './Data.js'

function Projects() {
    return (
        <div className='bg' style={{ backgroundImage: "url(images/pda-bg01.png)" }}>
            <div className="projects-container">
                <div className="projects-wrapper">
                    {projects.map(project => 
                        <Link key={project.id}
                        to={{
                            pathname: `/projects/${project.id}`,
                            state: {
                            id: project.id,
                            title: project.title, 
                            body: project.body,
                            images: project.images
                            },
                        }}
                        >
                            <div style={{ backgroundImage: `url(images/${project.image})` }} className="project-cell">
                                <h2 className="project-cell-title">{project.title}</h2>
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Projects
