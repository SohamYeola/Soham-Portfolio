import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import projImg8 from "../assets/img/project-img8.png";
import projImg9 from "../assets/img/project-img9.png";
import projImg10 from "../assets/img/project-img10.png";
import projImg11 from "../assets/img/project-img11.png";
import projImg12 from "../assets/img/project-img12.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import seating from "../assets/img/seating.png";
import eventease from "../assets/img/eventease.png";
import easypicks from "../assets/img/easypicks.png";
import vitalsync from "../assets/img/vitalsync.png";
import lifelink from "../assets/img/lifelink.png";
import unitygame from "../assets/img/unitygame.png";
import pc from "../assets/img/pc.png";

export const Projects = () => {

  const projects = [
    {
      title: "Easy Picks",
      description: "HTML, CSS, javascript,typescript Project",
      imgUrl: easypicks,
      link: "https://github.com/SohamYeola/Easy-Picks/",
    },
    {
      title: "EventEase",
      description: "HTML,CSS,javascript,typescript,java Project",
      imgUrl: eventease,
      link: "https://github.com/SohamYeola/EventEase-Agnethon/",
    },
    {
      title: "LifeLink",
      description: "HTML,CSS,javascript,typescript,java Project",
      imgUrl: lifelink,
      link: "https://github.com/SohamYeola/LifeLink/",
    },
    {
      title: "VitalSync",
      description: "HTML,CSS,javascript,typescript,java Project",
      imgUrl: vitalsync,
      link: "https://github.com/SohamYeola/innov_2024_Thinkables/",
    },
    {
      title: "Contact Manager App",
      description: "Node.js, Express.js and MongoDB Project",
      imgUrl: projImg8,
      link: "https://github.com/SohamYeola/Contact-Manger-App/",
    },
    {
      title: "Spotify",
      description: "Javascript Project",
      imgUrl: projImg9,
      link: "https://github.com/SohamYeola/Spotify/",
    },
    {
      title: "Seating Arrangement System",
      description: "HTML,CSS,Java Project",
      imgUrl: seating,
      link: "https://github.com/SohamYeola/Seating-Arrangement-and-Supervisor-Allotment-System/",
    },
    {
      title: "Build IT",
      description: "PHP Project",
      imgUrl: pc,
      link: "https://github.com/SohamYeola/Build_IT-application/",
    },
    {
      title: "Flappy Monster",
      description: "Game Development",
      imgUrl: unitygame,
      link:"https://github.com/SohamYeola/UnityGame/"
    },
  ];

  // Split projects between Tab 1 and Tab 2
  const projectsTab1 = projects.slice(0, 3); // First 6 projects
  const projectsTab2 = projects.slice(3, 6);
  const projectsTab3 = projects.slice(6, 9); // Remaining 3 projects

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>This section highlights a curated collection of my projects, showcasing my expertise in web development, software engineering, and data visualization. Each project demonstrates my ability to tackle complex challenges, ranging from backend API development to crafting interactive dashboards. Explore each project to discover the technologies implemented, the obstacles I overcame, and the meaningful impact achieved.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
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
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTab1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsTab2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projectsTab3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  )
}
