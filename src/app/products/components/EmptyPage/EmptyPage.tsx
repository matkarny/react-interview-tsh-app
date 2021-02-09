import { Card } from 'components/Card/Card';
import { CustomButton } from 'components/CustomButton/CustomButton';
import { IProduct } from 'interfaces/product';
import React, { useState } from 'react';
import star from 'data/star.svg'
import starOutlined from 'data/star-outlined.svg'

import styles from './EmptyPage.module.scss'
import { ReactComponent as BlankIcon } from 'data/blank.svg';


export const EmptyPage = () => {
    return <Card className={styles.emptyCard}>
            <BlankIcon />
            <h3>Ooops… It’s empty here</h3>
            <p>There are no products on the list</p>
        </Card>

};

export default EmptyPage
