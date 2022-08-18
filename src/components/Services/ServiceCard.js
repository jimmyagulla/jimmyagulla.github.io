import { Col } from "react-bootstrap";
import './Service.css';

export const ServiceCard = ({ title, description, url }) => {

  return (
    <Col size={16} sm={8} md={6}>
      <div className="service-card">
        <div className="service-card-img">
          <img src={url} />
        </div>
        <div className="service-card-txt">
          <div className="service-card-title">
            <h1>{title}</h1>
          </div>
          <div className="service-card-description">
            <p>{description}</p>
          </div>
        </div>
      </div>
    </Col>
  )
}