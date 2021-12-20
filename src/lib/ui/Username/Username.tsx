import React from 'react';
import classnames from 'classnames';

import styles from './Username.module.scss';

export type UsernameProps = {
    username: string;
    className?: string;
};

export const Username = ({
    username,
    className,
}: UsernameProps): JSX.Element => (
    <a href="/#username" className={classnames(styles.username, className)}>
        {username}
    </a>
);
