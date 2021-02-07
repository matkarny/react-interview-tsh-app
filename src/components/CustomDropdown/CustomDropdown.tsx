import React from 'react';

import styles from './Title.module.scss'

interface ITitle {
    children: React.ReactNode
}

export const Title: React.FC<ITitle> = ({ children }) => {
    return <h1 className={styles.title}>{children}</h1>

};
