import clsx from 'clsx';
import React from 'react';

import styles from './Card.module.scss'

interface ICard {
    children: React.ReactNode,
    className?: string,
}

export const Card: React.FC<ICard> = ({ children, className }) => {
    return <div className={clsx(styles.card, className)}>{children}</div>

};
