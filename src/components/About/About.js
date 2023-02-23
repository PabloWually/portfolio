import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import aboutImg from "../../assets/about-img.svg";
import "./About.css";
import { TiArrowForward } from "react-icons/ti";

function About() {
  return (
    <section>
      <Container fluid className="about-section">
        <Container className="about-content">
          <Row>
            <Col md={7} className="about-content__text">
              <h1>
                Know Who <strong className="underline">I'M</strong>
              </h1>
              <article className="about-content__description">
                <div>
                  <p className="description">
                    Hi Everyone, I am{" "}
                    <span className="underline">Pablo Guallichico </span>
                    from <span className="underline"> Quito, Ecuador.</span>
                    <br />I am a junior Full Stack developer and data lover
                    <br />
                    <br />
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <ul>
                    <li className="about-activity">
                      <TiArrowForward /> Playing Games
                    </li>
                    <li className="about-activity">
                      <TiArrowForward /> Learn Data Science
                    </li>
                    <li className="about-activity">
                      <TiArrowForward /> Travelling
                    </li>
                  </ul>

                  <p style={{ color: "rgb(155 126 172)" }}>
                    "Strive to build things that make a difference!"{" "}
                  </p>
                  <footer className="blockquote-footer">Soumyajit</footer>
                </div>
              </article>
            </Col>
            <Col md={5} className="about-img">
              <img
                src={aboutImg}
                className="img-fluid"
                alt="Person in fron of computer"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default About;
