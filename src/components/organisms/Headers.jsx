import { Button, Row, Col, Container, Card } from 'react-bootstrap';
import pict from '../../assets/img/logo.png';
import { getNews } from '../../services/news.service';
import { useEffect, useState } from 'react';
import CardSkeleton from './CardSkeleton';
import { Link } from 'react-scroll';

export default function Headers() {
  const [newsID, setNewsID] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getNews();
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
    <div className="bg-headers bg-fixed">
      <div>
      <Container fluid className='px-10 py-2'>
            <Row className='min-h-screen'>
              <Col className="flex justify-center items-center">
                <div>
                  <div className="text-5xl text-left font-semibold">
                    Dapatkan Informasi Terbaru Untuk Hari-Harimu
                  </div>
                  <Link
                    to="beranda"
                    activeClass="active"
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
                <div className='text-5xl text-center mt-2 font-bold'>HOT NEWS</div>
                {isLoading ? (
                    <>
                    <div className="h-64 mt-5 grid sm:grid-rows-3">
                      <CardSkeleton />
                      <CardSkeleton />
                      <CardSkeleton />
                    </div>
                    </>
                  ) : (
                    <>
                    {newsID.slice(4, 7).map((article, idx) => (
                    <Card key={`${article?.title}-${idx}`} className="h-fit mt-2 bg-white">
                    <Card.Body>
                      <Row>
                        <Col>
                          <Card.Title className="text-sm">{article.title}</Card.Title>
                          <a href={article.url} target="_blank" className='flex justify-end'>
                            <Button variant="dark" style={{ color: 'black' }}>
                              Go
                            </Button>
                          </a>
                        </Col>
                      </Row>
                    </Card.Body>
                    </Card>
                    ))}
                    </>
                  )}
              </Col>
            </Row>
      </Container>
      </div>  
    </div>
  );
}
