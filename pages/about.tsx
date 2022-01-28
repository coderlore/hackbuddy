import React from 'react';
import Page from '../components/Page';
import Head from 'next/head';
import { Container, Row, Col } from 'react-bootstrap';

const links = [
  {
    href: 'https://youtube.com/hackbuddyorg',
    title: 'youtube.com/hackbuddyorg',
  },
  {
    href: 'https://instagram.com/hackbuddyorg',
    title: 'instagram.com/hackbuddyorg',
  },
  {
    href: 'https://facebook.com/groups/hackbuddyorg',
    title: 'facebook.com/groups/hackbuddyorg',
  },
  {
    href: 'https://twitter.com/hackbuddyorg',
    title: 'twitter.com/hackbuddyorg',
  },
];

const meetupGroups = [
  'https://meetup.com/javascriptla',
  'https://meetup.com/hackbuddyoc',
];

const chatWithUs = [
  'https://discord.gg/Y9tDtmsWgq',
  'http://javascriptla.herokuapp.com',
];

export default function About() {
  return (
    <>
      <Page>
        <Head>
          <title>About Page</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <Container fluid>
            <Row>
              <Col>
                <h2>About</h2>
                <img
                  src={`https://javascriptla.net/wp-content/uploads/2019/04/meetup-farmers.jpg`}
                  width={`1100`}
                />
                <h3>You can officially follow us on the following channels:</h3>
                <ul>
                  {links.map((link) => (
                    <li key={link.title}>
                      <a target="_blank" href={`${link.href}`}>
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
                <h3>Our Meetup Groups</h3>
                <ul>
                  {meetupGroups.map((link) => (
                    <li>
                      <a target="_blank" href={`${link}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
                <h3>Chat with us</h3>
                <ul>
                  {chatWithUs.map((link) => (
                    <li>
                      <a target="_blank" href={`${link}`}>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </Page>
    </>
  );
}
