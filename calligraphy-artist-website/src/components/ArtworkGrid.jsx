import { Container, Row, Col, Card } from "react-bootstrap";
import "./ArtworkGrid.css"; 
import art1 from "../assets/sample1.jpg";
import art2 from "../assets/sample2.jpg";
import art3 from "../assets/sample3.jpg";
import art4 from "../assets/sample1.jpg";
import art5 from "../assets/sample2.jpg";
import art6 from "../assets/sample3.jpg";
import art7 from "../assets/sample1.jpg";
import art8 from "../assets/sample2.jpg";

const artworks = [
  { id: 1, title: "Modern Calligraphy", category: "Calligraphy", image: art1, price: "$150", code: "ART001", size: "16x20 inches", medium: "Ink on Paper" },
  { id: 2, title: "Wedding Invitation", category: "Typography", image: art2, price: "$120", code: "ART002", size: "12x18 inches", medium: "Watercolor on Paper" },
  { id: 3, title: "Arabic Script", category: "Traditional", image: art3, price: "$200", code: "ART003", size: "18x24 inches", medium: "Acrylic on Canvas" },
  { id: 4, title: "Ceramic Art", category: "Art", image: art4, price: "$180", code: "ART004", size: "14x22 inches", medium: "Oil on Canvas" },
  { id: 5, title: "Elegant Handwriting", category: "Lettering", image: art5, price: "$130", code: "ART005", size: "12x16 inches", medium: "Graphite on Paper" },
  { id: 6, title: "Classic Manuscript", category: "Vintage", image: art6, price: "$220", code: "ART006", size: "20x30 inches", medium: "Ink on Parchment" },
  { id: 7, title: "Abstract Patterns", category: "Modern", image: art7, price: "$175", code: "ART007", size: "16x24 inches", medium: "Mixed Media on Canvas" },
  { id: 8, title: "Minimalist Design", category: "Contemporary", image: art8, price: "$140", code: "ART008", size: "14x20 inches", medium: "Digital Print on Canvas" },
];

const ArtworkGrid = () => {
  return (
    <section className="artwork-section">
      <Container>
        <h2 className="display-5 fw-bold text-center mb-4">Featured Artworks</h2>
        <Row className="gx-2 gy-4"> {/* Adjusted spacing */}
          {artworks.map((art) => (
            <Col key={art.id} sm={6} md={4} lg={3}>
              <Card className="artwork-card">
                <Card.Img variant="top" src={art.image} alt={art.title} />
                <Card.Body>
                  <Card.Title className="fw-bold">{art.title}</Card.Title>
                  <Card.Text className="text-muted">{art.category}</Card.Text>
                  <ul className="art-details">
                    <li><strong>Price: {art.price} </strong></li>
                    <li><strong>Code:</strong> {art.code}</li>
                    <li><strong>Size:</strong> {art.size}</li>
                    <li><strong>Medium:</strong> {art.medium}</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ArtworkGrid;
