import { Card } from 'components/Card/Card';
import { CustomButton } from 'components/CustomButton/CustomButton';
import { IProduct } from 'interfaces/product';
import React from 'react';
import star from 'data/star.svg'
import starOutlined from 'data/star-outlined.svg'

import styles from './Footer.module.scss'
import { Star } from 'components/Star/Star';
import { CustomPagination } from 'components/CustomPagination/CustomPagination';

interface IFooter{

}


export const Footer: React.FC<IFooter> = () => {
    
    return <div className={styles.footer}>
            <CustomPagination />
    </div>

};
