import React from 'react'; 
import Tab from '../Tab/Tab';
import "./AboutSection.scss"; 
import { Container, Row, Col } from 'reactstrap';
import { useSelector } from 'react-redux';




const AboutSection = props => {
  const about = useSelector(state => state.data.about);

 return (
   <>
    <section className="about">
    <Tab>About me</Tab>
    <Container className="py-5 main">
      <Row className="pt-5">
        <Col xs={12} md={{size: 10, offset: 1}}>     
          <div className="hello wow fadeInLeft">
            <h3>{about.hello || 'Hi, I\'m Ricardo!'}</h3>
          </div>
          <div className="description wow fadeInRight">
            <p>{about.description}</p>
          </div>
          <div className="photo wow fadeInLeft">
            <img src={about.photo} alt={about.name} />
          </div>
        </Col>
      </Row>
    </Container>

    </section>
   </>
 );
} 

export default AboutSection;
