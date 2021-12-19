import React from 'react';
import { Card, Col } from 'react-bootstrap';

export const Feed = () => {
    return (
        <Col md={{ offset: 2, span: 6 }}>
            <Card>
                <Card.Header>Header</Card.Header>
                <Card.Body>Body</Card.Body>
                <Card.Footer>Footer</Card.Footer>
            </Card>
        </Col>
    );
};
