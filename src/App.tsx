import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

import Particles from "react-tsparticles";

const BackgroundParticles = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        fpsLimit: 120,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "bubble",
            },
            onDiv: {
              enable: false,
            },
          },
          modes: {
            bubble: {
              distance: 50,
              duration: 2,
              opacity: 1.0,
              size: 8,
              color: {
                value: "#e0e0e0"
              }
            },
            repulse: {
              distance: 40,
              duration: 1.0,
              factor: 100,
              speed: 1,
            },
          },
        },
        particles: {
          color: {
            value: "#404040",
          },
          links: {
            color: "#404040",
            distance: 100,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: true,
            speed: 0.1,
            straight: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 600
            },
            bounce: false,
            spin: {
              acceleration: 0,
              enable: false
            }
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

const Navigation = () => {
  return (
    <Navbar
      collapseOnSelect
      className="m-auto justify-content-center"
      expand="lg"
      variant="dark"
      id="navbar"
    >
      <Navbar.Brand href="/" className="d-flex align-items-center">
        <span>Shakib Rahman</span>
      </Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="responsive-navbar-nav" 
        className="custom-navbar-toggle"
      >
        <span className="navbar-toggle-icon">⌄</span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about" as="span">
            <Link to="/about">About</Link>
          </Nav.Link>
          <Nav.Link href="/projects" as="span">
            <Link to="/projects">Projects</Link>
          </Nav.Link>
          <Nav.Link as="span">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </Nav.Link>
          <Nav.Link href="/contact" as="span">
            <Link to="/contact">Contact</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const App = () => {
  return (
    <Router>
      <div className="container">
        <BackgroundParticles />
        <Navigation />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/contact">
            <div className="d-flex flex-column min-vh-90 justify-content-center align-items-center">
              <Contact />
            </div>
          </Route>
          <Route path="/resume" render={() => {
            window.location.href = "/Resume.pdf";
            return null;
          }} />
          <Route path="/">
            <div className="d-flex flex-column min-vh-90 justify-content-center align-items-center">
              <Landing />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
