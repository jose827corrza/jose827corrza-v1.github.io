import React from 'react'
import { GoMarkGithub } from 'react-icons/go';
import { FaExternalLinkAlt } from 'react-icons/fa';


const ProjectItem = ({repoName, languages, isDeploy, gitUrl, deployUrl, description}) => {
    
  return (
    <div className='card'>
        {/* <img src={reactLogo} alt="project-image" /> */}
        <div className='project-info'>
            <h3 className='card-title' >{repoName}</h3>
            <br />
            <p>{description}</p>
            
            {/* <div className='languages'>
                <ol>
                    {items}
                </ol>
            </div> */}
            <a href={gitUrl} className='contact'>
                <GoMarkGithub fill="#f7d708" size={24}/>
            </a>
            <a href={deployUrl} className='contact'>
            {!!isDeploy ? <FaExternalLinkAlt fill="#f7d708" size={24}/> : ""}
            </a>
            
        </div>
    </div>
  )
}

export default ProjectItem