import React from "react";
import { useParams } from "react-router-dom";

const Description = () => {
  let { projectId } = useParams();
  let choice = RepoList.find((project) => project.Uri === projectId);
  const elements = choice.Languages.map((element) => <li>{element}</li>);
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return (
    <div className="card-view">
      <div className="card-detail">
        <h2>{choice.Name}</h2>
        <p>{choice.Description}</p>
        <br />
        <h3>Languages and thecnologies used:</h3>
        <ol className="elements">{elements}</ol>
        <br />

        <button
          className="btn"
          onClick={() => openInNewTab(`${choice.RepoUrl}`)}
        >
          Go to repo
        </button>
        <button
          className="btn"
          onClick={() => openInNewTab(`${choice.DeployUrl}`)}
        >
          Go to app
        </button>
      </div>
    </div>
  );
};

export default Description;

const RepoList = [
  {
    Uri: "go-websockets",
    Description:
      "This is a complete backend API for a post webpage, where you can signup, or login using JWT. Being authenticated you can create, modify or delete your posts, also you can watch others users's posts, contains an endpoint where you can observe your users information, and this API implements an endpoint that uses websockets to being update with the posts.",
    Languages: ["Go", "HTML"],
    Name: "REST API with websockets using GO",
    RepoUrl: "https://github.com/jose827corrza/go-websockets",
    isDeployed: true,
    DeployUrl: "https://go-josedev.herokuapp.com/",
  },
  {
    Uri: "back-nest",
    Description:
      "This is an API using Nest framework, using as DB MongoDB, to achieve a successfull conection, mongoose library is used.",
    Languages: ["Typescript", "MongoDB", "NestJS"],
    Name: "Backend E-store using Nest framework",
    RepoUrl: "https://github.com/jose827corrza/nest-estore-back",
    isDeployed: true,
    DeployUrl: "",
  },
  {
    Uri: "back-typescript",
    Description:
      "This is an API completely typed using TS, for minize the production bugs due to  entities problems, it uses a NoSQL DB",
    Languages: ["Typescript", "MongoDB"],
    Name: "Backend E-store using Typescript",
    RepoUrl: "https://github.com/jose827corrza/ecommerce-ts",
    isDeployed: true,
    DeployUrl: "",
  },
  {
    Uri: "back-express",
    Description:
      "This is simple API using the most popular framework for a backend using Javascript, Express. Here you can authenticate to modify the different elements that a normal e-commerce uses, such as customers, products, categories, As a DB is used a Postgres DB, also an ORM as sequelize was used to perform tables relations. A few routes are protected with autorization middlewares to prevent a non authenticate user could make damages.",
    Languages: ["Javascript", "Express"],
    Name: "Backend E-store using Express framework",
    RepoUrl: "https://github.com/jose827corrza/node-express-ecomm-api",
    isDeployed: true,
    DeployUrl: "https://josedev-node-express.herokuapp.com/doc/",
  },
  {
    Uri: "dealing-tasking",
    Description:
      "This is an app that allows a complete CRUD with user's tasks, these are saved on a Firestore  collection, this helps to keep then updated on each device that uses the account.",
    Languages: ["Kotlin", "Compose"],
    Name: "TODO's Android native app ",
    RepoUrl: "https://github.com/jose827corrza/DealingTasking",
    isDeployed: true,
    DeployUrl:
      "https://play.google.com/store/apps/details?id=com.josedev.dealingtasking&hl=es_CO&gl=US",
  },
  {
    Uri: "pokemon-pedia",
    Description:
      "This is an app that consumes from a free remote API,  pokemon data, and allows to watch some specific data about each Pokemon.",
    Languages: ["Kotlin", "Compose"],
    Name: "Pokedex Android native app",
    RepoUrl: "https://github.com/jose827corrza/Poke-InfoPedia",
    isDeployed: true,
    DeployUrl:
      "https://play.google.com/store/apps/details?id=com.josedev.pokedex&hl=es_CO&gl=US",
  },
  {
    Uri: "task-react-native",
    Description:
      "This is a TODO's app, that is planned to do the same work as its 'gib brother' dealing tasking, with a CRUD for user's tasks",
    Languages: ["Javascript", "React native"],
    Name: "TODO's multiplatform app",
    RepoUrl: "https://github.com/jose827corrza/taskAppReactNative",
    isDeployed: false,
    DeployUrl: "",
  },
];
