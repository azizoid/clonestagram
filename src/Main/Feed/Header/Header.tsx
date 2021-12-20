import React, { useState } from 'react';

import { Button, Card, Image, ListGroup, Modal } from 'react-bootstrap';
import { BsThreeDots } from 'react-icons/bs';

import { Username } from 'lib/ui/Username/Username';

import styles from './Header.module.scss';

export const Header = () => {
    const [postMenuVisibility, setPostMenuVisibility] = useState(false);

    return (
        <Card.Header className={styles.header}>
            <div>
                <Image
                    className="w-32"
                    src="https://picsum.photos/id/101/32/32"
                    roundedCircle={true}
                    thumbnail={true}
                />
                <Username username="azizoid" className={styles.username} />
            </div>
            <Card.Link className={styles.threeDots}>
                <Button
                    onClick={() => setPostMenuVisibility((prev) => !prev)}
                    variant="link">
                    <BsThreeDots role="icon" />
                </Button>
                <Modal
                    show={postMenuVisibility}
                    onHide={() => setPostMenuVisibility(false)}
                    centered={true}>
                    <Modal.Body>
                        <ListGroup variant="flush">
                            {[
                                { title: 'Report', mark: true, href: '#' },
                                { title: 'Unfollow', mark: true, href: '#' },
                                { title: 'Go to post', mark: false, href: '#' },
                                {
                                    title: 'Share to...',
                                    mark: false,
                                    href: '#',
                                },
                                { title: 'Copy link', mark: false, href: '#' },
                                { title: 'Embed', mark: false, href: '#' },
                            ].map(({ title, mark, href }, index) => (
                                <ListGroup.Item key={index}>
                                    <a
                                        href={href}
                                        {...(mark && {
                                            className: styles.markedLink,
                                        })}>
                                        {title}
                                    </a>
                                </ListGroup.Item>
                            ))}
                            <ListGroup.Item>
                                <Button
                                    onClick={() => setPostMenuVisibility(false)}
                                    variant="link"
                                    style={{ textDecoration: 'none' }}>
                                    Close
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Modal.Body>
                </Modal>
            </Card.Link>
        </Card.Header>
    );
};
