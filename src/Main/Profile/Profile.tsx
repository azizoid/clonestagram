import React from 'react';

import { Col, Card, Row, Image } from 'react-bootstrap';

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
    <Col md={{ span: 3 }} className={styles.profile}>
        <Card body={true} bg="light" border="light">
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
                    <Card.Link className={styles.profileLink}>
                        {username}
                    </Card.Link>
                    <Card.Text>{fullName}</Card.Text>
                </Col>
                <Col md={{ span: 3 }}>
                    <Card.Link className={styles.profileLink}>Switch</Card.Link>
                </Col>
            </Row>
        </Card>
    </Col>
);
