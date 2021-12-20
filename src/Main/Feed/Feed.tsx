import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Header } from './Header/Header';
import { Info } from './Info/Info';
import { Footer } from './Footer/Footer';

import styles from './Feed.module.scss';

export const Feed = () => {
    return (
        <Card className={styles.feed}>
            <Header />

            <Image
                className="w-614"
                src="https://picsum.photos/id/101/614/614"
            />

            <Info username="Azizoid" />

            <Footer />
        </Card>
    );
};
