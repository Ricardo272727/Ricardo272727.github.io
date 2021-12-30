import React from "react";
import Tab from "../Tab/Tab";
import { Container, Row, Col } from "reactstrap";
import Project from "../Project/Project";
import { useSelector } from "react-redux";
import "./ExperienceSection.scss";
import Experience from "../Experience/Experience";

const ExperienceSection = (props) => {
  const items = useSelector((state) => state.experience);

  return (
    <section className="experience">
      <Tab>Experience</Tab>
      <Container className="py-5">
        <Row className="wow fadeInLeft">
          {items.map((p) => (
            <Col xs={12} key={p.id}>
              <Experience
                id={p.id}
                name={p.name}
                image={p.image}
                link={p.link}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ExperienceSection;
