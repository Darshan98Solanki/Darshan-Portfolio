import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";

function Footer() {

  return (
    <Container fluid className="footer py-4">
      <Row className="align-items-center justify-content-center text-center">
        <Col xs="auto">
          <ul className="home-about-social-links list-unstyled d-flex mb-0">
            <li className="social-icons mx-2">
              <a
                href="https://github.com/Darshan98Solanki/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillGithub size={28} />
              </a>
            </li>
            <li className="social-icons mx-2">
              <a
                href="https://x.com/Darshan9Solanki"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiOutlineTwitter size={28} />
              </a>
            </li>
            <li className="social-icons mx-2">
              <a
                href="https://linkedin.com/in/solanki-darshan/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <FaLinkedinIn size={28} />
              </a>
            </li>
            <li className="social-icons mx-2">
              <a
                href="https://leetcode.com/u/darshansolanki/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <SiLeetcode size={28} />
              </a>
            </li>
          </ul>
        </Col>
        <Col xs="12" className="mt-3">
          <h3>Thank You ❕</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
