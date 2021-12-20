import React from 'react';
import { Card } from 'react-bootstrap';
import { BsHeart, BsChatRight, BsTelegram, BsBookmark } from 'react-icons/bs';
import { Username } from 'lib/ui/Username/Username';

import styles from './Info.module.scss';

export type InfoProp = {
    username: string;
};

export const Info = ({ username }: InfoProp): JSX.Element => (
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
                <Username username={username} /> Photo Title
            </p>
            <span className={styles.ago}>19 hours ago</span>
        </div>
    </Card.Body>
);
