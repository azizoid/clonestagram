import React from 'react';
import { Card } from 'react-bootstrap';
import { BsHeart, BsChatRight, BsTelegram, BsBookmark } from 'react-icons/bs';

import styles from './Info.module.scss';

export const Info = () => (
    <Card.Body className={styles.info}>
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
);
