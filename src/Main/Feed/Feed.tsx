import React from 'react';
import { Card } from 'react-bootstrap';

import styles from './Feed.module.scss';
import { Header } from './Header/Header';

export const Feed = () => {
    return (
        <Card className={styles.feed}>
            <Header />
            <Card.Body>Body</Card.Body>
            <Card.Body>Footer</Card.Body>
        </Card>
    );
};
