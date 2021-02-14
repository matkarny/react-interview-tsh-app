import React, { useState } from 'react';
import clsx from 'clsx';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button/button'
import useFetchProducts from 'hooks/useFetchProducts';
import {ReactComponent as SearchIcon} from 'data/search.svg';
import styles from './SearchBar.module.scss';

interface ISearchBar {
    className?: string;
}

export const SearchBar: React.FC<ISearchBar> = ({ className }) => {
    const [searching, setSearching] = useState('')
    const { setSearch } = useFetchProducts()
    
    const onSearch = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setSearch(e.currentTarget.value)
    }
    const onSearching = ( e: React.ChangeEvent<HTMLInputElement>) => setSearching(e.target.value)
    const onIconSearch = () => setSearch(searching)
    
    return <div className={clsx(styles.searchWrapper, className)}>
        <Input placeholder="Search"
            onPressEnter={onSearch}
            onChange={onSearching}
            suffix={<Button icon={<SearchIcon />} shape="circle" className={styles.searchIcon} onClick={onIconSearch}/>}
            className={styles.search} />
    </div>
};

export default SearchBar