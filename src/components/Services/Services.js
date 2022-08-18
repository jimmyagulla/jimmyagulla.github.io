import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ServiceCard } from "./ServiceCard";
import './Service.css';

export const Services = () => {
  const services = [
    {
      title: "Création Site Web",
      description: "Développement d'un site web de A à Z selon vos besoins, complètement personalisé pour qu'il vous corresponde.",
      url: "https://img.icons8.com/fluency/344/web.png",
    },
    {
      title: "Refonte Site Web",
      description: "Accompagnement pour votre migration ou refonte de site internet. Je vous conseillerai sur les solutions les plus adaptées à votre projet.",
      url: "https://img.icons8.com/fluency/344/road-worker.png",
    },
    {
      title: "Création Boutique En Ligne",
      description: "Création de site e-commerce en ligne pour votre entreprise afin de faire vivre votre marque.",
      url: "https://img.icons8.com/fluency/344/e-commerce.png",
    },
    {
      title: "Webdesign",
      description: "Dévelopement d'interfaces attrayantes et ergonomiques afin de vous démarquer des autres.",
      url: "https://img.icons8.com/fluency/344/web-design.png",
    }
  ];

  return (
    <section className="service" id="services">
      <Container>
        <Row>
          <Col size={12}>
            <div className="service-container">
              <h2>Mes Services</h2>
              <p>Web master proposant un large panel de service aux entreprises. Mon objectif est de fournir des stratégies et des services qui permettent à mes clients de réussir dans leur projet et à s’imposer dans leur domaine sur le monde digital d’aujourd’hui.</p>
              <Tab.Container id="service-tabs">
                <div className="service-wrapper">
                {
                  services.map((service, index) => {
                    return (
                      <ServiceCard
                        key={index}
                        {...service}
                      />
                    )
                  })
                }
                </div>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}