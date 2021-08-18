import React from 'react'
import { useLocation } from 'react-router-dom';
import './project.css'

function Project() {
    const location = useLocation()
    const { id, title, body, images } = location.state

    const image_list = images.split(" ")

    return (
        <div key={id} className='bg' style={{ backgroundImage: "url(images/pda-bg01.png)" }}>
           <h2 className="project-title">{title}</h2>
           <p className="project-body">{body}</p>
           {image_list.map(image =>
                <div key={image}>
                    <img className="project-image" src={`/images/${image}`} alt="" />
                </div>
            )}
        </div>
    )
}

export default Project
