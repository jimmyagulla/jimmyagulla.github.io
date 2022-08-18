import './PMG.css';
import { Col, Card, Button } from "react-bootstrap";

export const PMGCard = ({ title, description, image }) => {

  return (
    <Col>
      <div className="card-container">
        <Card className="cards">
          <div className="card-image">
            <Card.Img variant="top" src={image} />
          </div>
          <Card.Body className="card-body">
            <Card.Title className="card-title">{title}</Card.Title>
            <Card.Text className="card-description">{description}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Col>
  )
}