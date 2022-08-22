import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.png";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content" id="AboutUs">
              <h2>About Us</h2>
              <p>
                The moto of teachild to provide a free and quality education to every needed child.Platform going to provide free education and live classes by industry expert who are giving their valuable time for free. 
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={2} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Courses</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={1} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Benificiary</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Current going courses</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={4} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">No. of teacher</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;