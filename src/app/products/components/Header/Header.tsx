import { Card } from 'components/Card/Card';
import { CustomButton } from 'components/CustomButton/CustomButton';
import { IProduct } from 'interfaces/product';
import React from 'react';
import star from 'data/star.svg'
import starOutlined from 'data/star-outlined.svg'

import styles from './Header.module.scss'
import { Star } from 'components/Star/Star';
import { Title } from 'components/Title/Title';
import Search from 'antd/lib/input/Search';
import { CustomCheckbox } from 'components/CustomCheckbox/CustomCheckbox';
import { SearchBar } from 'components/SearchBar/SearchBar';
import { useHistory } from 'react-router-dom';
import { AppRoute } from 'routing/AppRoute.enum';
import Logo from 'components/Logo/Logo';

interface IHeader{
}

export const Header: React.FC<IHeader> = () => {
    const history = useHistory()
    return <div className={styles.header}>
            <Logo className={styles.logo}/>
            <SearchBar className={styles.search}/>
            <div className={styles.checkboxWrapper}>
                <CustomCheckbox> Active</CustomCheckbox>
                <CustomCheckbox> Promo</CustomCheckbox>
            </div>
            <CustomButton type="outlined" className={styles.button} onClick={() => history.push(AppRoute.login)}>Log in</CustomButton>
        </div>

};
