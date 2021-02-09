
import Input from 'antd/lib/input';
import React from 'react';
import SearchIcon from 'data/search.svg'

import styles from './SearchBar.module.scss'
import clsx from 'clsx';

interface ISearchBar{
    className?: string;
}

export const SearchBar: React.FC<ISearchBar> = ({className}) => {
    const onSearch = (e: React.FormEvent<HTMLElement>) => { console.log(e) }
    return   <div className={clsx(styles.searchWrapper, className)}>
            <Input placeholder="Search" 
            onPressEnter={onSearch as any} 
            suffix={<img src={SearchIcon} alt="search icon" />} 
            className={styles.search}/>
        </div>
};
