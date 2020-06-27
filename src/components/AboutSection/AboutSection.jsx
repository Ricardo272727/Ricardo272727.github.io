import React from 'react'; 
import Tab from '../Tab/Tab';
import "./AboutSection.scss"; 
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';


const AboutSection = props => {
  const description = useSelector(state => state.data.about.text);
 return (
  <section className="about">
    <Tab>About me</Tab>
    <Container className="py-5">
      <Row className="pt-5">
        <Col xs={12} md={{size: 8, offset: 2}}>     
          <p className="wow backInUp">
           {description}
          </p>
        </Col>
      </Row>

    </Container>
  </section>
 );
} 

export default AboutSection;
