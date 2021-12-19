import React, { useState } from 'react';
import styles from './App.module.scss';
import { Col, Row } from 'react-bootstrap';
import { NavbarLayout } from './Main/Navbar/Navbar';
import { StoriesBar } from './Main/StoriesBar/StoriesBar';
import { Profile } from './Main/Profile/Profile';
import { Feed } from './Main/Feed/Feed';

export const App = () => {
    const [me, setMe] = useState({
        username: 'azizoid',
        fullName: 'Aziz Shahhuseynov',
        image: 'https://picsum.photos/id/473/56/56',
    });

    return (
        <div className={styles.App}>
            <Row>
                <NavbarLayout />
            </Row>

            <Row className={styles.main}>
                <Col md={{ offset: 2, span: 6 }}>
                    <StoriesBar />
                    <Feed />
                </Col>

                <Col md={{ span: 3 }}>
                    <Profile {...me} />
                </Col>
            </Row>
        </div>
    );
};

export default App;
