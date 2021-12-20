import React from 'react';
import classnames from 'classnames';

import { Card, Image } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';

import styles from './Header.module.scss';

export const Header = () => (
    <Card.Header className={styles.header}>
        <div>
            <Image
                className="w-32"
                src="https://picsum.photos/id/101/32/32"
                roundedCircle={true}
                thumbnail={true}
            />
            <Card.Link
                className={classnames('profileUsernameLink', styles.username)}>
                azizoid
            </Card.Link>
        </div>
        <Card.Link className={styles.threeDots}>
            <BsThreeDots role="icon" />
        </Card.Link>
    </Card.Header>
);
