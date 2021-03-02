import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Alert,
  Carousel,
} from "react-bootstrap";
// link up to Wordpress next

const categories = [
  "Data Structures / Algorithms",
  "Crypto & Bitcoin",
  "Python / Data Science",
  "React / Vue / Angular",
  "JavaScript / Node.js",
  "iOS / Swift",
];

const sponsors = ["1", "2", "3", "4"];

export const DarkContext = React.createContext(false);

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`main ${darkMode ? "dark" : "light"}`}>
      <Head>
        <title>HackBuddy Future Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DarkContext.Provider value={darkMode}>
        <Header setDarkMode={setDarkMode} />
      </DarkContext.Provider>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="image-block.svg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="image-block.svg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="image-block.svg"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>

      <div>
        <Container className="home">
          <Row>
            <Col>
              <h2 className="mt-4 mb-4 text-center">Explore HackBuddy</h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="image-block.svg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="image-block.svg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="image-block.svg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
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
                {categories.map((category, id) => (
                  <Col key={id} md="4" className="mb-4">
                    <Button>{category}</Button>
                  </Col>
                ))}
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
              {sponsors.map((sponsor, id) => (
                <div key={id} className="sponsor"></div>
              ))}
              <div className="ad">This is an ad</div>
              <div>
                <span className="tag">This is a tag</span>
                <span className="tag secondary">This is another tag</span>
              </div>
            </Col>
          </Row>
        </Container>
        <Alert variant={`primary`}>
          On Sale Now! Full Stack React Course Just $9.99 (Click Here)
        </Alert>
      </div>
      <Footer />
    </div>
  );
}
