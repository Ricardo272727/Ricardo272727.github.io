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
          <div className="hello">
            <h3>{about.hello || 'Hi, I\'m Ricardo!'}</h3>
          </div>
          <div className="description">
            <p>{about.description}</p>
          </div>
          <div className="photo">
            <img src={about.photo} alt={about.name} />
          </div>
        </Col>
      </Row>
    </Container>

    </section>
     <div className="send-email">
        <h5>Send me an email</h5>
        <a 
          href="mailto:cuanaloricardo@gmail.com?subject=Hola">
        Contact me</a>
     </div>
   </>
 );
} 

export default AboutSection;
