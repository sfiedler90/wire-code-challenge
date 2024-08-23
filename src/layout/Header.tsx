import logo from "./logo.svg";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./Header.css";

export const Header: React.FC = () => (
  <header className="header">
    <Container>
      <Row>
        <Col xs="12" lg="4" className="text-center">
          <img src={logo} className="header-logo" alt="logo" />
        </Col>
        <Col xs="12" lg="8">
          <div className="title">
            <h1>Sanny Search</h1>
            <p>Just another shiny package library</p>
          </div>
        </Col>
      </Row>
    </Container>
  </header>
);
