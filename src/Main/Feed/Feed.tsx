import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { BsHeart, BsChatRight, BsTelegram, BsBookmark } from 'react-icons/bs';

import styles from './Feed.module.scss';
import { Header } from './Header/Header';

export const Feed = () => {
    return (
        <Card className={styles.feed}>
            <Header />

            <Image
                className="w-614"
                src="https://picsum.photos/id/101/614/614"
            />
            <Card.Body className={styles.reactionsBar}>
                <div>
                    <BsHeart />
                    <BsChatRight />
                    <BsTelegram />
                </div>
                <BsBookmark />
            </Card.Body>

            <Card.Body>Footer</Card.Body>
        </Card>
    );
};
