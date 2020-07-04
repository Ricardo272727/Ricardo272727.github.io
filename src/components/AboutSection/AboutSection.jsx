import React from 'react'; 
import Tab from '../Tab/Tab';
import "./AboutSection.scss"; 
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';


const AboutSection = props => {
  const about = useSelector(state => state.data.about);
 return (
  <section className="about">
    <Tab>About me</Tab>
    <Container className="py-5">
      <Row className="pt-5">
        <Col xs={12} md={{size: 8, offset: 2}}>     
          {
            about.text.map(t => (
             <p className="wow fadeInLeft" key={t}>
              {t}
             </p>
            ))
          }
          <p className="subtext wow fadeInRight">{about.subtext}</p>
        </Col>
      </Row>

    </Container>
  </section>
 );
} 

export default AboutSection;
