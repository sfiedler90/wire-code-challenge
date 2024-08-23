import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="waves">
      <div className="wave" id="wave1"></div>
      <div className="wave" id="wave2"></div>
      <div className="wave" id="wave3"></div>
      <div className="wave" id="wave4"></div>
    </div>

    <Container>
      <Row>
        <Col className="text-center">
          <p>
            This page is for code challenge purposes only and is not intended to
            be representative content
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default Footer;
