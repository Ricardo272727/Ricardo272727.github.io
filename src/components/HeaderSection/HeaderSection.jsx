import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./HeaderSection.scss";
import CircularPhoto from "../CircularPhoto/CircularPhoto";
import { useSelector } from "react-redux";

const HeaderSection = (props) => {
  const header = useSelector((state) => state.data.header);

  return (
    <Container fluid className="header-section">
      <Row>
        <Col xs={12}></Col>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 2 }}>
          <div className="paper">
            <h1 className="wow fadeInLeft">{header.title}</h1>
            <h2 className="wow fadeInRight">{header.subtitle}</h2>
            <p className="wow fadeInLeft">{header.text}</p>
            <CircularPhoto src={header.image} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HeaderSection;
