import React from "react";
import react from "./../assets/react.png";
import node from "./../assets/node.png";
import golang from "./../assets/golang.png";
import graphql from "./../assets/graphql.png";
import aws from "./../assets/aws2.png";
import postgres from "./../assets/postgres.png";
import mongo from "./../assets/mongo.png";
import python from "./../assets/python.png";
import nest from "./../assets/nest.png";
import sequelize from "./../assets/sequelize.png";

const AboutMe = () => {
  return (
    <div className="aboutme-space">
      <div id="content">
        <div className="description">
          <h2>About me</h2>
          <p>
            My name is Jose Daniel I am 26 years old. I am electromechanical
            engineer, continuous learner, autodidact, and tech enthusiastic. I have been working
            as a backend developer for a year in a fintech company. At the same time I've been learning 
            about technologies, which I've used for creating a few APIs, apps and some frontends apps 🚀.

            {/* In these projects that I've developed, some of the tools and languages loved and used by 
            me are Postgres and MongoDB as databases, AWS for cloud services specially EC2, S3, RDS and 
            CloudFormation. In the backend Javascript and its superset Typescript, besides Go  
            
            As tools of frameworks NestJS, Graphql and FastAPI are my favourites, last but not least React as
            a Javascript library for the View control in the front end. */}
            <br />
            <p>My hobbies are playing with IoT stuff, skate, walking around the city and being a beer taster. </p>
          </p>
        </div>
        <div className="my-img">
          <div>
            <h2> Technologies</h2>
            <h3>Frontend</h3>
            <div className="technologies-grid">
              <div>
                <img className="technologies--about" src={react} alt="react" />
              </div>
            </div>
            <h3>Backend</h3>
            <div className="technologies-grid">
              <div>
                <img className="technologies--about" src={node} alt="node" />
              </div>
              <div>
                <img className="technologies--about" src={golang} alt="golang" />
              </div>
              <div>
                <img className="technologies--about" src={python} alt="python" />
              </div>
            </div>
            <h3>Tools</h3>
            <div className="technologies-grid">
              <div>
                <img className="technologies--about" src={graphql} alt="graphql" />
              </div>
              <div>
                <img className="technologies--about" src={aws} alt="aws" />
              </div>
              <div>
                <img className="technologies--about" src={nest} alt="nestjs" />
              </div>
            </div>
            <h3>Database</h3>
            <div className="technologies-grid">
              <div>
                <img className="technologies--about" src={postgres} alt="postgres" />
              </div>
              <div>
                <img className="technologies--about" src={mongo} alt="mongo" />
              </div>
              <div>
                <img className="technologies--about" src={sequelize} alt="sequelize" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
