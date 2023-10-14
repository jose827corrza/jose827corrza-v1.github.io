import "./styles/App.css";


import Header from "./components/Header";
import Projects from "./pages/Projects";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import NotFound from "./pages/NotFound";


import { HashRouter, Routes, Route } from "react-router-dom";
import Description from "./pages/Description";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
      <HashRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<AboutMe/>} />
          <Route exact path="/projects" element={<Projects/>} />
          <Route exact path="/projects/:projectId" element={<Description repoUri={'id'}/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer/>
      </HashRouter>
    </div>
  );
}

export default App;
