import React from 'react'
import {Link} from 'react-router-dom'


const ProjectItem = ({repoName, languages,repoRoute, repoUri}) => {
    const items = languages.map((element)=>
    <li>{element}</li>)
  return (
    <Link className='card' to={`/projects/${repoRoute}`}>
        {/* <img src={reactLogo} alt="project-image" /> */}
        <div className='project-info'>
            <h3 className='card-title' >{repoName}</h3>
            <br />
            <h3 >Languages and technologies</h3>
            <div className='languages'>
                <ol>
                    {items}
                </ol>
            </div>
        </div>
    </Link>
  )
}

export default ProjectItem