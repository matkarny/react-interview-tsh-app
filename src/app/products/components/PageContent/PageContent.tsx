import React from 'react';

import styles from './PageContent.module.scss'


interface IContent{
    children: React.ReactNode
}

export const PageContent: React.FC<IContent> = ({children}) => {
    
    return <div className={styles.content}>
        {children}
    </div>

};
