import React from 'react';
import clsx from 'clsx'

import styles from './Title.module.scss'

interface ITitle {
    children: React.ReactNode,
    className?: string,
}

export const Title: React.FC<ITitle> = ({ children, className }) => {
    return <h1 className={clsx(styles.title, className)} >{children}</h1>

};
