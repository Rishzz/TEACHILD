
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./company-section.css";



const Company = () => {
  return (
    <section>
      <Container className="textStyle">
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-vimeo-line"></i> Vimeo
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-pinterest-line"></i> Pinterest
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              <i class="ri-dribbble-line"></i> Dribble
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              
              <i class="ri-apple-fill"></i> Apple
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className=" d-flex align-items-center gap-1">
              {" "}
              <i class="ri-finder-fill"></i> Finder
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className=" d-flex align-items-center gap-1">
              {" "}
              <a href="mailto:mail2teachild@gmail.com?subject=SendMail&body=Description"  target="_blank" rel="noreferrer"  style={{ textDecoration: 'none' }}>
              <i class="ri-google-fill"></i> </a>Google
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;