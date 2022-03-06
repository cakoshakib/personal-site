import Landing from "./components/Landing";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Navbar, Nav } from "react-bootstrap";

import Particles from "react-tsparticles";

const App = () => {
  return (
    <Router>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: "canvas",
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
            },
          },
          particles: {
            color: {
              value: "#404040",
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 15,
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
      <div className="container">
        <Navbar
          collapseOnSelect
          className="m-auto justify-content-center"
          expand="lg"
          variant="dark"
          id="navbar"
        >
          <Navbar.Brand href="/">Shakib Rahman</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/about" as="span">
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link href="/projects" as="span">
                <Link to="/projects">Projects</Link>
              </Nav.Link>
              <Nav.Link href="#" as="span">
                <a href="https://drive.google.com/file/d/1Y-PxhRrDg8sWTGkHzuBuIN06nxA8Qd9Z/view?usp=sharing">
                  Resume
                </a>
              </Nav.Link>
              <Nav.Link href="/contact" as="span">
                <Link to="/contact">Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
