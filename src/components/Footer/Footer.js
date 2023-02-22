import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import "./Footer.css"

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return(
    <Container fluid className="footer">
      <Row>
        <Col md={4} className="footer-copywrite">
          <h3>Developed with 🍺 by Pablo Guallichico</h3>
        </Col>
        <Col md={4} className="footer-copywrite">
          <h3>Copywrite © {year} PG</h3>
        </Col>
        <Col md={4} className="footer-body">
          <ul className="footer-icons">
            <li className="footer-social-icons">
              <a
                href="https://github.com/PabloWually"
                className="footer-icon-colour"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="footer-social-icons">
              <a
                href="https://twitter.com/PabloWually"
                className="footer-icon-colour"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="footer-social-icons">
              <a
                href="https://www.linkedin.com/in/pablowually/"
                className="footer-icon-colour"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;