import React from 'react'
import ProjectItem from '../components/ProjectItem'

const ProjectList = () => {
  return (
    <div className='project-list'>
        <ProjectItem 
          repoName={RepoList.nodeGraphql.name}  
          languages={RepoList.nodeGraphql.Languages} 
          deployUrl={RepoList.nodeGraphql.DeployUrl} 
          isDeploy={RepoList.nodeGraphql.isDeployed} 
          gitUrl={RepoList.nodeGraphql.RepoUrl}
          description={RepoList.nodeGraphql.Description}/>
        <ProjectItem 
          repoName={RepoList.backExpress.name}  
          languages={RepoList.backExpress.Languages} 
          deployUrl={RepoList.backExpress.Languages} 
          isDeploy={RepoList.backExpress.isDeployed} 
          gitUrl={RepoList.backExpress.RepoUrl}
          description={RepoList.backExpress.Description}
          />
        {/* <ProjectItem repoName={"Ecommerce with TS"}  languages={['Typescript']} deployUrl={'back-typescript'} isDeploy={false} gitUrl={}/>
        <ProjectItem repoName={"Ecommerce using  express"}  languages={["Javascript"]} deployUrl={'back-express'} isDeploy={true} gitUrl={}/> */}
        <ProjectItem 
          repoName={RepoList.backNest.Name}  
          languages={RepoList.backNest.Languages} 
          deployUrl={RepoList.backNest.DeployUrl} 
          isDeploy={RepoList.backNest.isDeployed} 
          gitUrl={RepoList.backNest.RepoUrl}
          description={RepoList.backNest.Description}/>
        <ProjectItem 
          repoName={RepoList.dealTask.Name}  
          languages={RepoList.dealTask.Languages} 
          deployUrl={RepoList.dealTask.DeployUrl} 
          isDeploy={RepoList.dealTask.isDeployed} 
          gitUrl={RepoList.dealTask.RepoUrl}
          description={RepoList.dealTask.Description}/>
        <ProjectItem 
          repoName={RepoList.pokemonPedia.Name}  
          languages={RepoList.pokemonPedia.Languages} 
          deployUrl={RepoList.pokemonPedia.DeployUrl} 
          isDeploy={RepoList.pokemonPedia.isDeployed} 
          gitUrl={RepoList.pokemonPedia.RepoUrl}
          description={RepoList.pokemonPedia.Description}/>
        <ProjectItem 
          repoName={RepoList.reactTodo.name}  
          languages={RepoList.reactTodo.Languages} 
          deployUrl={RepoList.reactTodo.DeployUrl} 
          isDeploy={RepoList.reactTodo.isDeployed} 
          gitUrl={RepoList.reactTodo.RepoUrl}
          description={RepoList.reactTodo.Description}/>
        <ProjectItem 
          repoName={RepoList.reactNativeTask.Name}  
          languages={RepoList.reactNativeTask.Languages} 
          deployUrl={RepoList.reactNativeTask.DeployUrl} 
          isDeploy={RepoList.reactNativeTask.isDeployed} 
          gitUrl={RepoList.reactNativeTask.RepoUrl}
          description={RepoList.reactNativeTask.Description}/>
    </div>
  )
}

const RepoList = {
  nodeGraphql: {
    name: "Node Store with Graphql API",
    Description:
      "A store API exposed in REST and Graphql protocols, protected by JWT and based on role the use of each endpoint. Only and admin role can make a whole CRUD for the items in the store stored in a Postgres database",
    Languages: ["Node", "MongoDB", "Graphql"],
    Name: "REST - Graphql API served on Node",
    RepoUrl: "https://github.com/jose827corrza/node-store-graphql-api",
    isDeployed: true,
    DeployUrl: 'https://node-store-graphql-api-production.up.railway.app/docs/',
  },
  backNest:{
    name: "Nest Geek store backend",
    Description:
      "This is an API using Nest framework, using as DB Postgres, TypeORM is used to manage the migrations in the DB, the endpoint to create new  product are protected by an authentication ruled by JWT an role authorization.",
    Languages: ["Typescript", "MongoDB", "NestJS"],
    Name: "Backend E-store using Nest framework",
    RepoUrl: "https://github.com/jose827corrza/nest_geek_store",
    isDeployed: true,
    DeployUrl: "https://nest-geek-josedev-store.up.railway.app/docs/",
  },
  backTypescript: {
    name: "Store backend with typescript",
    Description:
      "This is an API completely typed using TS, for minize the production bugs due to  entities problems, it uses a NoSQL DB",
    Languages: ["Typescript", "MongoDB"],
    Name: "Backend E-store using Typescript",
    RepoUrl: "https://github.com/jose827corrza/ecommerce-ts",
    isDeployed: false,
    DeployUrl: "",
  },
  backExpress: {
    name: "Backend Node websockets express",
    Description:
      "This is simple API using the most popular framework for a backend using Javascript, Express. Here you can authenticate to modify the different elements that a normal e-commerce uses, such as customers, products, categories, As a DB is used a Postgres DB, also an ORM as sequelize was used to perform tables relations. A few routes are protected with autorization middlewares to prevent a non authenticate user could make damages.",
    Languages: ["Javascript", "Express"],
    Name: "Backend Node websockets express",
    RepoUrl: "https://github.com/jose827corrza/node-websocket",
    isDeployed: true,
    DeployUrl: "https://node-websocket-production-3ece.up.railway.app/docs",
  },
  dealTask: {
    name: "Dealing Tasking Android app",
    Description:
      "This is an app that allows a complete CRUD with user's tasks, these are saved on a Firestore  collection, this helps to keep then updated on each device that uses the account.",
    Languages: ["Kotlin", "Compose"],
    Name: "TODO's Android native app ",
    RepoUrl: "https://github.com/jose827corrza/DealingTasking",
    isDeployed: true,
    DeployUrl:
      "https://play.google.com/store/apps/details?id=com.josedev.dealingtasking&hl=es_CO&gl=US",
  },
  pokemonPedia: {
    name: "Pokemon Pedia Android app",
    Description:
      "This is an app that consumes from a free remote API,  pokemon data, and allows to watch some specific data about each Pokemon.",
    Languages: ["Kotlin", "Compose"],
    Name: "Pokedex Android native app",
    RepoUrl: "https://github.com/jose827corrza/Poke-InfoPedia",
    isDeployed: true,
    DeployUrl:
      "https://play.google.com/store/apps/details?id=com.josedev.pokedex&hl=es_CO&gl=US",
  },
  reactNativeTask: {
    name: "Task mobile app with react native",
    Description:
      "This is a TODO's app, that is planned to do the same work as its 'gib brother' dealing tasking, with a CRUD for user's tasks",
    Languages: ["Javascript", "React native"],
    Name: "TODO's multiplatform app",
    RepoUrl: "https://github.com/jose827corrza/taskAppReactNative",
    isDeployed: false,
    DeployUrl: "",
  },
  reactTodo: {
    name: "TODO app with react",
    Description:
      "This is a TODO's app, that is planned to do the same work as its 'big brother' dealing tasking, with a CRUD for user's tasks, it storages the taks in localStorage in the browser and using React Hooks deal with the state and its change",
    Languages: ["Javascript", "React"],
    Name: "TODO's multiplatform app",
    RepoUrl: "https://github.com/jose827corrza/todos-react-app",
    isDeployed: true,
    DeployUrl: "https://gregarious-twilight-5d2008.netlify.app/",
  },
};
export default ProjectList