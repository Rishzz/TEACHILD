
import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "You can learn for free in quick session like bootcamp and crashcourses without comprmising the quality of the content from expert of the field.",
    icon: "ri-draft-line",
  },

  {
    title: "All Time Support",
    desc: "You can get free support all time through mail , phone , whatsapp message so you can learn without any diffuclties.",
    icon: "ri-discuss-line",
  },

  {
    title: "Certification",
    desc: "We also provide free certfication , after completing the courses , so you can use to show you have knowldege of particular domain.",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;