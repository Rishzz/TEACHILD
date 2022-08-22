
import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content" id="Blog">
              <h2>Why Choose Us</h2>
              <p>
                We are on the mission to change the world of education .
                We are going to provide  education for free by the help 
                of time  donation for industrial expert and quality teachers.
                Also anyone who have knowledge of particular domain and 
                intrested in teaching can come and join this reform of 
                education . For the student who are looking for quality 
                education for free this is the best platform for that .
                You are going to get the free certificate after completing
                the course.You can join us to be the part of this revolution,
                so came and help us to change to education system.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/RGKi6LSPDLU"
                  controls
                  width="100%"
                  height="350px"
                />
                
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;