import React from 'react'
import { useParams } from 'react-router-dom';
import {projectList} from '../helpers/ProjectList';

import * as ai from 'react-icons/ai';
import * as tb from 'react-icons/tb';


import '../styles/projectDisplay.css';


function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id];
        

  return (

    <div className='project'>
        <h1> {project.name} </h1>
        <img src={project.image} />
        <p>
            <b>Skills:</b> {project.skills}
        </p>

        <a href={project.link} target="_blank">
          {project.icon === "github" ? <ai.AiFillGithub /> : <tb.TbWorld />}
        </a>
        
    </div>
  )
}

export default ProjectDisplay
