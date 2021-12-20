import React from 'react';
import { Card, Form } from 'react-bootstrap';
import { BsEmojiSmile } from 'react-icons/bs';

import styles from './Footer.module.scss';

export const Footer = () => (
    <Card.Footer className={styles.footer}>
        <BsEmojiSmile />
        <Form.Control
            type="text"
            placeholder="Add a comment..."
            className={styles.addCommentFormInput}
        />
    </Card.Footer>
);
