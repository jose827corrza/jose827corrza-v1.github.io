import React from 'react'
import ProjectItem from '../components/ProjectItem'

const ProjectList = () => {
  return (
    <div className='project-list'>
      {
        projectsList.map((project) => (
          <ProjectItem
              key={project.Id}
              repoName={project.Name}
              description={project.Description}
              deployUrl={project.DeployUrl}
              gitUrl={project.RepoUrl}
              isDeploy={project.isDeployed}
              languages={project.Languages}
          />
        ))
      }
    </div>
  )
}

const projectsList = [
{
  Id: 1,  
  Name: "Go Store/TODO app Websockets",
    Description:
      "This project works as a backend for a store, it has products, that has relations with brands and categories, also allows to create users with priviledges. It also allow us to have a complete CRUD for tasks stored into the tasks table",
    Languages: ["Golang", "Postgres", "GORM"],
    RepoUrl: "https://github.com/jose827corrza/go-store-websockets",
    isDeployed: true,
    DeployUrl: 'https://jose827corrza.github.io/go-store-websockets/',
  },
  {
    Id: 2,
    Name: "Nest Geek Store",
    Description:
      "This is an API using Nest framework, using as DB Postgres, TypeORM is used to manage the migrations in the DB, the endpoint to create new  product are protected by an authentication ruled by JWT an role authorization.",
    Languages: ["Typescript", "NestJS", "TypeORM", "Postgres"],
    RepoUrl: "https://github.com/jose827corrza/nest_geek_store",
    isDeployed: true,
    DeployUrl: 'https://nest-geek-josedev-store.up.railway.app/docs/',
  },
  {
    Id: 3,
    Name: "Node Graphql Store with Auth",
    Description:
      "It is based from the node school in Platzi, but it is included a new spec through the use of GraphQL",
    Languages: ["Javascript", "TypeORM", "Postgres", "Graphql"],
    RepoUrl: "https://github.com/jose827corrza/node-store-graphql-api",
    isDeployed: true,
    DeployUrl: 'https://node-store-graphql-api-production.up.railway.app/docs/',
  },
  {
    Id: 4,
    Name: "TODO React app, local storage",
    Description:
      `A total functional frontend app, that helps to organize your tasks to do.
      For saving them, it is used the browser localStorage, and through navigation different pages are shown where you can create, or update a specific task.
      It uses HashRouter, it is usefull if you do not control your backend endpoints or if you want yo deploy as an static pace like gh-pages.`,
    Languages: ["Javascript", "React", "CSS"],
    RepoUrl: "https://github.com/jose827corrza/todos-react-app",
    isDeployed: true,
    DeployUrl: 'https://josedev-todo-app.netlify.app',
  },
  {
    Id: 5,
    Name: "TODO React app, local storage",
    Description:
      `Simple page use the essential React hooks. Consumes a Rick and Morty API to request the information showed`,
    Languages: ["Javascript", "React", "Tailwind"],
    RepoUrl: "https://github.com/jose827corrza/rickAndMorty-app",
    isDeployed: true,
    DeployUrl: 'https://rickzable-with-hooks.netlify.app/',
  },
   {
    Id: 6,
    Name: "Dealing Tasking Android app",
    Description:
      "This is an app that allows a complete CRUD with user's tasks, these are saved on a Firestore  collection, this helps to keep then updated on each device that uses the account.",
    Languages: ["Kotlin", "Compose"],
    RepoUrl: "https://github.com/jose827corrza/DealingTasking",
    isDeployed: true,
    DeployUrl:
      "https://play.google.com/store/apps/details?id=com.josedev.dealingtasking&hl=es_CO&gl=US",
  },
  {
    Id: 7,
    Name: "Pokedex Android native app",
    Description:
      "This is an app that consumes from a free remote API,  pokemon data, and allows to watch some specific data about each Pokemon.",
    Languages: ["Kotlin", "Compose"],
    RepoUrl: "https://github.com/jose827corrza/Poke-InfoPedia",
    isDeployed: true,
    DeployUrl:
      "https://play.google.com/store/apps/details?id=com.josedev.pokedex&hl=es_CO&gl=US",
  },
]


export default ProjectList