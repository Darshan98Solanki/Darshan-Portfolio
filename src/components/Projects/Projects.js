import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import stocks from "../../Assets/Projects/stocks.jpg";
import space_invaders from "../../Assets/Projects/space-invaders.png";
import shortURI from "../../Assets/Projects/short-uri.png";
import medium from "../../Assets/Projects/medium.png";
import quiz from "../../Assets/Projects/quiz.png";
import paydm from "../../Assets/Projects/paydm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medium}
              isBlog={false}
              title="Tech-Log"
              description="TechLog is a collaborative platform for sharing and discussing tech content, built with React.js, Node.js, PostgreSQL and Prisma. It features user authentication, authorization, Log (post) creation, and real-time interactions. Designed for seamless use with Tailwind CSS and it also supports Logs and profile update features."
              ghLink="https://github.com/Darshan98Solanki/medium"
              demoLink="https://medium-ecru-six.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paydm}
              isBlog={false}
              title="PayDm - A Paytm Clone"
              description="This project demonstrates a PayTM clone where users can sign up and register on our platform to receive some signup paper money. They can transfer the money to their friends who are already on the platform."
              ghLink="https://github.com/Darshan98Solanki/paytm"
              demoLink="https://Paytm-axue.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shortURI}
              isBlog={false}
              title="Short-URI"
              description="This project is a full-stack application designed to shorten URLs, with a backend built using Node.js and a frontend developed using modern web technologies. The backend handles the logic for URL shortening, while the frontend offers a clean, user-friendly interface."
              ghLink="https://github.com/Darshan98Solanki/Short-URI"
              demoLink="https://short-uri-q5yh.vercel.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stocks}
              isBlog={false}
              title="Stock Market Screener"
              description="Stock screener - In this project, for the betterment of investment strategies, we can shortlist all the NSE and BSE stocks using Python pre-defined libraries by our strategy.

              Used libraries:- Talib, numpy, pandas, yfinance"
              demoLink="https://www.linkedin.com/posts/solanki-darshan_stock-screener-in-this-project-for-the-activity-7114860234757537792-w9Uf?utm_source=share&utm_medium=member_desktop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quiz}
              isBlog={false}
              title="Interactive Quiz System"
              description="This project aims to develop an interactive quiz system that uses computer vision technology to enhance the user experience. The system allows users to take quizzes and interact with the system using hand gestures, providing a more immersive and accessible experience for users."
              ghLink="https://github.com/Darshan98Solanki/Quiz-System-OpenCV"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={space_invaders}
              isBlog={false}
              title="Space Invaders"
              description="A modern twist on the classic Space Invaders, this game is built with Python using the Pygame library. It challenges players to defend their spaceship against waves of alien invaders. Can you survive and claim the high score?"
              ghLink="https://github.com/Darshan98Solanki/Space-Invaders-Game"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
