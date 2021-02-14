import clsx from 'clsx';
import React from 'react';
import styles from './CustomCard.module.scss';


interface ICustomCard {
    children: React.ReactNode,
    className?: string,
}

export const CustomCard: React.FC<ICustomCard> = ({ children, className }) => {
    return <div className={clsx(styles.card, className)}>{children}</div>

};

export default CustomCard