import Input from 'antd/lib/input';
import clsx from 'clsx';
import SearchIcon from 'data/search.svg';
import { useFetchProducts } from 'hooks/useFetchProducts';
import React from 'react';
import styles from './SearchBar.module.scss';
interface ISearchBar {
    className?: string;
}

export const SearchBar: React.FC<ISearchBar> = ({ className }) => {
    const { setSearch } = useFetchProducts()
    const onSearch = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        e.preventDefault()
        setSearch(e.currentTarget.value)
    }
    return <div className={clsx(styles.searchWrapper, className)}>
        <Input placeholder="Search"
            onPressEnter={onSearch}
            suffix={<img src={SearchIcon} alt="search icon" />}
            className={styles.search} />
    </div>
};
