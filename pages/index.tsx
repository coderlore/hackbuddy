import React from 'react';
import Head from 'next/head';
import Page from '../components/Page';
import {
  Container,
  Card,
  Row,
  Col,
  Button,
  Alert,
  Carousel,
} from 'react-bootstrap';
// link up to Wordpress next

const categories = [
  'Data Structures / Algorithms',
  'Crypto & Bitcoin',
  'Python / Data Science',
  'React / Vue / Angular',
  'JavaScript / Node.js',
  'iOS / Swift',
];

//TODO- Add to CMS
const contentSlider = [
  {
    imageSrc: 'image-block.svg',
    id: 1,
    title: 'First Slide Label',
    content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    imageSrc: 'image-block.svg',
    id: 2,
    title: 'Second Slide Label',
    content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    imageSrc: 'image-block.svg',
    id: 3,
    title: 'Third Slide Label',
    content: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
];

//TODO - Fetch
const meetups = [
  {
    id: 1,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 2,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 3,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 4,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 5,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 6,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 7,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 8,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 9,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 10,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 11,
    title: 'Learn React with Vijay Menon',
  },
  {
    id: 12,
    title: 'Learn React with Vijay Menon',
  },
];

export default function Home() {
  return (
    <Page>
      <Head>
        <title>HackBuddy Future Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col>
          <Carousel>
            {contentSlider.map((item) => (
              <Carousel.Item key={item.id}>
                <img
                  className="d-block w-100"
                  src={item.imageSrc}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>{item.title}</h3>
                  <p>{item.content}</p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
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
            {meetups.map((item) => (
              <Col md="3" key={item.id} style={{ marginTop: `2rem` }}>
                <Card>
                  <Card.Img variant="top" src="image-block.svg" />
                  <Card.Body>
                    <Card.Title className="text-center">
                      {item.title}
                    </Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <Row>
            <Col className="text-center">
              <h2 className="text-center">Popular Categories & Trends</h2>
              <Row>
                {categories.map((category, id) => (
                  <Col key={id} md="4" className="mb-4">
                    <Button style={{ width: `320px`, height: `57px` }}>
                      {category}
                    </Button>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
        <Alert variant={`warning`} style={{ marginTop: `2rem` }}>
          On Sale Now! Full Stack React Course Just $9.99 (Click Here)
        </Alert>
      </div>
    </Page>
  );
}
