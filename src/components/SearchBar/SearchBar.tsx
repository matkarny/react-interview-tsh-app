
import Input from 'antd/lib/input';
import React from 'react';
import SearchIcon from 'data/search.svg'

import styles from './SearchBar.module.scss'

export const SearchBar = () => {
    const onSearch = (e: React.FormEvent<HTMLElement>) => { console.log(e) }
    return   <div className={styles.searchWrapper}>
            <Input placeholder="Search" 
            onPressEnter={onSearch as any} 
            suffix={<img src={SearchIcon} alt="search icon" />} 
            className={styles.search}/>
        </div>
};
