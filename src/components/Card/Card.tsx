import React from 'react';

import styles from './Card.module.scss'

interface ICard {
    children: React.ReactNode
}

export const Card: React.FC<ICard> = ({ children }) => {
    return <div className={styles.card}>{children}</div>

};
