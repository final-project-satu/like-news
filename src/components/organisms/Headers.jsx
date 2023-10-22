import { Button, Row, Col, Container, Card } from 'react-bootstrap';
import pict from '../../assets/img/logo.png';
import { getNewsIndonesia } from '../../services/news.service';
import { useEffect, useState } from 'react';
import IMG from '../../assets/img/header-card.png';
import LazyLoad from 'react-lazy-load';
import { Link } from 'react-scroll';

export default function Headers() {
  const [newsID, setNewsID] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNewsIndonesia();
        setNewsID(data);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="bg-headers">
      <Container>
        <div>
          <div>
            <Row style={{ minHeight: '100vh' }}>
              <Col className="col-header">
                <div>
                  <div className="text-5xl text-left">
                    Dapatkan Informasi Terbaru Untuk Hari-Harimu
                  </div>
                  <Link
                    to="beranda"
                    activeClass="active"
                    spy="true"
                    smooth="true"
                    offset={-70}
                    duration={500}
                  >
                    <Button variant="outline-dark" className="btn-headers">
                      Start Read
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col className="m-2">
                <div className="flex justify-center items-center">
                  <img src={pict} />
                </div>
                {newsID.slice(0, 2).map((article, idx) => (
                  <Card key={`${article?.title}-${idx}`} className="h-48 mt-3">
                    <Card.Body>
                      <Row>
                        <Col className="flex justify-center items-center">
                          <LazyLoad>
                            <Card.Img src={article.urlToImage || IMG} alt={article.title} />
                          </LazyLoad>
                        </Col>
                        <Col>
                          <Card.Title className="text-sm">{article.title}</Card.Title>
                          <a href={article.url}>
                            <Button variant="dark" style={{ color: 'black' }}>
                              Go
                            </Button>
                          </a>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
