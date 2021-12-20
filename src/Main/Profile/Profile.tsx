import React from 'react';

import { Col, Card, Row, Image } from 'react-bootstrap';

import { Username } from 'lib/ui/Username/Username';

import styles from './Profile.module.scss';

export type ProfileProps = {
    username: string;
    fullName: string;
    image: string;
};

export const Profile = ({
    username,
    fullName,
    image,
}: ProfileProps): JSX.Element => (
    <Card body={true} bg="light" border="light" className={styles.profile}>
        <Row className="align-items-center">
            <Col md={{ span: 3 }}>
                <Image
                    className="w-56"
                    src={image}
                    roundedCircle={true}
                    thumbnail={true}
                />
            </Col>
            <Col md={{ span: 6 }}>
                <Username username={username} />
                <Card.Text>{fullName}</Card.Text>
            </Col>
            <Col md={{ span: 3 }}>
                <Card.Link className="profileUsernameLink">Switch</Card.Link>
            </Col>
        </Row>
    </Card>
);
