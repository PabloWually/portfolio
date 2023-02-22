import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import TypeWriter from "../Utils/TypeWriter";
import "./Home.css";
import homeLogo from "../../assets/home-image.svg";
import avatar from "../../assets/avatar.svg";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home" >
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>
              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Pablo Guallichico</strong>
              </h1>
              <div className="typewriter-content">
                <TypeWriter/>
              </div>
            </Col>
            <Col md={5} className="img-content">
              <img 
                src={homeLogo}
                alt="Developer"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid className="home-about-section" id="home-about" >
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1>
                LET ME INTRODUCE MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming and I have at least learnt something, I think...
                <br/>
                <br/>
                I am fluent in classics like
                <b className="underline"> C#, JavaScript and Python</b>
                <br/>
                <br/>
                My field of Interest's are building new 
                <i>
                  <b className="underline"> Web Technologies and Products </b> and
                  also in areas related to 
                  <b className="underline"> Deep learning and Natural language Processing</b>
                </i>
                <br/>
                <br/>
                Whenever possible, I also apply my passion for developing products with 
                <b className="underline"> Node.js</b> and
                <i>
                <b className="underline">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
                </i>
                &nbsp; like
                <i>
                  <b className="underline"> React.js and Next.js</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvatar">
              <img
                src={avatar} className="img-fluid avatar-content" alt="avatar"
              />
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="underline">content </span> with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icon">
                  <a
                    href="https://github.com/PabloWually"
                    className="icon-colour home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icon">
                  <a
                    href="https://www.linkedin.com/in/pablowually/"
                    className="icon-colour home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icon">
                  <a
                    href="https://twitter.com/PabloWually"
                    className="icon-colour home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;