import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Darshan Solanki </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently working as a software developer.
            <br />
            I have completed B.E. in Computer Engineering.
            <br />
            Worked as freelancer and have completed work from <b>Canada & Indian</b>.
            <br />
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
