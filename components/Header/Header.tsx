import styles from './header.module.scss';
import { Row, Col } from 'react-bootstrap';
import Toggle from '../Toggle';
import Link from '../link';

interface IHeader {
  setDarkMode: (val: boolean) => void;
}
// replace with WP
const links = [
  {
    name: 'Home',
    id: 1,
    link: '/',
  },
  {
    name: 'About',
    id: 2,
    link: '/about',
  },
  {
    name: 'Speak For Us',
    id: 3,
    link: '/speak-for-us',
  },
  {
    name: 'Sponsors',
    id: 4,
    link: '/sponsors',
  },
  {
    name: 'Shop',
    id: 5,
    link: 'http://bit.ly/jsninjashirts',
    target: '_blank',
  },
];

const navLinks = links.map((link) => (
  <li key={link.id}>
    <Link text={link.name} target={link.target} link={link.link} />
  </li>
));

const NextMeetup = () => (
  <div className={`text-right ${styles.nextMeetup}`}>
    <Row className={`pad15`}>
      <Col>Next Meetup: Feb 24, 2022</Col>
    </Row>
  </div>
);

const Header = ({ setDarkMode }: IHeader) => {
  return (
    <header className={`${styles.header}`}>
      <Row className="pad15">
        <Col>
          <p className="mt-3 mb-0 logo">
            <a href="/">HackBuddy</a>
          </p>
          <p className="mt-2">Become a Better Software Engineer</p>
        </Col>
        <Col className="text-right">
          <ul className="mt-4 mb-0">{navLinks}</ul>
          <p className="mt-1">Welcome, Vijay!</p>
          <Toggle setDarkMode={setDarkMode} />
        </Col>
      </Row>
    </header>
  );
};

export default Header;
