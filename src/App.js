import React from "react";
// import logo from './logo.svg';
import { HashRouter as Router, Route, Link, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import { NavbarBrand } from 'react-bootstrap';

import Footer from "./components/Footer";
// import Carousel from './components/Carousel';
import AboutMePage from "./pages/AboutMePage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactPage from "./pages/ContactPage";
import ResumePage from "./pages/ResumePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Marissa Flynn",
      headerLinks: [
        { title: "About Me", path: "/" },
        { title: "Portfolio", path: "/portfolio" },
        { title: "Contact", path: "/contact" },
        { title: "Resume", path: "/resume" },
      ],
      aboutMe: {
        title: "About Me",
        textContent: "about me text content here",
      },
      portfolio: {
        title: "Portfolio",
        subTitle: "portfolio subtitle here",
        textContent: "Take a look at my projects",
      },
      contact: {
        title: "Contact Me",
      },
      resume: {
        title: "Resume",
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p=0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand> Marissa Flynn </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ms-auto">
                <Link className="nav-link navjump" to="/">
                  About Me
                </Link>
                <Link className="nav-link navjump" to="/portfolio">
                  Portfolio
                </Link>
                <Link className="nav-link navjump" to="/contact">
                  Contact
                </Link>
                <Link className="nav-link navjump" to="/resume">
                  Resume
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route
              path="/"
              element={
                <AboutMePage
                  title={this.state.aboutMe.title}
                  textContent={this.state.aboutMe.textContent}
                />
              }
            />
            <Route
              path="/portfolio"
              element={
                <PortfolioPage
                  title={this.state.portfolio.title}
                  subTitle={this.state.portfolio.subTitle}
                  textContent={this.state.portfolio.textContent}
                />
              }
            />
            <Route
              path="/contact"
              element={<ContactPage title={this.state.contact.title} />}
            />
            <Route
              path="/resume"
              element={<ResumePage title={this.state.resume.title} />}
            />
          </Routes>
          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
