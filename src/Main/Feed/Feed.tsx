import React from 'react';
import { Card, Image } from 'react-bootstrap';

import styles from './Feed.module.scss';
import { Header } from './Header/Header';
import { Info } from './Info/Info';

export const Feed = () => {
    return (
        <Card className={styles.feed}>
            <Header />

            <Image
                className="w-614"
                src="https://picsum.photos/id/101/614/614"
            />

            <Info />

            <Card.Footer>Footer</Card.Footer>
        </Card>
    );
};
