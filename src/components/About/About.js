import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from '../../assets/about-img.svg';

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row>
          <Col md={7}>
            <h1>Know Who <strong className="underline">I'M</strong></h1>
          </Col>
          <Col md={5} className="about-img">
            <img src={aboutImg} className="img-fluid" alt="Person in fron of computer"/>
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="underline">Skillset </strong>
        </h1>

        <h1 className="project-heading">
          <strong className="underline">Tools </strong> I  use
        </h1>
      </Container>
    </Container>
  );
}

export default About;