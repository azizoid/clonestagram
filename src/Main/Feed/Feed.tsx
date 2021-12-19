import classnames from 'classnames';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';

import styles from './Feed.module.scss';

export const Feed = () => {
    return (
        <Card className={styles.feed}>
            <Card.Header className={styles.header}>
                <div>
                    <Image
                        className="w-32"
                        src="https://picsum.photos/id/101/32/32"
                        roundedCircle={true}
                        thumbnail={true}
                    />
                    <Card.Link
                        className={classnames(
                            'profileUsernameLink',
                            styles.username,
                        )}>
                        azizoid
                    </Card.Link>
                </div>
                <Card.Link className={styles.threeDots}>
                    <BsThreeDots />
                </Card.Link>
            </Card.Header>
            <Card.Body>Body</Card.Body>
            <Card.Body>Footer</Card.Body>
        </Card>
    );
};
