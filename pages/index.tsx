import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
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
import { getAllPostsForHome } from '../lib/api';
import { removeDuplicateCategories } from '../lib/util';

export default function Home({ allPosts: { edges }, preview }) {
  const carouselPosts = edges.slice(0, 5);
  const morePosts = edges.slice(5);
  const categoriesRaw = edges.map(({ node }) => node.categories);
  const categories = removeDuplicateCategories(categoriesRaw);

  return (
    <Page>
      <Head>
        <title>HackBuddy Future Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Row>
        <Col>
          <Carousel style={{ textAlign: `center`, backgroundColor: `#000` }}>
            {/* could use filter */}
            {carouselPosts.map(
              ({ node }) =>
                node.featuredImage && (
                  <Carousel.Item key={node.slug}>
                    <Image
                      src={node.featuredImage?.node.sourceUrl}
                      width="1400"
                      height="640"
                    />
                  </Carousel.Item>
                ),
            )}
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
            {morePosts.map(({ node }) => (
              <Link href={`/blog/${node.slug}`}>
                <Col
                  md="3"
                  key={node.slug}
                  style={{ marginTop: `2rem` }}
                  style={{ cursor: `pointer` }}
                >
                  <Card>
                    <Card.Img
                      variant="top"
                      src={
                        node.featuredImage?.node.sourceUrl || 'image-block.svg'
                      }
                    />
                    <Card.Body>
                      <Card.Title className="text-center">
                        {node.title}
                      </Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              </Link>
            ))}
          </Row>
          <Row>
            <Col className="text-center">
              <h2 className="text-center">Popular Categories & Trends</h2>
              <Row>
                {/* Todo filter array duplicates - use Set */}
                {categories.map((category, index) => {
                  return (
                    <Col key={index} md="4" className="mb-4">
                      <Button>{category}</Button>
                    </Col>
                  );
                })}
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

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
}
