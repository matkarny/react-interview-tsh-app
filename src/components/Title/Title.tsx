import React from 'react';
import clsx from 'clsx'

import styles from './Title.module.scss'

interface ITitle {
    children: React.ReactNode,
    className?: string,
    size?: number
}

export const Title: React.FC<ITitle> = ({ children, className, size }) => {
    const fontStyle = { fontSize: `${size}px` }
    return <h1 className={clsx(styles.title, className)} style={size ? fontStyle : undefined} >{children}</h1>

};

export default Title