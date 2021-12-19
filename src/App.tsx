import React from 'react';
import styles from './App.module.scss';
import { Row } from 'react-bootstrap';
import { NavbarLayout } from './Main/Navbar/Navbar';
import { StoriesBar } from './Main/StoriesBar/StoriesBar';
import { Profile } from './Main/Profile/Profile';

export const App = () => {
    return (
        <div className={styles.App}>
            <Row>
                <NavbarLayout />
            </Row>

            <Row className={styles.main}>
                <StoriesBar />

                <Profile />
            </Row>
        </div>
    );
};

export default App;
