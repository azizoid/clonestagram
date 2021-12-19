import React from 'react';
import styles from './App.module.scss';
import { Row } from 'react-bootstrap';
import { NavbarLayout } from './Main/Navbar/Navbar';
import { StoriesBar } from './Main/StoriesBar/StoriesBar';

export const App = () => {
    return (
        <div className={styles.App}>
            <Row>
                <NavbarLayout />
            </Row>

            <Row className={styles.main}>
                <StoriesBar />
            </Row>
        </div>
    );
};

export default App;
