import Landing from './components/Landing'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'

import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

import { Navbar, Nav } from 'react-bootstrap'


const App = () => {
  return (
    <Router>
      <div className="container">
      <Navbar collapseOnSelect className="m-auto justify-content-center" expand="lg" variant="dark" id="navbar">
        <Navbar.Brand href="/">Shakib Rahman</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" as="span">
              <Link to="/about">About</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/projects">Projects</Link>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <a href="https://drive.google.com/file/d/1Y-PxhRrDg8sWTGkHzuBuIN06nxA8Qd9Z/view?usp=sharing">Resume</a>
            </Nav.Link>
            <Nav.Link href="#" as="span">
              <Link to="/Contact">Contact</Link>
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
  )
}

export default App;
