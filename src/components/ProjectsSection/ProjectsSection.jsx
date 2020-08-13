import React from 'react'; 
import Tab from '../Tab/Tab';
import { Container, Row, Col } from 'reactstrap';
import Project from '../Project/Project';
import { useSelector } from 'react-redux';
import "./ProjectsSection.scss"; 

const ProjectsSection = props => {
  const projects = useSelector(state => state.projects);

 return (
  <section className="projects">
    <Tab>Projects</Tab>
    <Container className="py-5">
      <Row className="wow fadeInLeft">
        {
          projects.map(p => (
           <Col xs={12} md={4} key={p.id}>
            <Project {...p}/>
           </Col>
          ))
        }
       </Row>
    </Container>
  </section>
 );
} 

export default ProjectsSection;
