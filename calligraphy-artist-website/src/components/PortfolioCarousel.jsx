import { Row, Col, Card } from 'react-bootstrap';
import './PortfolioGrid.css'; // Ensure this file exists

// Import images from src/assets
import work1 from '../assets/sample1.jpg';
import work2 from '../assets/sample2.jpg';
import work3 from '../assets/sample3.jpg';
import work4 from '../assets/sample1.jpg';

const PortfolioGrid = () => {
  const portfolioItems = [
    { id: 1, title: "Modern Calligraphy", category: "calligraphy", image: work1 },
    { id: 2, title: "Wedding Invitation", category: "calligraphy", image: work2 },
    { id: 3, title: "Arabic Script", category: "traditional", image: work3 },
    { id: 4, title: "Ceramic Art", category: "art", image: work4 },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container py-5">
        <h2 className="display-5 fw-bold text-center mb-5">Featured Works</h2>
        <Row className="g-4">
          {portfolioItems.map((item) => (
            <Col key={item.id} md={6} lg={3}>
              <Card className="portfolio-card h-100 border-0">
                <div className="portfolio-img-container">
                  <Card.Img 
                    variant="top" 
                    src={item.image} 
                    alt={item.title}
                  />
                  <div className="portfolio-overlay">
                    <h3>{item.title}</h3>
                    <span className="badge bg-warning text-dark">{item.category}</span>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default PortfolioGrid;
