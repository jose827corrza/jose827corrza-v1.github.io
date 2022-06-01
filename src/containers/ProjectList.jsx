import React from 'react'
import ProjectItem from '../components/ProjectItem'

const ProjectList = () => {
  return (
    <div className='project-list'>
        <ProjectItem repoName={"Backend post API with websocket"}  languages={["Go"]} repoRoute={"go-websockets"}/>
        <ProjectItem repoName={"Backend ecommerce with Nest"}  languages={["Typescript","MongoDB",""]} repoRoute={'back-nest'}/>
        <ProjectItem repoName={"Ecommerce with TS"}  languages={['Typescript']} repoRoute={'back-typescript'}/>
        <ProjectItem repoName={"Ecommerce using  express"}  languages={["Javascript"]} repoRoute={'back-express'}/>
        <ProjectItem repoName={"Dealing tasking"}  languages={["Kotlin"]} repoRoute={'dealing-tasking'}/>
        <ProjectItem repoName={"Poke-InfoPedia"}  languages={["Kotlin"]} repoRoute={'pokemon-pedia'}/>
        <ProjectItem repoName={"Task app using React Native"}  languages={["Javascript"]} repoRoute={'task-react-native'}/>
    </div>
  )
}

export default ProjectList