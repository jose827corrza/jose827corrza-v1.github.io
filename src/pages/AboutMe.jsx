import React from "react";
import profile from "./../assets/profile.jpeg";

const AboutMe = () => {
  return (
    <div className="aboutme-space">
      <div id="content">
        <div className="description">
          <h2>About me</h2>
          <p>
            My name is Jose Daniel, I am 25 years old. I am electromechanical
            engineer, I consider a logical and autodidact. I have been working
            as a backend developer for almost a year in a fintech company. I
            have develop from a database, passing through for a backend API an
            complete a frontend. besides an artificial intelligence usin
            tensorflow framework with python. My favourites languages for
            working are JS, Typescript and Go. I do love to create small things
            that like a gear in a watch, working all together among other geears
            make this awesome and easier. 
            <br />
            <p>My hobbies are playing with IoT stuff, skate, waling around the city and being a beer taster.</p>
          </p>
        </div>
        <div className="my-img">
          <img className="img-profile" src={profile} alt="thatsme" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
