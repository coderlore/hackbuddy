import styles from './header.module.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Toggle from '../Toggle'

const Header = () => {
    return (
        <header className={styles.header}>
            <Container>
                <Row>
                    <Col>
                        <p className="mt-3 mb-0 logo">HackBuddy</p>
                        <p className="mt-1 font-italic">Become a Better Software Engineer</p>
                    </Col>
                    <Col className="text-right">
                        <p className="mt-4 mb-0">Home | About | Speak For Us | Sponsors | Shop</p>
                        <p className="mt-1">Welcome, Vijay</p>
                        <Toggle status={true} className="mb-2" />
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default Header