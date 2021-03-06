import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";
import { Nav, Navbar } from "react-bootstrap";
import "./Header.css";
import { HomeRounded, Telegram } from "@material-ui/icons";
import { NavLink, withRouter } from "react-router-dom";
const Header = (prop) => {
  const pathName = prop?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            CV
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/certificate"
            className={
              pathName === "/certificate" ? "header_link_active" : "header_link"
            }
          >
            Certificate
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/covid"
            className={
              pathName === "/Covid" ? "header_link_active" : "header_link"
            }
          >
            Covid19
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.social).map((key, i) => (
            <a
              key={i}
              href={resumeData.social[key].link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {resumeData.social[key].icon}
            </a>
          ))}
          <CustomButton text="Hire Me" icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
