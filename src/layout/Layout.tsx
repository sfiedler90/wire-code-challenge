import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Header } from "./Header";
import React from "react";
import { Container, Row, Col } from "react-bootstrap/";
import Footer from "./Footer";

import "./Layout.css";

export const Layout: React.FC = () => (
  <div className="layout">
    <Header />
    <Container>
      <Row>
        <Col xs="12" lg="4">
          <Navbar />
        </Col>
        <Col xs="12" lg="8">
          <div className="content">
            <Outlet />
          </div>
        </Col>
      </Row>
    </Container>
    <Footer />
  </div>
);
