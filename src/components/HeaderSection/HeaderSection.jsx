import React from 'react'; 
import { Container, Row, Col } from 'reactstrap';
import "./HeaderSection.scss"; 
import CircularPhoto from '../CircularPhoto/CircularPhoto';
import { useSelector } from 'react-redux';

const HeaderSection = props => {
  const header = useSelector(state => state.data.header);
  
 return (
   <Container fluid className="header-section">
      <Row>
        <Col xs={12} md={8}>
          <h1 className="wow fadeInLeft">{header.title}</h1> 
          <h2 className="wow fadeInRight">{header.subtitle}</h2>
          <p className="wow fadeInLeft">{header.text}</p>
        </Col>
        <Col xs={{size: 8, offset: 2}} md={{size:4, offset: 0}} className="mt-4 mt-md-0">
          <CircularPhoto src={header.image}/>
        </Col>
      </Row>
   </Container>
 );
} 

export default HeaderSection;
