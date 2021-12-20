import React from 'react';
import { Card, Row, Image } from 'react-bootstrap';
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
            <Card.Body>
                <div className={styles.reactionsBar}>
                    <div>
                        <BsHeart />
                        <BsChatRight />
                        <BsTelegram />
                    </div>
                    <BsBookmark />
                </div>
                <div className={styles.commentsAndLikesBar}>
                    <Card.Text className={styles.likes}>20 likes</Card.Text>
                    <Card.Text className={styles.title}>
                        <b>Username</b> Photo Title
                    </Card.Text>
                    <Card.Text>
                        <small>19 hours ago</small>
                    </Card.Text>
                </div>
            </Card.Body>

            <Card.Footer>Footer</Card.Footer>
        </Card>
    );
};
