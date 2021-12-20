import React from 'react';

import styles from './Username.module.scss';

export type UsernameProps = {
    username: string;
};

export const Username = ({ username }: UsernameProps): JSX.Element => (
    <a className={styles.username}>{username}</a>
);
