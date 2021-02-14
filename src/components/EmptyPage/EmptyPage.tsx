import CustomCard from 'components/CustomCard/CustomCard';
import { ReactComponent as BlankIcon } from 'data/blank.svg';

import React from 'react';
import styles from './EmptyPage.module.scss';



export const EmptyPage = () => {
    return <CustomCard className={styles.emptyCard}>
                <BlankIcon />
                <h3>Ooops… It’s empty here</h3>
                <p>There are no products on the list</p>
            </CustomCard>

};

export default EmptyPage
