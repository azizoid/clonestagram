import React from 'react';
import styles from './App.module.scss';
import { Container, Col, Row } from 'react-bootstrap';
import { NavbarLayout } from './Main/Navbar/Navbar';
import { StoriesBar } from './Main/StoriesBar/StoriesBar';

export const App = () => {
    return (
        <Container className="App">
            <Row>
                <NavbarLayout />
            </Row>

            <Row className={styles.main}>
                <Col md={{ offset: 1, span: 7 }}>
                    <StoriesBar />
                </Col>
                <Col md={{ span: 3 }}>asdasd</Col>
            </Row>
        </Container>
    );
};

export default App;
