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
            <span className={styles.likes}>20 likes</span>
            <p className={styles.title}>
                <b>Username</b> Photo Title
            </p>
            <span className={styles.ago}>19 hours ago</span>
        </div>
    </Card.Body>
);
