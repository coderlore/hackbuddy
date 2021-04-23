import { Container, Row, Col, Alert } from 'react-bootstrap';

const Footer = () => {
  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col>
              <h4>Corporate</h4>
              <ul>
                <li>About Us</li>
                <li>Terms of Service</li>
                <li>Code of Conduct</li>
                <li>Contact Us</li>
              </ul>
            </Col>
            <Col>
              <h4>Stay in Touch</h4>
              <ul>
                <li>Chat</li>
                <li>Meetups</li>
                <li>Team Hack</li>
                <li>Mentorships</li>
              </ul>
            </Col>
            <Col>
              <h4>Social</h4>
              <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>YouTube</li>
                <li>Instagram</li>
              </ul>
            </Col>
            <Col>
              <h4>Communications</h4>
              <ul>
                <li>Advertising / Media Kit</li>
                <li>Speak For Us</li>
                <li>Volunteer</li>
                <li>Store</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
      <Alert className="pt-3" variant="dark">
        Copyright 2021 (c) JavaScriptLA, LLC | HackBuddy is a trademark of
        JavaScriptLA, LLC
      </Alert>
    </>
  );
};

export default Footer;
