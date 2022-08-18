import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import colorSharp from "../../assets/img/color-sharp.png";
import './Skills.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    }
  };

  const skills = [
    {
      name: "react",
      url: "https://img.icons8.com/office/344/react.png",
    },
    {
      name: "react-native",
      url: "https://img.icons8.com/nolan/344/react-native.png",
    },
    {
      name: "wordpress",
      url: "https://img.icons8.com/color/344/wordpress.png",
    },
    {
      name: "node",
      url: "https://img.icons8.com/color/344/nodejs.png",
    },
    {
      name: "angular",
      url: "https://img.icons8.com/color/344/angularjs.png",
    },
    {
      name: "flutter",
      url: "https://img.icons8.com/fluency/344/flutter.png",
    },
    {
      name: "vuejs",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/512px-Vue.js_Logo_2.svg.png?20170919082558",
    }
  ]

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>
                Bénéficiez de mon expertise
              </h2>
              <Row className="skill-carousel">
                <Col xs={12} md={6} className="skill-carousel-txt">
                  <p>Mes domaines d'expertise sont variés. Je travaille avec différents CMS et framework afin de vous proposer la solution la plus adaptée à votre projet.</p>
                </Col>
                <Col xs={12} md={6}>
                  <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={750} keyBoardControl={false} arrows={false} className="skill-slider">
                    {
                      skills.map((skill, index) => {
                        return (
                          <div key={index} className="item">
                            <img src={skill.url} alt="" />
                          </div>
                        )
                      })
                    }
                  </Carousel>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} />
    </section>
  )
}