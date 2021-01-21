import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import {Container, Card, Row, Col, Button, Alert} from 'react-bootstrap'
// link up to Wordpress next

export default function Home() {
  return (
      <>
      <Head>
        <title>HackBuddy Future Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div>
        <Container className="home">
          <Row>
            <Col>
              <h2 className="mt-4 mb-4 text-center">Explore HackBuddy</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="image-block.svg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="image-block.svg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>
              <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="image-block.svg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
              </Col>
          </Row>
          <Row>
            <Col className="text-center">
              <h2 className="text-center">Popular Categories & Trends</h2>
              <Row>
                <Col>
                  <Button variant="success">Data Structures / Algorithms</Button>
                </Col>
                <Col>
                  <Button variant="dark">Crypto & Bitcoin</Button>
                </Col>
                <Col>
                  <Button variant="secondary">Python / Data Science</Button>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="text-center">Jobs & Announcements</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 className="text-center">Sponsors</h2>
              <div className="sponsor"></div>
              <div className="ad">This is an ad</div>
              <div>
                <span className="tag">This is a tag</span>
                <span className="tag secondary">This is another tag</span>
              </div>
            </Col>
          </Row>
        </Container>
        <Alert variant={`primary`}>On Sale Now! Full Stack React Course Just $9.99 (Click Here)</Alert>
      </div>
      <Footer />
    </>
    
  )
}
