import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import { projectImg1, projectImg2, projectImg3, colorSharp2 } from '../assets/img';
import ProjectCard from './ProjectCard';
import TrackVisibility from 'react-on-screen';
import 'animate.css';

const Projects = () => {
  const isVisible = false;

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                  <h2>Proyectos</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptate voluptatem sed ipsam
                    inventore, minus quisquam soluta, atque veritatis doloribus iure consequatur expedita hic labore
                    asperiores illum distinctio nobis quae.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? 'animate__animated animate__slideInUp' : ''}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                          velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis
                          asperiores delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident
                          velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis
                          asperiores delectus quasi inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
};

export default Projects;

interface IProject {
  title: string;
  description: string;
  imgUrl: any;
}

const projects: IProject[] = [
  {
    title: 'Bussiness Startup',
    description: 'Design & Development',
    imgUrl: projectImg1,
  },
  {
    title: 'Bussiness Startup',
    description: 'Design & Development',
    imgUrl: projectImg2,
  },
  {
    title: 'Bussiness Startup',
    description: 'Design & Development',
    imgUrl: projectImg3,
  },
  {
    title: 'Bussiness Startup',
    description: 'Design & Development',
    imgUrl: projectImg1,
  },
  {
    title: 'Bussiness Startup',
    description: 'Design & Development',
    imgUrl: projectImg2,
  },
];
